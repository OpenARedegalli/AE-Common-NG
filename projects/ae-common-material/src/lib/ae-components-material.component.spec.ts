import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeComponentsMaterialComponent } from './ae-common-material.component';

describe('AeComponentsMaterialComponent', () => {
  let component: AeComponentsMaterialComponent;
  let fixture: ComponentFixture<AeComponentsMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeComponentsMaterialComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AeComponentsMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
