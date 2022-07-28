import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarSesionComponent } from './Component/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './Component/portfolio/portfolio.component';

const routes: Routes = [

{path: 'portfolio', component:PortfolioComponent},
{path: 'iniciar-secion', component:IniciarSesionComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
