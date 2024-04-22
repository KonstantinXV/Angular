import { Component } from '@angular/core';
import { User } from './shared/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular5';


  // public name!:String;
  // public Age!:String;
  // public position!:String;
  // public image!:String;

public user1:User = new User();
public userList:User[] = [];
  public isTrue:boolean = false;

  trigger(){
    this.isTrue = true;
    this.userList.push(this.user1)
  }
  
}
