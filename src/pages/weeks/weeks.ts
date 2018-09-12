import { WeekModel } from "./../../model/weekModel";
import { DatabaseProvider } from "./../../providers/database/database.provider";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from "ionic-angular";

@IonicPage()
@Component({
  selector: "page-weeks",
  templateUrl: "weeks.html"
})
export class WeeksPage {
  weeks: WeekModel[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: DatabaseProvider,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WeeksPage");
    let loading = this.loadingCtrl.create();
    loading.present();

    this.db.getWeeks().then((val: WeekModel[]) => {
      this.weeks= val;
      loading.dismiss();
    });
  }

  onItemClick(week: WeekModel) {
    const toast = this.toastCtrl.create({
      message: week.name,
      duration: 3000
    });
    toast.present();
  }
}
