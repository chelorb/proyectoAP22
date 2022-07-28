import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;



  constructor(private http: HttpClientModule) { 

  }
}

