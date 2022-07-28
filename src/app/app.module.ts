import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { LogoAPComponent } from './Component/logo-ap/logo-ap.component';
import { BannerSupComponent } from './Component/banner-sup/banner-sup.component';
import { AcercaDeComponent } from './Component/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './Component/experiencia/experiencia.component';
import { RedesSocialesComponent } from './Component/redes-sociales/redes-sociales.component';
import { EducacionComponent } from './Component/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './Component/skills/skills.component';
import { ProyectosComponent } from './Component/proyectos/proyectos.component';
import { PieDePaginaComponent } from './Component/pie-de-pagina/pie-de-pagina.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    RedesSocialesComponent,
    BannerSupComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    PieDePaginaComponent,
    IniciarSesionComponent,
  
  ],

  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({}),
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
        
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
