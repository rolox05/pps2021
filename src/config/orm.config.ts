import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { config } from 'dotenv';
import { join } from 'path';
config();

let level: ('log' | 'error' | 'warn' | 'query')[];
switch (process.env.LOG_LEVEL) {
  case 'debug':
    level = ['error', 'warn', 'log', 'query'];
    break;
  case 'warn':
    level = ['error', 'warn'];
    break;
  case 'log':
  default:
    level = ['error', 'warn', 'log'];
    break;
}

const ormConfig: PostgresConnectionOptions = {
  type: 'postgres',
  host: process.env.DBHOST,
  port: parseInt(process.env.DBPORT),
  username: process.env.DBUSER,
  password: process.env.DBPASSWORD,
  database: process.env.DBNAME,
  synchronize: true,
  logging: level,
  migrationsRun: process.env.MIGRATIONS === 'true',
  migrationsTableName: 'migrations',
  migrations: [join(__dirname, '/../migration/**/*{.ts,.js}')],
  entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],
  cli: {
    migrationsDir: 'src/migration'
  }
};

export = ormConfig;
