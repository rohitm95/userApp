import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UserComponent } from './user.component';
import { UserService } from '../shared/services/user.service';
import { AddUserForProjectComponent } from './addUserForProject.component';

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ UserComponent, AddUserForProjectComponent ],
    providers: [ UserService ],
    exports: [ UserComponent, AddUserForProjectComponent ]
})
export class UserModule { }