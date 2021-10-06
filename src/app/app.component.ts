import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-jquery-plugin';

  ngOnInit(): void {
    console.log($('html'));

    $('#id').lazyload();

  }


}
