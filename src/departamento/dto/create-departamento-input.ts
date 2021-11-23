import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartamentoInput {
  @Field()
  nombre: string;
  @Field()
  codPostal: number;
  @Field()
  provinciaId: string;
}
