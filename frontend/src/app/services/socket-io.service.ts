import { Injectable } from '@angular/core';
//package installed
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class SocketIoService extends Socket {

  constructor() {
    super({
      url : '', //url backend

    });
  }
}
