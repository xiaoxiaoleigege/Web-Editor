import { Component, OnInit } from '@angular/core';
import { BasicComponent } from './node_modules/src/app/editor/dev/comp-basic/basic/basic.component';
import { SettingObjComponent } from './node_modules/src/app/editor/module/setting-object.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent extends BasicComponent implements OnInit, SettingObjComponent{
  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }
  
  inputState(event) {
    this.settingObj['editeabled'] = true;
  }

}