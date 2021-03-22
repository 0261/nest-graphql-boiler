import { Controller, Get } from '@nestjs/common';

@Controller()
export class PingController {

  @Get()
  public health(): string {
    return 'healthy';
  }
}
