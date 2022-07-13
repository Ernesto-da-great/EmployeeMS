import { Component, OnInit } from '@angular/core';
import { MemberBaseService } from '../member-base.service';
import { Member } from '../member';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  members: Member[] = [];

  constructor(private memberBaseService: MemberBaseService) { }

  getMembers(): void{
    this.memberBaseService.getMembers().subscribe(xyz => this.members = xyz.slice(1, 5))
  }
  ngOnInit(): void {
    this.getMembers();
  }

}
