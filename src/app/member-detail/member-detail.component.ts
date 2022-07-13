import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../member';
import { ActivatedRoute } from  '@angular/router';
import { Location } from '@angular/common';
import { MemberBaseService } from '../member-base.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, 
    private memberBaseService: MemberBaseService, 
    private location: Location
    ) { }
  
  @Input()
  aMember!: Member;

  ngOnInit(): void {
    this.getMember()
  }

  getMember(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memberBaseService.getMember(id).subscribe(xyz => this.aMember = xyz);
  }

  goBack(): void {
    this.location.back();
  } 

}
