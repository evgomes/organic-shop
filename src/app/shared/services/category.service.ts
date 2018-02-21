import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { getObservableFromList } from '../extensions/firebase-extensions';
@Injectable()
export class CategoryService {
  categories$: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    let list = this.db.list('/categories', ref => ref.orderByChild('name'));
    this.categories$ = getObservableFromList(list);
  }

  getAll() {
    return this.categories$;
  }
}
