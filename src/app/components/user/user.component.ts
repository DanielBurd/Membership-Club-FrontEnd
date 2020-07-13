import { Component, OnInit } from '@angular/core';
import {UsersService} from '../../services/users.service'
import { UsersModel } from 'src/app/models/user.model';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{

    public phone:string;
  constructor() { }

  public ngOnInit():void{
   
  }

}
