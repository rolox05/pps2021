import { Field, ObjectType } from '@nestjs/graphql';
import { Pais } from 'src/pais/entities/pais.entity';
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
import { Departamento } from '../../departamento/entities/departamento.entity';

@ObjectType()
@Entity('provincia')
export class Provincia {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  nombre: string;
  @Field({ nullable: true })
  @Column()
  poblacion: number;

  @Field(() => [Departamento], { nullable: true })
  @OneToMany(type => Departamento, e => e.provincia, {
    onDelete: 'CASCADE'
  })
  departamentos: Departamento[];

  @Field(() => Pais, { nullable: true })
  @ManyToOne(type => Pais, e => e.provincias, {
    eager: true,
    cascade: true
  })
  pais: Pais;

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
