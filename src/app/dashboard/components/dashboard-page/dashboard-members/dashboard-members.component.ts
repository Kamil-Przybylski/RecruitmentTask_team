import { Component, OnInit } from '@angular/core';
import { MembersService } from '@core/services/members.service';
import { Observable } from 'rxjs';
import { MemberCard } from '@core/models/member.models';
import { DataConditionState } from '@core/models/common.models';

@Component({
  selector: 'app-dashboard-members',
  templateUrl: './dashboard-members.component.html',
  styles: [],
})
export class DashboardMembersComponent implements OnInit {
  public members$!: Observable<MemberCard[]>;
  public title$!: Observable<string>;
  public membersDataState$!: Observable<DataConditionState>;

  constructor(private membersService: MembersService) {}

  ngOnInit(): void {
    this.membersService.downloadData();

    this.members$ = this.membersService.getEntitiesAll();
    this.title$ = this.membersService.getTitle();
    this.membersDataState$ = this.membersService.getDataConditionState();
  }
}
