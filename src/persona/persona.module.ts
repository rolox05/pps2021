import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Persona } from './entities/persona.entity';
import { PersonaResolver } from './persona.resolver';
import { PersonaService } from './persona.service';
import { PubSubModule } from '../pubsub/pubsub.module';

@Module({
  imports: [TypeOrmModule.forFeature([Persona]), PubSubModule],
  providers: [PersonaResolver, PersonaService],
  exports: [PersonaService]
})
export class PersonaModule {}
