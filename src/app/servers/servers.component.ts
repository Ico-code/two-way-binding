import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers',
  //selector: '[app-servers]',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {


  allowNewServer:boolean = false;
  ServerCreationStatus = "No server was created!";
  ServerName ="Testserver";


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.ServerCreationStatus = "Server was Created! Server name is " + this.ServerName;
  }

  onUpdateServerName(event:Event){
    this.ServerName = (<HTMLInputElement>event.target).value;
  }

}
