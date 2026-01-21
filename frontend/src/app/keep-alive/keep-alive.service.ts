import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class KeepAliveService {
  private http = inject(HttpClient);

  keepAlive() {
    return this.http.get<any>('/api/keep-alive');
  }
}
