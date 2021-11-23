import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Pais } from './entities/pais.entity';

@Injectable()
export class PaisService {
  constructor(
    @InjectRepository(Pais)
    private readonly paisRepository: Repository<Pais>
  ) {}

  async create(pais: Partial<Pais>) {
    return this.paisRepository.save({
      ...pais
    });
  }

  async findAll() {
    return this.paisRepository.find();
  }

  async findOne(paisId: string) {
    return this.paisRepository.findOne({ id: paisId });
  }
}
