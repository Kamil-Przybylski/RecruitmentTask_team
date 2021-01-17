import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpResponseData } from '@core/models/common.models';
import { MemberCard, MemberAttributes } from '@core/models/member.models';
import { HttpUtils } from '../utils/http.utils';
import { HttpService } from './http.service';

enum Postfixes {
  TASK = 'task',
  INDEX = 'index.json',
}

@Injectable({
  providedIn: 'root',
})
export class MembersService extends HttpService<MemberCard> {
  constructor(private http: HttpClient) {
    super();
  }

  public downloadData(): void {
    this.dataConditionState$.next(HttpUtils.setDataConditionState({ isLoading: true }));

    this.http
      .get<HttpResponseData<MemberCard, MemberAttributes>>(
        `${this.baseUrl}/${Postfixes.TASK}/${Postfixes.INDEX}`
      )
      .subscribe(
        (res) => {
          this.entities$.next(HttpUtils.getEntities(res, (attr) => attr.memberCards));
          this.title$.next(HttpUtils.getTitle(res));
          this.dataConditionState$.next(HttpUtils.setDataConditionState({ isSuccess: true }));
        },
        (err: HttpErrorResponse) =>
          this.dataConditionState$.next(HttpUtils.setDataConditionState({ error: err }))
      );
  }
}
