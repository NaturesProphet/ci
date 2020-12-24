import { config } from 'dotenv';
config();
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { Connection, getConnection } from 'typeorm';
import { CoisaModule } from '../src/coisas/coisa.module';
import { Coisa } from '../src/database/entities/coisa.entitie';


describe( 'CoisaController (e2e)', () => {
  let app: INestApplication;
  let con: Connection;

  beforeEach( async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule( {
      imports: [ CoisaModule ],
    } ).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    con = getConnection();
  } );

  afterAll( async () => {
    con.close();
  } )

  it( '/coisa (GET)', async () => {
    // cria registros para serem listados
    await con.getRepository( Coisa ).save( [ { name: "teste 1" }, { name: "teste 2" } ] );

    const result = await request( app.getHttpServer() ).get( '/coisa' );
    expect( result.status ).toBe( 200 );
    expect( result.body.length ).toBe( 2 );
    expect( result.body[ 1 ].name ).toBe( "teste 2" )
  } );
} );




