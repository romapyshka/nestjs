import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { TodosModule } from './todo/todos.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    TodosModule,
    AuthenticationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
