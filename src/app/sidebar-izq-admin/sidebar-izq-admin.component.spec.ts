import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarIzqAdminComponent } from './sidebar-izq-admin.component';

describe('SidebarIzqAdminComponent', () => {
  let component: SidebarIzqAdminComponent;
  let fixture: ComponentFixture<SidebarIzqAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarIzqAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarIzqAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
