import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class UserService {
  private readonly logger: Logger = new Logger(UserService.name);

  public addUser(): void {
    this.logger.debug('debug');
  }
}

export namespace UserService {
}
