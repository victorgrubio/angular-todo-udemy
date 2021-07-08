/* tslint:disable */
/* eslint-disable */
import { CategoryDto } from './category-dto';
export interface TodoDto {
  category?: CategoryDto;
  description?: string;
  done?: boolean;
  favorite?: boolean;
  id?: number;
  startDate?: string;
  title?: string;
}
