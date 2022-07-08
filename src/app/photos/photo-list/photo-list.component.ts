import { Component, OnInit } from '@angular/core';
import {PhotoService} from "../photo/photo.service";
import {ActivatedRoute} from "@angular/router";
import {Photo} from "../photo/photo";
import {Subject} from "rxjs";
import{LoadButtonComponent} from "./load-button/load-button.component";

//tras os dados e disponibiliza para photos
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos : Photo []= [];
  filter :string = '';
  hasMore: boolean = true;
  currentPage :number =1;
  userName :string ='';
constructor(private activateRoute : ActivatedRoute,
private photoService:PhotoService) {
}

  onKeyUp(target : any) {
    if(target instanceof EventTarget) {
      var elemento = target as HTMLInputElement;
      this.filter = elemento.value;
    }
  }

  ngOnInit(): void {
    this.userName = this.activateRoute.snapshot.params['userName'];

    this.photos = this.activateRoute.snapshot.data['photos'];

  }
load(){
  this.photoService.listFromUserPaginated(this.userName,++this.currentPage).subscribe(photos =>{
    this.photos = this.photos.concat(photos);
    if(!photos.length)this.hasMore =false;
  })
}
}
