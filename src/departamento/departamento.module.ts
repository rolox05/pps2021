import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { Departamento } from './entities/departamento.entity';
import { DepartamentoResolver } from './departamento.resolver';
import { DepartamentoService } from './departamento.service';
import { ProvinciaModule } from './../provincia/provincia.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Departamento]),
    forwardRef(() => ProvinciaModule)
  ],
  providers: [DepartamentoResolver, DepartamentoService],
  exports: [DepartamentoService]
})
export class DepartamentoModule {}
