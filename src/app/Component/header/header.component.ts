import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DatosUsuario,} from 'src/app/Modelos/usuario';
import { HeaderService } from 'src/app/Servicios/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public DatosUsuario: DatosUsuario|undefined;
  public actualizarUsuario: DatosUsuario|undefined;

  constructor(private headerService:HeaderService) { }

  ngOnInit(): void {

    this.getUser();
  }

  public getUser():void{

    this.headerService.getUser().subscribe({

      next: (response: DatosUsuario) => {

        this.DatosUsuario=response;

      },

      error:(error:HttpErrorResponse)=>{

        alert(error.message);
      }
      })
  }

}
