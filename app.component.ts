import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'Hello World!';

    onButtonClick() {
        this.title = 'Hello from Kendo UI!';
    }
}
 
