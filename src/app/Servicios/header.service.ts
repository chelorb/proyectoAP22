import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DatosUsuario} from '../Modelos/usuario';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private apiServerUrl=environment.apiBaseUrl;



  constructor (private http: HttpClient) {   }

  public getUser():Observable<DatosUsuario> {

    return this.http.get<DatosUsuario>(`${this.apiServerUrl}/usuario/id/1`);
  }

public actualizarUsuario(usuario: DatosUsuario):Observable<DatosUsuario>{

  return this.http.put<DatosUsuario>(`${this.apiServerUrl}usuario/editar`, usuario);


}

}

