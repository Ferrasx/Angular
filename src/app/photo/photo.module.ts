import {NgModule} from "@angular/core";
import {PhotoComponent} from "./photo.component";

@NgModule({
  declarations:[PhotoComponent],
  //aqui exportamos o valor para ter acesso no app component
  exports: [PhotoComponent]
})
export class PhotoModule{

}
