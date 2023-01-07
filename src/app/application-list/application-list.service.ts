import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstants } from 'src/app-constants';

@Injectable()
export class ApplicationListService {
  constructor(private httpClient: HttpClient) {}

  getRawData(): Observable<any> {
    return this.httpClient.get(AppConstants.BASE_API + '/api/raw');
  }

  getApplication(): Observable<any> {
    return this.httpClient.get(AppConstants.BASE_API + '/api/applications');
  }
}
