import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePersonaInput } from './dto/update-persona-input';
import { Persona } from './entities/persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @InjectRepository(Persona)
    private readonly personaRepository: Repository<Persona>
  ) {}

  async create(persona: Partial<Persona>) {
    return this.personaRepository.save({
      ...persona
    });
  }

  async update(persona: UpdatePersonaInput) {
    const { personaId, ...rest } = persona;
    await this.personaRepository.update(
      { id: personaId },
      {
        ...rest
      }
    );
    const personaUpdated = await this.findOne(personaId);
    return {
      id: personaId,
      ...personaUpdated
    };
  }

  async findAll() {
    return this.personaRepository.find();
  }

  async findOne(personaId: string) {
    return this.personaRepository.findOne({ id: personaId });
  }
}
