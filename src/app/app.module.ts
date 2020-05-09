import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import * as moment from 'moment';
import { MomentModule } from 'ngx-moment';
// modules
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// components 
import { AppComponent } from './app.component';
import { ReposirtoryComponent } from './pages/repositories/reposirtory/reposirtory.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { SelectComponent } from './components/select/select.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { EmptyStateComponent } from './components/empty-state/empty-state.component';
import { RepositoryTabComponent } from './components/repository-tab/repository-tab.component';
import { RepositoryViewerComponent } from './components/repository-viewer/repository-viewer.component';

@NgModule({
  declarations: [
    AppComponent,
    ReposirtoryComponent,
    HeaderComponent,
    FooterComponent,
    SelectComponent,
    TabsComponent,
    EmptyStateComponent,
    RepositoryTabComponent,
    RepositoryViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MomentModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
