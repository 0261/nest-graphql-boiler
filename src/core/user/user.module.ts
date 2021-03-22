import { Global, Module } from '@nestjs/common';
import { UserService } from './user.service';

@Global()
@Module({
  imports: [],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule { }
