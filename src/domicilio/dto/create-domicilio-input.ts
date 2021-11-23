import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDomicilioInput {
  @Field()
  calle: string;
  @Field()
  numero: string;
  @Field()
  personaId: string;
  @Field()
  departamentoId: string;
}
