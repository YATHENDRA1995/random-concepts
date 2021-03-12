import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CommonServiceService } from '../services/common-service.service';
import { HttpLayerService } from '../services/http-layer.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnChanges {

  public isChecked;
  public lifeCycleHooks = {
    onChanges: null,
    onInit: null,
    doCheck: null,
    afterContentInit: null,
    afterContentChecked: null,
    afterViewInit: null,
    afterViewChecked: null,
    afterDestroy: null
  }
  public ngForPerf = [null]
  public api = {
    url: 'https://jsonplaceholder.typicode.com/users/',
    number: null,
    data: null
  }

  constructor(
    public router: Router,
    public commmonServicelayer: CommonServiceService,
    public httpLayer: HttpLayerService
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    // Will be called when variable declared as @Input changes
    this.lifeCycleHooks['onChanges'] = 'ngOnChanges Hook Called'
  }

  ngOnInit(): void {
    this.lifeCycleHooks['onInit'] = 'ngOnInit Hook Called';
    this.checkBoxFn();
  }

  ngDoCheck() {
    this.lifeCycleHooks['doCheck'] = 'Do Check Hook Called';
  }

  ngAfterContentInit() {
    this.lifeCycleHooks['afterContentInit'] = 'ngAfterContentInit Hook Called';
  }

  ngAfterContentChecked() {
    this.lifeCycleHooks['afterContentChecked'] = 'ngAfterContentChecked Hook Called';
  }

  ngAfterViewInit() {
    this.lifeCycleHooks['afterViewInit'] = 'ngAfterViewInit Hook Called';
  }

  ngAfterViewChecked() {
    this.lifeCycleHooks['afterViewChecked'] = 'ngAfterViewChecked Hook Called';
  }

  ngOnDestroy() {
    this.lifeCycleHooks['afterDestroy'] = 'ngOnDestroy Hook Called';
  }

  checkBoxFn() {
    try {
      this.commmonServicelayer.getCheckBoxData().subscribe(res => {
        this.isChecked = res;
      });
    } catch (error) {
      console.log(error);
    }
  }

  checkChange() {
    try {
      this.commmonServicelayer.setCheckBoxData(this.isChecked);
    } catch (error) {
      console.log(error);
    }
  }

  backToLogin() {
    try {
      this.router.navigate(['login']);
    } catch (error) {
      console.log(error);
    }
  }

  trackByFn(i) {
    return i; 
  }

  addInput() {
    try {
      this.ngForPerf.push(null);
    } catch (error) {
      console.log(error);
    }
  }

  fetchNumDetails() {
    try {
      this.httpLayer.get(this.api['url'] + this.api['number']).subscribe(res => {
        this.api['data'] = res['name'];
      });
    } catch (error) {
      console.log(error);
    }
  }

}
