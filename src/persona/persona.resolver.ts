import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Subscription } from '@nestjs/graphql';
import { PostgresPubSub } from 'graphql-postgres-subscriptions';

import { Persona } from './entities/persona.entity';
import { PersonaService } from './persona.service';
import { CreatePersonaInput } from './dto/create-persona-input';
import { UpdatePersonaInput } from './dto/update-persona-input';
import { UpdatePersonaOutput } from './dto/update-persona.output';

@Resolver(() => Persona)
export class PersonaResolver {
  constructor(
    private readonly personaService: PersonaService,
    @Inject('PUB_SUB') private pubSub: PostgresPubSub
  ) {}

  @Query(() => [Persona], { name: 'personas' })
  findAll() {
    return this.personaService.findAll();
  }

  @Query(() => Persona, { name: 'persona' })
  findOne(@Args('personaId') personaId: string) {
    return this.personaService.findOne(personaId);
  }

  @Query(() => Persona, { name: 'personaUpdated' })
  findO(@Args('personaId') personaId: string) {
    return this.personaService.findOne(personaId);
  }

  @Mutation(() => Persona)
  createPersona(
    @Args('createPersonaInput')
    createPersonaInput: CreatePersonaInput
  ) {
    return this.personaService.create(createPersonaInput);
  }

  @Mutation(() => Persona)
  updatePersona(
    @Args('updatePersonaInput')
    updatePersonaInput: UpdatePersonaInput
  ) {
    const personaUpdated = this.personaService.update(updatePersonaInput);

    this.pubSub.publish('personaUpdated', {
      personaUpdated: {
        ...personaUpdated,
        personaId: updatePersonaInput.personaId
      }
    });
    return personaUpdated;
  }

  @Subscription(returns => UpdatePersonaOutput, {
    filter: (payload, variables) => {
      const { personaUpdated } = payload;

      return personaUpdated.personaId === variables.personaId;
    }
  })
  personaUpdated(@Args('personaId') personaId: string) {
    return this.pubSub.asyncIterator('personaUpdated');
  }
}
