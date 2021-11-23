import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provincia } from './entities/provincia.entity';
import { PaisService } from './../pais/pais.service';

@Injectable()
export class ProvinciaService {
  constructor(
    @InjectRepository(Provincia)
    private readonly provinciaRepository: Repository<Provincia>,
    readonly paisService: PaisService
  ) {}

  async create(provincia: Partial<Provincia>, paisId: string) {
    const pais = await this.paisService.findOne(paisId);
    return this.provinciaRepository.save({
      ...provincia,
      pais
    });
  }

  async findAll() {
    return this.provinciaRepository.find();
  }

  async findOne(idProvincia: string) {
    return this.provinciaRepository.findOne({ id: idProvincia });
  }
}
