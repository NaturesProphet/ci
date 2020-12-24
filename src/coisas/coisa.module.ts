import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CoisaController } from './coisa.controller';
import { CoisaProviders } from './coisa.providers';
import { CoisaService } from './coisa.service';


@Module( {
    imports: [ DatabaseModule ],
    controllers: [ CoisaController ],
    providers: [ CoisaService, ...CoisaProviders ],
} )
export class CoisaModule { }
