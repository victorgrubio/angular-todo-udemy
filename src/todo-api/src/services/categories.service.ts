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

import { CategoryDto } from '../models/category-dto';
import { TodoDto } from '../models/todo-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getAllCategories
   */
  static readonly GetAllCategoriesPath = '/categories';

  /**
   * Category Details.
   *
   * Returns the list of the categories
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories$Response(params?: {
  }): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetAllCategoriesPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * Category Details.
   *
   * Returns the list of the categories
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategories(params?: {
  }): Observable<Array<CategoryDto>> {

    return this.getAllCategories$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * Path part for operation createCategory
   */
  static readonly CreateCategoryPath = '/categories';

  /**
   * Create category.
   *
   * Creates a new category
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory$Response(params: {
    body: CategoryDto
  }): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.CreateCategoryPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * Create category.
   *
   * Creates a new category
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createCategory(params: {
    body: CategoryDto
  }): Observable<CategoryDto> {

    return this.createCategory$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation getCategory
   */
  static readonly GetCategoryPath = '/categories/{id}';

  /**
   * Category Details.
   *
   * Returns the list of the users
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategory$Response(params: {
    'The category id': number;
  }): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetCategoryPath, 'get');
    if (params) {
      rb.path('The category id', params['The category id'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * Category Details.
   *
   * Returns the list of the users
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getCategory(params: {
    'The category id': number;
  }): Observable<CategoryDto> {

    return this.getCategory$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation deleteCategory
   */
  static readonly DeleteCategoryPath = '/categories/{id}';

  /**
   * Delete category.
   *
   * Deletes a category by ID
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `deleteCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory$Response(params: {
    'The category id': number;
  }): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.DeleteCategoryPath, 'delete');
    if (params) {
      rb.path('The category id', params['The category id'], {});
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
   * Delete category.
   *
   * Deletes a category by ID
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `deleteCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  deleteCategory(params: {
    'The category id': number;
  }): Observable<string> {

    return this.deleteCategory$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation updateCategory
   */
  static readonly UpdateCategoryPath = '/categories/{id}';

  /**
   * Update Category.
   *
   * Updates an existing Category
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `updateCategory()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory$Response(params: {

    /**
     * The Todo Id
     */
    id: number;
    body: CategoryDto
  }): Observable<StrictHttpResponse<CategoryDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.UpdateCategoryPath, 'patch');
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
        return r as StrictHttpResponse<CategoryDto>;
      })
    );
  }

  /**
   * Update Category.
   *
   * Updates an existing Category
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `updateCategory$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  updateCategory(params: {

    /**
     * The Todo Id
     */
    id: number;
    body: CategoryDto
  }): Observable<CategoryDto> {

    return this.updateCategory$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDto>) => r.body as CategoryDto)
    );
  }

  /**
   * Path part for operation getAllCategoriesByUserId
   */
  static readonly GetAllCategoriesByUserIdPath = '/categories/users/{userId}';

  /**
   * Category Details by user ID.
   *
   * Returns the list of the categories of a selected user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllCategoriesByUserId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoriesByUserId$Response(params: {
    'User ID': number;
  }): Observable<StrictHttpResponse<Array<CategoryDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetAllCategoriesByUserIdPath, 'get');
    if (params) {
      rb.path('User ID', params['User ID'], {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryDto>>;
      })
    );
  }

  /**
   * Category Details by user ID.
   *
   * Returns the list of the categories of a selected user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllCategoriesByUserId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllCategoriesByUserId(params: {
    'User ID': number;
  }): Observable<Array<CategoryDto>> {

    return this.getAllCategoriesByUserId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryDto>>) => r.body as Array<CategoryDto>)
    );
  }

  /**
   * Path part for operation getAllTodoByCategoriesId
   */
  static readonly GetAllTodoByCategoriesIdPath = '/categories/todos/{id}';

  /**
   * Todo Details by category ID.
   *
   * Returns the list of the Todo of a selected category
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTodoByCategoriesId()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTodoByCategoriesId$Response(params: {
    'Category ID': number;
  }): Observable<StrictHttpResponse<Array<TodoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetAllTodoByCategoriesIdPath, 'get');
    if (params) {
      rb.path('Category ID', params['Category ID'], {});
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
   * Todo Details by category ID.
   *
   * Returns the list of the Todo of a selected category
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllTodoByCategoriesId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTodoByCategoriesId(params: {
    'Category ID': number;
  }): Observable<Array<TodoDto>> {

    return this.getAllTodoByCategoriesId$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoDto>>) => r.body as Array<TodoDto>)
    );
  }

  /**
   * Path part for operation getAllTodoByCategoriesForToday
   */
  static readonly GetAllTodoByCategoriesForTodayPath = '/categories/todos/today/{userId}';

  /**
   * List of all categories and Todo for today.
   *
   * Returns the list of the Todo of a selected category
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getAllTodoByCategoriesForToday()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTodoByCategoriesForToday$Response(params: {
    'User ID': number;
  }): Observable<StrictHttpResponse<Array<TodoDto>>> {

    const rb = new RequestBuilder(this.rootUrl, CategoriesService.GetAllTodoByCategoriesForTodayPath, 'get');
    if (params) {
      rb.path('User ID', params['User ID'], {});
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
   * List of all categories and Todo for today.
   *
   * Returns the list of the Todo of a selected category
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getAllTodoByCategoriesForToday$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getAllTodoByCategoriesForToday(params: {
    'User ID': number;
  }): Observable<Array<TodoDto>> {

    return this.getAllTodoByCategoriesForToday$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TodoDto>>) => r.body as Array<TodoDto>)
    );
  }

}
