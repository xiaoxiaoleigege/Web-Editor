import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsTempComponent } from './tabs-temp.component';

describe('TabsTempComponent', () => {
  let component: TabsTempComponent;
  let fixture: ComponentFixture<TabsTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
