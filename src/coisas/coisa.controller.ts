import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CoisaService } from './coisa.service';

@Controller( 'coisa' )
export class CoisaController {
  constructor(
    private readonly service: CoisaService
  ) { }


  @Post()
  createCoisa ( @Body( 'name' ) name: string ) {
    return this.service.createCoisa( name );
  }

  @Get()
  listCoisas ( @Param( 'id' ) id: number ) {
    return this.service.listCoisas( id );
  }

}
