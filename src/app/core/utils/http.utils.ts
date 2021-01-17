import {
  DataConditionState,
  Entities,
  HttpAttributes,
  HttpResponseData,
} from '../models/common.models';

export class HttpUtils {
  private static initialDataConditionState: DataConditionState = {
    isLoading: false,
    isSuccess: false,
    error: null,
  };

  public static getEntities<T, P>(
    res: HttpResponseData<T, P>,
    getterFn: (attr: P) => Entities<T>
  ): Entities<T> {
    const data = res?.data[0];
    if (!data) return {};

    return getterFn(data.attributes);
  }

  public static getTitle(res: HttpResponseData<unknown, HttpAttributes>): string {
    const data = res?.data[0];
    if (!data) return '';

    return data?.attributes?.title || '';
  }

  public static getinitialDataConditionState(): DataConditionState {
    return Object.assign({}, this.initialDataConditionState);
  }

  public static setDataConditionState(
    stateChange: Partial<DataConditionState>
  ): DataConditionState {
    return Object.assign(this.getinitialDataConditionState(), stateChange);
  }
}
