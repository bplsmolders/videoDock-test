import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {VdRoutingModule} from './modules/routing/vd-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {MatIconModule} from "@angular/material/icon";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {HeaderComponent} from './components/header/header.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {VideoModule} from "./modules/video/video.module";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    VdRoutingModule,
    HttpClientModule,
    MatIconModule,
    // I was planning to use this, but ended up being not necessary because all text came from the BE in english
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      loader: {provide: TranslateLoader, useFactory: HttpLoaderFactory, deps: [HttpClient]}
    }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    VideoModule
  ],
  providers: [TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
