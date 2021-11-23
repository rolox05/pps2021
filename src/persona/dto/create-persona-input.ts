import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePersonaInput {
  @Field()
  nombre: string;
  @Field()
  apellido: string;
  @Field()
  dni: number;
  @Field()
  legajo: number;
  @Field({ nullable: true })
  fechaNac: Date;
}
