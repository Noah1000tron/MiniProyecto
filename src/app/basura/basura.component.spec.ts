import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasuraComponent } from './basura.component';

describe('BasuraComponent', () => {
  let component: BasuraComponent;
  let fixture: ComponentFixture<BasuraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasuraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BasuraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
