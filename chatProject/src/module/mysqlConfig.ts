import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

@Injectable()
export class MySqlMslConfigService implements TypeOrmOptionsFactory {
  constructor(private configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'mysql',
      host: this.configService.get<string>('MYSQL_HOST'),
      port: +this.configService.get<number>('MYSQL_PORT'),
      username: this.configService.get<string>('USER'),
      password: this.configService.get<string>('PWD'),
      database: this.configService.get<string>('DBNAME'),
      entities: ['dist/entity/*.entity.{js,ts}'],
      synchronize: false,
      //timezone:'Asia/Seoul',
      dateStrings: true,
    };
  }
}
