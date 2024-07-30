import { Module } from '@nestjs/common';
import { OrdersController } from './oders.controller';
import { NastModule } from 'src/transports/nats.module';

@Module({
  controllers: [OrdersController],
  imports: [NastModule],
})
export class OrdersModule {}
