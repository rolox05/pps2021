import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';

import { Provincia } from './entities/provincia.entity';
import { ProvinciaResolver } from './provincia.resolver';
import { ProvinciaService } from './provincia.service';
import { PaisModule } from './../pais/pais.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Provincia]),
    forwardRef(() => PaisModule)
  ],
  providers: [ProvinciaResolver, ProvinciaService],
  exports: [ProvinciaService]
})
export class ProvinciaModule {}
