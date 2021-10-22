import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  userName: string = '';
  userList: any = [];

  constructor() { }

  //parent to child

  // onAddUser(){
  //   this.userList.push(this.userName)
  // }

  //cjild to parent

  onAddUser(event: string) {
    this.userList.push(event)
  }

  ngOnInit(): void {
  }

}
