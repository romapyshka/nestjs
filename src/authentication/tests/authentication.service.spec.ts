import { AuthenticationService } from '../authentication.service';
import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../../users/users.module';
import { DatabaseModule } from '../../database.module';

describe('The AuthenticationService', () => {
  let authenticationService: AuthenticationService;
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [
        UsersModule,
        DatabaseModule,
        ConfigModule.forRoot(),
        JwtModule.register({}),
      ],
      providers: [ AuthenticationService ],
    })
      .compile();
    authenticationService = await module.get<AuthenticationService>(AuthenticationService);
  })
  describe('when creating a cookie', () => {
    it('should return a string', () => {
      const userId = 1;
      expect(
        typeof authenticationService.getJwtAccessToken(userId)
      ).toEqual('string')
    })
  })
});