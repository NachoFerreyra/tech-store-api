import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({ status: 200, description: 'La API está funcionando correctamente' })
  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
