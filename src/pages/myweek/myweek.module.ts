import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyweekPage } from './myweek';

@NgModule({
  declarations: [
    MyweekPage,
  ],
  imports: [
    IonicPageModule.forChild(MyweekPage),
  ],
})
export class MyweekPageModule {}
