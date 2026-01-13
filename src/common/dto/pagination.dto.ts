import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDTo {
  @IsOptional()
  @IsPositive()
  @Min(1)
  offset?: number;
  @IsOptional()
  @IsPositive()
  @Min(1)
  limit?: number;
}
