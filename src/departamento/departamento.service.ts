import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Departamento } from './entities/departamento.entity';
import { ProvinciaService } from './../provincia/provincia.service';

@Injectable()
export class DepartamentoService {
  constructor(
    @InjectRepository(Departamento)
    private readonly departamentoRepository: Repository<Departamento>,
    readonly provinciaService: ProvinciaService
  ) {}

  async create(departamento: Partial<Departamento>, idProvincia: string) {
    const provincia = await this.provinciaService.findOne(idProvincia);
    return this.departamentoRepository.save({
      ...departamento,
      provincia
    });
  }

  async findAll() {
    return this.departamentoRepository.find();
  }

  async findOne(departamentoId: string) {
    return this.departamentoRepository.findOne({ id: departamentoId });
  }
}
