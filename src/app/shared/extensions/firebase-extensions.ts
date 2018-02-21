import { AngularFireObject } from 'angularfire2/database/interfaces';
import { Observable } from 'rxjs/Observable';
import { AngularFireList } from "angularfire2/database";

export function getObservableFromList<T>(angularFireList: AngularFireList<T>): Observable<any> {
  return angularFireList.snapshotChanges().map(action => {
    return action.map(
      item => {
        const key = item.payload.key;
        const data = { key, ...item.payload.val() };
        return data;
      });
  });
}
