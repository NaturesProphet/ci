
import { Connection } from 'typeorm';
import { injectionList } from '../common/constants/injection.constants';
import { Coisa } from "../database/entities/coisa.entitie";

export const CoisaProviders = [
  {
    provide: injectionList.PG_MODEL_COISA,
    useFactory: ( connection: Connection ) => connection.getRepository( Coisa ),
    inject: [ injectionList.PG_CONN ],
  },
];
