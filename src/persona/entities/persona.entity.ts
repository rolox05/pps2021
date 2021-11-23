import { Field, ObjectType } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  VersionColumn
} from 'typeorm';
import { Domicilio } from '../../domicilio/entities/domicilio.entity';

@ObjectType()
@Entity('persona')
export class Persona {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  nombre: string;
  @Field()
  @Column()
  apellido: string;
  @Field()
  @Column()
  dni: number;
  @Field()
  @Column()
  legajo: number;
  @Field()
  @Field({ nullable: true })
  fechaNac: Date;

  @Field(() => [Domicilio], { nullable: true })
  @OneToMany(type => Domicilio, e => e.persona, { eager: true, cascade: true })
  domicilios: Domicilio[];

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
