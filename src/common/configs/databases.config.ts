/**
 * Configuração dos bancos de dados
 */

import { Logger } from "@nestjs/common";


export const dbHost = process.env.DB_HOST || 'localhost';
if ( dbHost == 'localhost' ) {
  Logger.warn( "URI do banco relacional não informado. usando default 'localhost' ", 'CONFIG' );
}

export const dbUser = process.env.DB_USER || 'auim';
if ( dbUser == 'auim' ) {
  Logger.warn( "Usuário do banco relacional não informado. Usando default 'auim'", "CONFIG" );
}

export const dbPort = +process.env.DB_PORT || 5432;
if ( dbPort != 5432 ) {
  Logger.warn( `Banco relacional usando uma porta diferente do padrão. ${dbPort}`, "CONFIG" );
}

export const dbPassword = process.env.DB_PASSWORD || 'auim';
if ( dbPassword == 'auim' ) {
  Logger.warn( "Senha do banco relacional não informada, usando o default 'auim'", "CONFIG" );
}

export const dbSchema = process.env.DB_SCHEMA || 'starter';
if ( dbSchema == 'starter' ) {
  Logger.warn( "Schema do banco relacional não informado. usando o default 'starter'", "CONFIG" );
}

let dropSchema = false;
if ( process.env.NODE_ENV == 'production' ) {
  dropSchema = false;
} else {
  if ( process.env.DB_DROP_SCHEMA ) {
    if ( process.env.DB_DROP_SCHEMA == 'true' ) {
      Logger.warn( "O DropSchema foi configurado para TRUE nas variaveis de ambiente! Cuidado! isso vai DELETAR O BANCO RELACIONAL!!", "CONFIG" );
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
  Logger.warn( "ORM SYNC ESTÁ NO VALOR DEFAULT (TRUE) - INDICÁVEL SOMENTE PARA AMBIENTE DE TESTES! "
    + "CUIDADO, HÁ RISCOS INERENTES NESTA CONFIGURAÇÃO!", "CONFIG" );
}
export const dbORMSync = ormSync;
