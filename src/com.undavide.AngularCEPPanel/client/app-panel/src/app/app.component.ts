import { Component, OnInit } from '@angular/core';

declare var CSInterface: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Adobe Panel using Angular 7';

  constructor() {

  }

  ngOnInit() {

  }

  handleButtonClick() {
    const script = 'app.documents.add()';
    new CSInterface().evalScript(script, (result) => {
      alert('Document added using panel extension');
    });
  }
}
