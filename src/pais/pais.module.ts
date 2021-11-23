import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { Pais } from './entities/pais.entity';
import { PaisResolver } from './pais.resolver';
import { PaisService } from './pais.service';

@Module({
  imports: [TypeOrmModule.forFeature([Pais])],
  providers: [PaisResolver, PaisService],
  exports: [PaisService]
})
export class PaisModule {}
