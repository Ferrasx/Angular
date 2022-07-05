import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PhotoService} from "./photo/photo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //array de photos

  photos : any = [];
  constructor(photoService :PhotoService) {
  photoService.listFromUser('flavio').subscribe(photos => this.photos = photos);
   }
}
