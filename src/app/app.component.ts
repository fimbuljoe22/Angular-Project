import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistrationModel } from './models/registration-model';
import { DataService } from '../services/data.service';
import { TeamComponent } from "./team/team.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  registrations: RegistrationModel[] = [];
  modify: RegistrationModel | undefined = undefined;
  new: RegistrationModel | undefined = undefined;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getRegistrations().subscribe({
      next: (data: RegistrationModel[]) => {
        this.registrations = data;
      },
      error: (err) => console.log(err)

    });
  }

  newReg() {
    this.new = {
      id: undefined,
      teamName: '',
      category: '',
      memberCount: 2,
      teamLeader: '',
      teamLeaderEmail: '',
      teamLeaderBirthDate: ''
    }
  }

  saveNew(reg: RegistrationModel) {
    this.dataService.addRegistration(reg).subscribe({
      next: (data: RegistrationModel) => {
        this.registrations.push(data);
        this.new = undefined;
      },
      error: (err) => console.log(err)
    });
  }

  modifyReg(reg: RegistrationModel) {
    this.modify = JSON.parse(JSON.stringify(reg));
  }

  saveModify(reg: RegistrationModel) {
    this.dataService.modifyRegistration(reg).subscribe({
      next: (data: RegistrationModel) => {
        const index = this.registrations.findIndex(r => r.id == data.id);
        this.registrations[index] = data;
        this.modify = undefined;
      },
      error: (err) => console.log(err)
    });
  }

  deleteReg(reg: RegistrationModel) {
    this.dataService.deleteRegistration(reg).subscribe({
      next: (data: RegistrationModel) => {
        const index = this.registrations.findIndex(r => r.id == data.id);
        this.registrations.splice(index, 1);
      },
      error: (err) => console.log(err)
    });
  }


}
