import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Provincia } from './entities/provincia.entity';
import { ProvinciaService } from './provincia.service';
import { CreateProvinciaInput } from './dto/create-provincia-input';

@Resolver(() => Provincia)
export class ProvinciaResolver {
  constructor(private readonly provinciaService: ProvinciaService) {}

  @Mutation(() => Provincia)
  createProvincia(
    @Args('createProvinciaInput')
    createProvinciaInput: CreateProvinciaInput
  ) {
    return this.provinciaService.create(
      createProvinciaInput,
      createProvinciaInput.paisId
    );
  }

  @Query(() => [Provincia], { name: 'Provincias' })
  findAll() {
    return this.provinciaService.findAll();
  }
}
