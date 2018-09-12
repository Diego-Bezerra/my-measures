import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { WeekModel } from "../../model/weekModel";
import { Observable } from "rxjs-compat/Observable";
import { Storage } from "@ionic/storage";
import { Subscription } from "rxjs-compat/Subscription";

export const WEEKS_SOTORAGE_KEY: string = "weeks";

@Injectable()
export class DatabaseProvider {
  private weeks: WeekModel[];

  constructor(private db: AngularFireDatabase, private storage: Storage) {}

  getWeeks(): Promise<WeekModel[]> {
    return new Promise<WeekModel[]>((resolve, reject) => {
      if (this.weeks && this.weeks.length > 0) {
        resolve(this.weeks);
      } else {
        this.storage.get(WEEKS_SOTORAGE_KEY).then(val => {
          if (val) {
            this.weeks = JSON.parse(val);
            resolve(this.weeks);
          } else {
            let sub: Subscription = this.db.list<WeekModel>("/weeks").valueChanges().subscribe((val: WeekModel[]) => {
                console.log(val);
                this.weeks = val;
                let weeksJson = JSON.stringify(this.weeks);
                this.storage.set("weeks", weeksJson);
              },
              (error: any) => {
                console.log(error);
                reject();
              },
              () => {
                sub.unsubscribe();
                resolve(this.weeks);
              }
            );
          }
        });
      }
    });
  }
}
