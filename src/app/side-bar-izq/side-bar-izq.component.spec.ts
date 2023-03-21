import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarIzqComponent } from './side-bar-izq.component';

describe('SideBarIzqComponent', () => {
  let component: SideBarIzqComponent;
  let fixture: ComponentFixture<SideBarIzqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarIzqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarIzqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
