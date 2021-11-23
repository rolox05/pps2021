import { PaisModule } from './pais/pais.module';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as ormConfig from './config/orm.config';

import { PersonaModule } from './persona/persona.module';
import { DomicilioModule } from './domicilio/domicilio.module';
import { ProvinciaModule } from './provincia/provincia.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { PubSubModule } from './pubsub/pubsub.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      installSubscriptionHandlers: true,
      context: ({ req }) => ({ req }),
      subscriptions: { 'subscriptions-transport-ws': true },
      cors: {
        origin: (origin, callback) => callback(null, true)
      }
    }),
    TypeOrmModule.forRoot({
      ...ormConfig,
      keepConnectionAlive: true,
      autoLoadEntities: true
    }),
    PersonaModule,
    DomicilioModule,
    DepartamentoModule,
    ProvinciaModule,
    PaisModule,
    PubSubModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
