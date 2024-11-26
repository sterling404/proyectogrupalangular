import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './components/header/header.component';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { IngresoComponent } from './components/ingreso/ingreso.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select'; 
import { MatOptionModule } from '@angular/material/core';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';






@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    HeaderComponent,
    IngresoComponent,
    DescripcionComponent,
    PedidosComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,

    MatIconModule,MatBadgeModule, MatButtonModule, MatMenuModule,FormsModule,

    MatIconModule,
    MatBadgeModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,   
    MatOptionModule,
    MatSnackBarModule,
    HttpClientModule,
    NgIf,
    MatDialogModule,
    ReactiveFormsModule  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
