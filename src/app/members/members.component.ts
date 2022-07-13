import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
import { MemberBaseService } from '../member-base.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: Member[] = [];

  constructor(private memberBase: MemberBaseService, public messageService: MessageService) { }

  getMembers(){
    this.memberBase.getMembers().subscribe(xyz => this.members = xyz)
  }

  ngOnInit(): void {
    this.getMembers()
  }
}
