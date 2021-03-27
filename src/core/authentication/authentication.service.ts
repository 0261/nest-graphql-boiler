import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AuthenticationService {
  private readonly logger: Logger = new Logger(AuthenticationService.name, true);
  public authenticateByToken(token: string): boolean {
    this.logger.debug(`token: ${token}`);
    /**
     * put your authenticate business logic
     */

    return true;
  }
}

export namespace AuthenticationService {
  export interface User {
    id: number;
    name: string;
  }
}
