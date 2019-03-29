import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
    selector: 'app-addUserForProject',
    template: `
        <button class="btn btn-info" (click)="addUser()">Add User</button>
    `
})
export class AddUserForProjectComponent implements OnInit {

    @Input() addUserDetails: User
    constructor() { }

    ngOnInit() { 

    }

    addUser(){
        alert("Clicked")
    }

}