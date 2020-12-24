import { dbDropSchema, dbHost, dbORMSync, dbPassword, dbPort, dbSchema, dbUser } from '../common/configs/databases.config';
import { injectionList } from '../common/constants/injection.constants';
import { createConnection } from 'typeorm';
import { Coisa } from './entities/coisa.entitie';

export const databaseProviders = [
  {
    provide: injectionList.PG_CONN,
    useFactory: async () => await createConnection( {
      type: 'postgres',
      host: dbHost,
      port: dbPort,
      username: dbUser,
      password: dbPassword,
      database: dbSchema,
      entities: [
        Coisa
      ],
      synchronize: dbORMSync,
      dropSchema: dbDropSchema
    } ),
  },
];
