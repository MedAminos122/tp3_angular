import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
tab=[15,46,0,89,80];
onposition(indice)
{console.log(indice);}
  constructor() { }

  ngOnInit() {
  }

}
