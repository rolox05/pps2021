import { Field, ObjectType } from '@nestjs/graphql';
import { Provincia } from 'src/provincia/entities/provincia.entity';
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
import { Domicilio } from '../../domicilio/entities/domicilio.entity';

@ObjectType()
@Entity('departamento')
export class Departamento {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field()
  @Column()
  nombre: string;
  @Field()
  @Column()
  codPostal: number;

  @Field(() => [Domicilio], { nullable: true })
  @OneToMany(type => Domicilio, e => e.departamento, {
    onDelete: 'CASCADE'
  })
  domicilio: Domicilio[];

  @Field(() => Provincia, { nullable: true })
  @ManyToOne(type => Provincia, e => e.departamentos, {
    eager: true,
    cascade: true
  })
  provincia: Provincia;

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
