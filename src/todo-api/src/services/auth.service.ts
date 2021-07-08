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

import { UserDto } from '../models/user-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation loginUser
   */
  static readonly LoginUserPath = '/auth/login';

  /**
   * Login user.
   *
   * Creates a new user
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `loginUser()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser$Response(params: {
    body: UserDto
  }): Observable<StrictHttpResponse<UserDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.LoginUserPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserDto>;
      })
    );
  }

  /**
   * Login user.
   *
   * Creates a new user
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `loginUser$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  loginUser(params: {
    body: UserDto
  }): Observable<UserDto> {

    return this.loginUser$Response(params).pipe(
      map((r: StrictHttpResponse<UserDto>) => r.body as UserDto)
    );
  }

}
