import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UpdatePersonaOutput {
  @Field({ nullable: true })
  id: string;
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
