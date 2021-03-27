import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { ForbiddenError } from 'apollo-server-express';
import { Request } from 'express';

import { AuthenticationService } from '~domain/authentication';

@Injectable()
export class AuthenticationGuard implements CanActivate {
  public constructor(private readonly auth: AuthenticationService) { }

  public canActivate(context: ExecutionContext): boolean {
    const gqlContext: { user?: AuthenticationService.User; req: Request; } = GqlExecutionContext.create(context).getContext();
    const request: Request = gqlContext.req;
    const token: undefined | string = request.header('Authentication');

    if (token === '' || token === 'null' || token === 'undefined') {
      throw new ForbiddenError('Forbidden');
    }

    if (token === undefined) {
      throw new ForbiddenError('Forbidden');
    }
    else {
      this.auth.authenticateByToken(token);
    }

    return true;
  }
}
