import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Domicilio } from './entities/domicilio.entity';
import { DepartamentoService } from './../departamento/departamento.service';
import { PersonaService } from './../persona/persona.service';

@Injectable()
export class DomicilioService {
  constructor(
    @InjectRepository(Domicilio)
    private readonly domicilioRepository: Repository<Domicilio>,
    readonly personaService: PersonaService,
    readonly departamentoService: DepartamentoService
  ) {}

  async create(
    domicilio: Partial<Domicilio>,
    personaId: string,
    departamentoId: string
  ) {
    const persona = await this.personaService.findOne(personaId);
    const departamento = await this.departamentoService.findOne(departamentoId);
    return this.domicilioRepository.save({
      ...domicilio,
      persona,
      departamento
    });
  }

  async findAll() {
    return this.domicilioRepository.find();
  }
}
