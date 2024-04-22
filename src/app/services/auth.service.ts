import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PaginationParams } from '../types/pagination-types';
import { Observable } from 'rxjs';
import { User } from '../types/auth-types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apiService: ApiService) {}

  login = (url: string, body: User): Observable<User> => {
    return this.apiService.post(url, body, {});
  };
}
