import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AltaComponent } from './usuarios/alta/alta.component';
import { BajaComponent } from './usuarios/baja/baja.component';
import { ChatComponent } from './contacto/chat/chat.component';
import { CorreoComponent } from './correo/correo.component';
import { CurriculumComponent } from './curriculum/curriculum.component';
import { NavbarComponent } from './barra/navbar/navbar.component';
import { UsernameComponent } from './contacto/username/username.component';
import { InicioComponent } from './barra/inicio/inicio.component';
import { SomosComponent } from './barra/somos/somos.component';
import { LoginComponent } from './logges/login/login.component';
import { ConsultasComponent } from './logges/consultas/consultas.component';
import { MostrarComponent } from './usuarios/mostrar/mostrar.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AbcService } from './abc.service';
import { RegistroComponent } from './logges/registro/registro.component';
import { FooterComponent } from './footer/footer.component';
import { BasuraComponent } from './basura/basura.component';
import { CurriculumAdminComponent } from './curriculum-admin/curriculum-admin.component';
import { ToastrModule, ToastNoAnimation, ToastNoAnimationModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './search/search.component';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { ArtistaComponent } from './artista/artista.component';
import { LoadingComponent } from './loading/loading.component';
import { PictureComponent } from './picture/picture.component';
import { DomseguroPipe } from './domseguro.pipe';



@NgModule({
  declarations: [
    AppComponent,
    AltaComponent,
    BajaComponent,
    ChatComponent,
    CorreoComponent,
    CurriculumComponent,
    NavbarComponent,
    UsernameComponent,
    InicioComponent,
    SomosComponent,
    LoginComponent,
    ConsultasComponent,
    MostrarComponent,
    RegistroComponent,
    FooterComponent,
    BasuraComponent,
    CurriculumAdminComponent,
    SearchComponent,
    TarjetasComponent,
    ArtistaComponent,
    LoadingComponent,
    PictureComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [AbcService],
  bootstrap: [AppComponent]
})
export class AppModule { }
