import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarDerComponent } from './side-bar-der.component';

describe('SideBarDerComponent', () => {
  let component: SideBarDerComponent;
  let fixture: ComponentFixture<SideBarDerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarDerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarDerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
