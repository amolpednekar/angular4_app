import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  email: string;
  address: Address;
  hobbies : string[] = [];

  constructor() { }

  ngOnInit() {
    this.name = "Amol Pednekar";
    this.email = "test@gmail.com"
    this.address = {
      street: "Main St",
      city: "Siolim"
    }
    this.hobbies.push("Reading")
  }

  addHobby(hobby){
    console.log(hobby)
    this.hobbies.push(hobby)
    return false; //stops page reload
  }


}

interface Address{
  street: string,
  city: string
}