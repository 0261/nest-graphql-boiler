import { Global, Module } from '@nestjs/common';
import { AuthenticationService } from './authentication.service';

@Global()
@Module({
  providers: [AuthenticationService],
  exports: [AuthenticationService],
})
export class AuthenticationModule {}
