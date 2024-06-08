import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrl: './persona.component.css'
})
export class PersonaComponent {
  persona: any={};

  constructor(private api:UserService) { }

  ngOnInit(): void {
      this.searchUser();
    } searchUser():void{
      
    this.api.consultapersona('').subscribe({
    next:(infoPersona)=>{
      this.persona = infoPersona;
      console.log(this.persona);
        }
      })
    }
}
