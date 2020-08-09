import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    h3 {
      color: dodgerblue;
    }
    .textColor {
      color: white;
    }
  `]
})
export class AppComponent {
  title = 'angular-course-third-assignment';
  secret = false;
  clicks = [];

  onBtnCLicked(): void {
    this.secret = !this.secret;
    this.clicks.push('Button clicked ' + new Date());
    //this.clicks.push(this.clicks.length + 1);
  }

}
