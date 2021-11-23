import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Domicilio } from './entities/domicilio.entity';
import { DomicilioService } from './domicilio.service';
import { CreateDomicilioInput } from './dto/create-domicilio-input';

@Resolver(() => Domicilio)
export class DomicilioResolver {
  constructor(private readonly domicilioService: DomicilioService) {}

  @Mutation(() => Domicilio)
  createDomicilio(
    @Args('createDomicilioInput')
    createDomicilioInput: CreateDomicilioInput
  ) {
    return this.domicilioService.create(
      createDomicilioInput,
      createDomicilioInput.personaId,
      createDomicilioInput.departamentoId
    );
  }

  @Query(() => [Domicilio], { name: 'domicilios' })
  findAll() {
    return this.domicilioService.findAll();
  }
}
