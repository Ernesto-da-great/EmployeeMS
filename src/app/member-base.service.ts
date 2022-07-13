import { Injectable } from '@angular/core';
import { Member } from './member';
import { MEMBERS } from './mock-members';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class MemberBaseService {

  getMembers(): Observable<Member[]> {
    const members = of(MEMBERS);
    this.messageService.add('HeroService: fetched heroes');
    return members;
  }

  getMember(id: number) {
    const member = MEMBERS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(member);
  }
  constructor(private messageService: MessageService) { }
}