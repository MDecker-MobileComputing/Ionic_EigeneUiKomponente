import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';  // damit auch Ionic-Komponenten verwendet werden können
import { FormsModule } from '@angular/forms'; // damit auch [(ngModel)] verwendet werden kann

import { FarbwahlComponent } from './farbwahl.component';


@NgModule({
  imports: [ CommonModule, IonicModule, FormsModule ],      
  declarations: [ FarbwahlComponent ],
  exports: [ FarbwahlComponent ]
})
export class FarbwahlModule { }

