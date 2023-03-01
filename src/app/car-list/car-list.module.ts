import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CarProviderService } from "../services/CarProvider.service";
import { SharedModule } from "../shared/shared.module";
import { CarListComponent } from "./car-list.component";
import { CarDetailsCardComponent } from './car-details-card/car-details-card.component';


@NgModule({
  declarations: [
    CarListComponent,
    CarDetailsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
        {
            path: '',
            component: CarListComponent
        }
    ])
  ],
  providers: [CarProviderService]
})
export class CarListModule { }
