import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapters/axios.adpater';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
