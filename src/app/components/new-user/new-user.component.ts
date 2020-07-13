import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { UsersModel } from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent   {

    public user:UsersModel=new UsersModel();
  constructor(private myUserService:UsersService, private myRouter:Router) { }

 
public async create(){
    // console.log(this.user);
    try{    
        await this.myUserService.createUserAsync(this.user);
        this.myRouter.navigateByUrl('/home');
    }catch(err){
        console.log(err);
    }
}

}
