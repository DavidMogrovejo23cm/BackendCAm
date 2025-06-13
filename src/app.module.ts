import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Employee } from './employees/employees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
imports: [ConfigModule.forRoot({ isGlobal: true }),
TypeOrmModule.forRoot({
type: 'postgres',
url: process.env.DATABASE_URL,
port: 5432,
username: 'postgres',
password: 'OPdLVmEfnPVHhsYKhfFdboOXhfumBxuW',
database: 'railway',
entities: [__dirname + `/**/*.entity{.ts,.js}`],
synchronize: true,
}), Employee],
controllers: [AppController],
 providers: [AppService],
})
export class AppModule {}