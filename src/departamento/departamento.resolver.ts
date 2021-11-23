import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Departamento } from './entities/departamento.entity';
import { DepartamentoService } from './departamento.service';
import { CreateDepartamentoInput } from './dto/create-departamento-input';

@Resolver(() => Departamento)
export class DepartamentoResolver {
  constructor(private readonly departamentoService: DepartamentoService) {}

  @Mutation(() => Departamento)
  createDepartamento(
    @Args('createDepartamentoInput')
    createDepartamentoInput: CreateDepartamentoInput
  ) {
    return this.departamentoService.create(
      createDepartamentoInput,
      createDepartamentoInput.provinciaId
    );
  }

  @Query(() => [Departamento], { name: 'departamentos' })
  findAll() {
    return this.departamentoService.findAll();
  }
}
