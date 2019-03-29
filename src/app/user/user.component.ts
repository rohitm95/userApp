import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = []
  IsAdmin:boolean = true

  constructor(private userservice: UserService) {
    this.users = this.userservice.getUsers()
  }

  ngOnInit() {

  }

  showDetails(user){
    let userDetails = user
    console.log("Name: " + userDetails.userName + "\nEmail: " + userDetails.userEmail)
  }

  searchUser(value){
    let resultArr:User[] = []
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].userName.toLowerCase().startsWith(value.toLowerCase())){
        resultArr.push(this.users[i])
      }
    }

    for(let j = 0; j < resultArr.length; j++){
      console.log("Name: " + resultArr[j].userName + "\nEmail: " + resultArr[j].userEmail)
    }
  }

}
