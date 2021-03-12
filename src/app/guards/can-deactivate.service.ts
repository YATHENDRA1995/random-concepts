import { componentFactoryName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { LayoutModule } from '../layout/layout.module';
import { CommonServiceService } from '../services/common-service.service';


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateService implements CanDeactivate<LayoutModule> {

  constructor(
    public commonServiceLayer: CommonServiceService
  ) { }

  canDeactivate(module: LayoutModule) {
    console.log('Can Deactivate Fn');
    let flag = 0;
    this.commonServiceLayer.getCheckBoxData().subscribe(res => {
      console.log('Inside can deactivate Observable')
      if (res) {
        flag++;
      }
    });
    if (flag) {
      return true;
    } else {
      return false;
    }
  }

}
