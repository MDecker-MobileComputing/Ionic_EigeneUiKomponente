import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarbwahlComponent } from './farbwahl.component';


@NgModule({
  imports: [ CommonModule ],      
  declarations: [ FarbwahlComponent ],
  exports: [ FarbwahlComponent ]
})
export class FarbwahlModule { }


/*

  @NgModule({
    imports: [ CommonModule, FormsModule, IonicModule],
    declarations: [ExploreContainerComponent],
    exports: [ExploreContainerComponent]
  })
  export class ExploreContainerComponentModule {}

*/