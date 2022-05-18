import { Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';
import { UsersModule } from '../users/users.module';
import { AuthenticationController } from './authentication.controller';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtAccessTokenStrategy } from './jwt-access.strategy';
import { JwtRefreshTokenStrategy } from './jwt-refresh.strategy';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    ConfigModule,
    JwtModule.register({}),
  ],
  providers: [AuthenticationService, LocalStrategy, JwtAccessTokenStrategy, JwtRefreshTokenStrategy],
  controllers: [AuthenticationController]
})
export class AuthenticationModule {}