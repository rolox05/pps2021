import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProvinciaInput {
  @Field()
  nombre: string;
  @Field()
  poblacion: number;
  @Field()
  paisId: string;
}
