import { Module } from '@nestjs/common';
import { PostgresPubSub } from 'graphql-postgres-subscriptions';
import * as ormconfig from '../config/orm.config';

@Module({
  providers: [
    {
      provide: 'PUB_SUB',
      useValue: new PostgresPubSub({
        host: ormconfig.host,
        user: ormconfig.username,
        password: ormconfig.password,
        database: ormconfig.database,
        port: ormconfig.port
      })
    }
  ],
  exports: ['PUB_SUB']
})
export class PubSubModule {}
