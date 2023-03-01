import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { WidgetComponent } from './widget/widget.component';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
const materials = [
  MatIconModule,
  MatButtonModule,
  MatGridListModule,
  MatCardModule,
  MatTooltipModule
];

@NgModule({
  declarations: [WidgetComponent],
  imports: [
    CommonModule,
    RouterModule,
    materials
  ],
  exports: [WidgetComponent, materials]
})
export class SharedModule { }
