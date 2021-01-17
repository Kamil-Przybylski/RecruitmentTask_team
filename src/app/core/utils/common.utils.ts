import { Entities } from '../models/common.models';

export class EntitiesUtils {
  public static getEntitiesAll<T>(entities: Entities<T>): T[] {
    const all: T[] = [];

    for (const key in entities) {
      if (Object.prototype.hasOwnProperty.call(entities, key)) {
        all.push(entities[key]);
      }
    }

    return all;
  }
}
