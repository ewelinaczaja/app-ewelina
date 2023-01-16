import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Route, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SignupComponent } from './component/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomeComponent } from './component/home/home.component';
import { ProfiloComponent } from './component/profilo/profilo.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import { ChangeComponent } from './component/change/change.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireStorageModule } from '@angular/fire/compat/storage';
import {AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from 'src/environments/environment';
import { CaricaComponent } from './component/carica/carica.component';
import { MapComponent } from './component/map/map.component';






@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HomeComponent,
    ProfiloComponent,
    ChangeComponent,
    CaricaComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatExpansionModule,
    NgbModule,
    MatDialogModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireDatabaseModule,




  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ChangeComponent]
})
export class AppModule { }
