/* tslint:disable */
/* eslint-disable */
import { TodoDto } from './todo-dto';
import { UserDto } from './user-dto';
export interface CategoryDto {
  description?: string;
  id?: number;
  name?: string;
  todoList?: Array<TodoDto>;
  user?: UserDto;
}
