import { Controller, Get } from '@nestjs/common';
import { GoalsService } from './goals.service';

@Controller()
export class GoalsController {
  constructor(private readonly goalsService: GoalsService) {}

  @Get()
  getHello(): string {
    return this.goalsService.getHello();
  }
}
