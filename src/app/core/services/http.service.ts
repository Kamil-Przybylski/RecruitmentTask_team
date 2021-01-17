import { DataConditionState, Entities } from '@core/models/common.models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { EntitiesUtils } from '../utils/common.utils';
import { HttpUtils } from '../utils/http.utils';

export abstract class HttpService<T> {
  protected baseUrl = environment.apiUrl;

  protected entities$ = new BehaviorSubject<Entities<T>>({});
  protected title$ = new BehaviorSubject<string>('');
  protected dataConditionState$ = new BehaviorSubject<DataConditionState>(
    HttpUtils.getinitialDataConditionState()
  );

  public getEntitiesAll(): Observable<T[]> {
    return this.entities$
      .asObservable()
      .pipe(map((entities) => EntitiesUtils.getEntitiesAll<T>(entities)));
  }

  public getTitle(): Observable<string> {
    return this.title$.asObservable();
  }

  public getDataConditionState(): Observable<DataConditionState> {
    return this.dataConditionState$.asObservable();
  }
}
