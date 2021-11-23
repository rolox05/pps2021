import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { Domicilio } from './entities/domicilio.entity';
import { DomicilioResolver } from './domicilio.resolver';
import { DomicilioService } from './domicilio.service';
import { DepartamentoModule } from './../departamento/departamento.module';
import { PersonaModule } from './../persona/persona.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Domicilio]),
    forwardRef(() => PersonaModule),
    forwardRef(() => DepartamentoModule)
  ],
  providers: [DomicilioResolver, DomicilioService],
  exports: [DomicilioService]
})
export class DomicilioModule {}
