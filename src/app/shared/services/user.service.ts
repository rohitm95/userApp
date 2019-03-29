import { Injectable } from '@angular/core';
import { User } from 'src/app/user';

@Injectable()
export class UserService {
    
    users:User[] = []
    constructor() {
        this.users.push(new User(1, "Rohit", "rohit@gmail.com", "./assets/images/1.jpg"))
        this.users.push(new User(2, "Sunayana", "sunayana@gmail.com", "./assets/images/2.jpg"))
        this.users.push(new User(3, "Vinod", "vinod@gmail.com", "./assets/images/3.jpg"))
        this.users.push(new User(4, "Nikhil", "nikhil@gmail.com", "./assets/images/4.jpg"))
        this.users.push(new User(5, "Sagar", "sagar@gmail.com", "./assets/images/5.jpg"))
        this.users.push(new User(6, "Akshay", "akshay@gmail.com", "./assets/images/6.jpg"))
        this.users.push(new User(7, "Trupti", "trupti@gmail.com", "./assets/images/7.jpg"))
    }

    getUsers(){
        return this.users
    }

}