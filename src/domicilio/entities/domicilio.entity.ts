import { Field, ObjectType } from '@nestjs/graphql';
import { Departamento } from 'src/departamento/entities/departamento.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';
import { Persona } from './../../persona/entities/persona.entity';

@ObjectType()
@Entity('domicilio')
export class Domicilio {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  calle: string;
  @Field()
  @Column()
  numero: string;

  @Field(() => Persona, { nullable: true })
  @ManyToOne(type => Persona, e => e.domicilios, { onDelete: 'CASCADE' })
  persona: Persona;

  @Field(() => Departamento, { nullable: true })
  @ManyToOne(type => Departamento, e => e.domicilio, {
    cascade: true,
    eager: true
  })
  departamento: Departamento;

  /**
   * Control fields
   */
  @Field()
  @UpdateDateColumn()
  lastUpdatedAt: Date;
  @Field({ nullable: true })
  @CreateDateColumn()
  createdAt: Date;
  @Field({ nullable: true })
  @DeleteDateColumn({ nullable: true })
  deletedAt: string;
  @Field({ nullable: true })
  @VersionColumn()
  version: number;
}
