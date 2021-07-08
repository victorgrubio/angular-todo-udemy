/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { TodoDto } from '../models/todo-dto';

@Injectable({
  providedIn: 'root',
})
export class TodosService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllTodos
   */
  static readonly GetAllTodosPath = '/todos';

  /**
   * Todo Details.
   *
   * Returns the list of the Todos
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTodos()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTodos$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TodoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.GetAllTodosPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TodoDto>>;
      })
    );
  }

  /**
   * Todo Details.
   *
   * Returns the list of the Todos
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllTodos$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTodos(params?: {
  }): Observable<Array<TodoDto>> {

    return this.getAllTodos$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoDto>>) => r.body as Array<TodoDto>)
    );
  }

  /**
   * Path part for operation createTodo
   */
  static readonly CreateTodoPath = '/todos';

  /**
   * Create To do.
   *
   * Creates a new to do
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createTodo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTodo$Response(params: {
    body: TodoDto
  }): Observable<StrictHttpResponse<TodoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.CreateTodoPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoDto>;
      })
    );
  }

  /**
   * Create To do.
   *
   * Creates a new to do
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createTodo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createTodo(params: {
    body: TodoDto
  }): Observable<TodoDto> {

    return this.createTodo$Response(params).pipe(
      map((r: StrictHttpResponse<TodoDto>) => r.body as TodoDto)
    );
  }

  /**
   * Path part for operation getTodo
   */
  static readonly GetTodoPath = '/todos/{id}';

  /**
   * Todo Details.
   *
   * Returns the Todo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getTodo()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodo$Response(params: {

    /**
     * The Todo Id
     */
    id: number;
  }): Observable<StrictHttpResponse<TodoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.GetTodoPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoDto>;
      })
    );
  }

  /**
   * Todo Details.
   *
   * Returns the Todo
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getTodo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getTodo(params: {

    /**
     * The Todo Id
     */
    id: number;
  }): Observable<TodoDto> {

    return this.getTodo$Response(params).pipe(
      map((r: StrictHttpResponse<TodoDto>) => r.body as TodoDto)
    );
  }

  /**
   * Path part for operation deleteTodo
   */
  static readonly DeleteTodoPath = '/todos/{id}';

  /**
   * Delete Todo.
   *
   * Deletes a Todo by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteTodo()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTodo$Response(params: {

    /**
     * The Todo id
     */
    id: number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.DeleteTodoPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * Delete Todo.
   *
   * Deletes a Todo by ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteTodo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteTodo(params: {

    /**
     * The Todo id
     */
    id: number;
  }): Observable<string> {

    return this.deleteTodo$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation updateTodo
   */
  static readonly UpdateTodoPath = '/todos/{id}';

  /**
   * Update Todo.
   *
   * Updates an existing Todo
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateTodo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTodo$Response(params: {

    /**
     * The Todo Id
     */
    id: number;
    body: TodoDto
  }): Observable<StrictHttpResponse<TodoDto>> {

    const rb = new RequestBuilder(this.rootUrl, TodosService.UpdateTodoPath, 'patch');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<TodoDto>;
      })
    );
  }

  /**
   * Update Todo.
   *
   * Updates an existing Todo
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateTodo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateTodo(params: {

    /**
     * The Todo Id
     */
    id: number;
    body: TodoDto
  }): Observable<TodoDto> {

    return this.updateTodo$Response(params).pipe(
      map((r: StrictHttpResponse<TodoDto>) => r.body as TodoDto)
    );
  }

}
