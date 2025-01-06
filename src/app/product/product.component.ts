import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RegistrationModel } from '../models/product-model';

@Component({
  selector: 'app-team',
  imports: [],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {
  @Input() model: RegistrationModel | undefined = undefined;
  @Output() saved = new EventEmitter<RegistrationModel>();

  getValue(event: any): string {
    return event.target.value;
  }

  getNumberValue(event: any): number {
    return Number(event.target.value);
  }

  save() {
    //TODO: kötelező mezők ellenőrzése....

    this.saved.emit(this.model);
  }

}
