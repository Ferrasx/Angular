import {Component,Input} from "@angular/core";
@Component(
  {
    selector : 'app-photo',
    templateUrl: 'photo.component.html'
  }
)

export class PhotoComponent {
  //o input vai detectar alguma altera;'ao e atualizar automaticamente o valor
  // para ter acesso a isso a gente vai chamar nos o nome da classe no modules
  @Input() description = '';
  @Input() url = '';
}
