import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Pais } from './entities/pais.entity';
import { PaisService } from './pais.service';
import { CreatePaisInput } from './dto/create-pais-input';

@Resolver(() => Pais)
export class PaisResolver {
  constructor(private readonly paisService: PaisService) {}

  @Mutation(() => Pais)
  createPais(
    @Args('createPaisInput')
    createPaisInput: CreatePaisInput
  ) {
    return this.paisService.create(createPaisInput);
  }

  @Query(() => [Pais], { name: 'Paises' })
  findAll() {
    return this.paisService.findAll();
  }
}
