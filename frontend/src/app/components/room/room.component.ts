import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
  public room: string | null = '';
  constructor(
    private router: ActivatedRoute,
    private cookieService: CookieService
    ) { }

  ngOnInit(): void {
    this.room =  this.getRoom();
    //we are goin to save this room in the cookie
    this.cookieService.set('room', this.room);

  }
  //get param room id for routes url.
  private getRoom(): string{
    const room = this.router.snapshot.paramMap.get('room');
    return room === null? '' : room;
  }

}
