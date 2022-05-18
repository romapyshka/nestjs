import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put, UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import CreateTodoDto from './dto/createTodo.dto';
import { TodosService } from './todos.service';
import { UpdateTodoDto } from './dto/updateTodo.dto';
import RoleGuard from '../users/role.guard';
import Role from '../users/role.enum';
import JwtAccessGuard from '../authentication/jwt-access.guard';

@Controller('todos')
@UseInterceptors(ClassSerializerInterceptor)
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos() {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  getTodoById(@Param('id') id: string) {
    return this.todosService.getTodoById(Number(id));
  }

  @Post()
  @UseGuards(RoleGuard(Role.User))
  @UseGuards(JwtAccessGuard)
  async createTodo(@Body() todo: CreateTodoDto) {
    return this.todosService.createTodo(todo);
  }

  @Put(':id')
  @UseGuards(RoleGuard(Role.User))
  @UseGuards(JwtAccessGuard)
  async updatePost(@Param('id') id: string, @Body() todo: UpdateTodoDto) {
    return this.todosService.updateTodo(Number(id), todo);
  }

  @Delete(':id')
  @UseGuards(RoleGuard(Role.Admin))
  @UseGuards(JwtAccessGuard)
  async deleteTodo(@Param('id') id: string) {
    await this.todosService.deleteTodo(Number(id));
  }
}