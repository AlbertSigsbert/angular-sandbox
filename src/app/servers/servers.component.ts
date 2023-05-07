import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
    allowNewServer: boolean = false;
    serverName = '';
    serverCreationStatus = "No server was created";

    constructor(){
      setTimeout(() => {
        this.allowNewServer = true;
      }, 2000);
    }

    onCreateServer(){
      this.serverCreationStatus = "Server was created and serverName is:"+ this.serverName;
    }

    updateServerName(event:Event){
       this.serverName = (<HTMLInputElement>event.target).value;
    }


}
