import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeCommonComponent } from './ae-common.component';

describe('AeCommonComponent', () => {
  let component: AeCommonComponent;
  let fixture: ComponentFixture<AeCommonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeCommonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeCommonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
