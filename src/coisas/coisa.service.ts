import { Inject, Injectable } from '@nestjs/common';
import { Coisa } from '../database/entities/coisa.entitie';
import { Repository } from 'typeorm';
import { injectionList } from '../common/constants/injection.constants';

@Injectable()
export class CoisaService {
  constructor(
    @Inject( injectionList.PG_MODEL_COISA )
    private readonly repository: Repository<Coisa>
  ) { }

  async createCoisa ( name: string ) {
    return await this.repository.save( { name } );
  }

  async listCoisas ( id?: number ) {
    if ( id ) {
      return await this.repository.findOne( id );
    } else {
      return await this.repository.find();
    }
  }
}
