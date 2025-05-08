import { Module } from '@nestjs/common';
import { GoalsController } from './goals.controller';
import { GoalsService } from './goals.service';
import { Goal } from 'src/entities/goal.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Goal])],
  controllers: [GoalsController],
  providers: [GoalsService],
})
export class GoalsModule {}
