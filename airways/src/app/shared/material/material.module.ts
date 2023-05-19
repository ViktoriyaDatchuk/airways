import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatStepperModule } from '@angular/material/stepper';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatSortModule } from '@angular/material/sort';

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatTabsModule,
  MatCheckboxModule,
  MatSelectModule,
  MatBadgeModule,
  MatStepperModule,
  MatDividerModule,
  MatSortModule,
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false },
    },
  ],
})
export class MaterialModule {}
