/**
 * Configuração dos bancos de dados
 */

import { Logger } from "@nestjs/common";
const env = process.env.NODE_ENV;


export const dbHost = process.env.DB_HOST || 'localhost';
if ( dbHost == 'localhost' ) {
  if ( env != 'CI' ) {
    Logger.warn( "URI do banco relacional não informado. usando default 'localhost' ", 'CONFIG' );
  }
}

export const dbUser = process.env.DB_USER || 'auim';
if ( dbUser == 'auim' ) {
  if ( env != 'CI' ) {
    Logger.warn( "Usuário do banco relacional não informado. Usando default 'auim'", "CONFIG" );
  }
}

export const dbPort = +process.env.DB_PORT || 5432;
if ( dbPort != 5432 ) {
  if ( env != 'CI' ) {
    Logger.warn( `Banco relacional usando uma porta diferente do padrão. ${dbPort}`, "CONFIG" );
  }
}

export const dbPassword = process.env.DB_PASSWORD || 'auim';
if ( dbPassword == 'auim' ) {
  if ( env != 'CI' ) {
    Logger.warn( "Senha do banco relacional não informada, usando o default 'auim'", "CONFIG" );
  }
}

export const dbSchema = process.env.DB_SCHEMA || 'starter';
if ( dbSchema == 'starter' ) {
  if ( env != 'CI' ) {
    Logger.warn( "Schema do banco relacional não informado. usando o default 'starter'", "CONFIG" );
  }
}

let dropSchema = false;
if ( process.env.NODE_ENV == 'production' ) {
  dropSchema = false;
} else {
  if ( process.env.DB_DROP_SCHEMA ) {
    if ( process.env.DB_DROP_SCHEMA == 'true' ) {
      if ( env != 'CI' ) {
        Logger.warn( "O DropSchema foi configurado para TRUE nas variaveis de ambiente! Cuidado! isso vai DELETAR O BANCO RELACIONAL!!", "CONFIG" );
      }
      dropSchema = true;
    } else {
      dropSchema = false;
    }
  }
}
export const dbDropSchema = dropSchema;


let ormSync = true;
if ( process.env.DB_ORM_SYNC ) {
  if ( process.env.DB_ORM_SYNC == 'false' ) {
    ormSync = false;
  }
}
if ( ormSync ) {
  if ( env != 'CI' ) {
    Logger.warn( "ORM SYNC ESTÁ NO VALOR DEFAULT (TRUE) - INDICÁVEL SOMENTE PARA AMBIENTE DE TESTES! "
      + "CUIDADO, HÁ RISCOS INERENTES NESTA CONFIGURAÇÃO!", "CONFIG" );
  }
}
export const dbORMSync = ormSync;
