import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurriculumAdminComponent } from './curriculum-admin.component';

describe('CurriculumAdminComponent', () => {
  let component: CurriculumAdminComponent;
  let fixture: ComponentFixture<CurriculumAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurriculumAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurriculumAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
