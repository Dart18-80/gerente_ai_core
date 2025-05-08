import { Injectable } from '@nestjs/common';

@Injectable()
export class GoalsService {
  getHello(): string {
    return 'Hello World!';
  }
}
