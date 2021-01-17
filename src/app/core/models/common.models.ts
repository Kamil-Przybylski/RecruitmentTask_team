import { HttpErrorResponse } from '@angular/common/http';

export interface ItemData<T, P> {
  attributes: P;
  id: string;
  type: string;
}

export interface HttpResponseData<T, P> {
  data: ItemData<T, P>[];
}

export interface HttpAttributes {
  title: string;
}

export interface Entities<T> {
  [id: string]: T;
}

export interface DataConditionState {
  isLoading: boolean;
  isSuccess: boolean;
  error: HttpErrorResponse | null;
}

export interface ImageUrls {
  w200: string;
  w400: string;
  w1080: string;
  w1920: string;
  w2560: string;
}
