import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConstants } from 'src/app-constants';

@Injectable()
export class ApplicationDetailsService {
  constructor(private httpClient: HttpClient) {}

  getApplicationByName(name: string) {
    return this.httpClient.get(
      AppConstants.BASE_API + 'api/applications/' + name
    );
  }
}
