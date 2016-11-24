import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Importing Kendo Ng2 Buttons Component
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { AppComponent } from './app.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [AppComponent],
    imports: [BrowserModule,
              ButtonsModule] //Bootstraping Kendo Ng2 Buttons Module
})
export class AppModule {
}
