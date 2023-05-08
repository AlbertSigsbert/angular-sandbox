import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverName :string = '';
    serverCreationStatus:string = "No server was created";
    serverCreated:boolean = false;
    servers = ['Testserver 1', 'Testserver2'];

    constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
    }

    onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = "Server was created and serverName is:"+ this.serverName;
    }

    updateServerName(event:Event){
       this.serverName = (<HTMLInputElement>event.target).value;
    }


}
