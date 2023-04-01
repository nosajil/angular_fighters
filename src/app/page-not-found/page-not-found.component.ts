import { Component } from '@angular/core';

@Component({
  selector: 'page-404',
  template: `
  <div class='center'>
    <img src="https://dmxg5wxfqgb4u.cloudfront.net/styles/athlete_bio_full_body/s3/2023-01/NGANNOU_FRANCIS_L_03-27.png?itok=s4MVBS7x"/>
    <h1>Hey, cette page n'existe pas !</h1>
    <a routerLink="/fighters" class="waves-effect waves-teal btn-flat">
      Retourner à l' accueil
    </a>
  </div>
`
})

export class PageNotFoundComponent {

}
