import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UpdatePersonaInput {
  @Field()
  personaId: string;
  @Field({ nullable: true })
  nombre: string;
  @Field({ nullable: true })
  apellido: string;
  @Field({ nullable: true })
  dni: number;
  @Field({ nullable: true })
  legajo: number;
  @Field({ nullable: true })
  fechaNac: Date;
}
