import { Injectable, Logger } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AuthenticationService {
  private readonly logger: Logger = new Logger(AuthenticationService.name, true);
  /**
   *
   * @param token header token
   * @returns boolean
   */
  public authenticateByToken(token: string): boolean {
    this.logger.debug(`token: ${token}`);
    /**
     * put your authenticate business logic
     */
    return true;
  }
  /**
   *
   * @param request apollo-server-express request
   * @returns boolean
   */
  public async contextAuthenticate(request: Request): Promise<boolean> {
    this.logger.debug(request.body);
    this.logger.debug(request.headers);
    return await Promise.resolve(true);
  }
}

export namespace AuthenticationService {
  export interface User {
    id: number;
    name: string;
  }
}
