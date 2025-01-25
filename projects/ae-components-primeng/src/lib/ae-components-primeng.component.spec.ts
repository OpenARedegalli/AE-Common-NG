import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeComponentsPrimengComponent } from './ae-components-primeng.component';

describe('AeComponentsPrimengComponent', () => {
  let component: AeComponentsPrimengComponent;
  let fixture: ComponentFixture<AeComponentsPrimengComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AeComponentsPrimengComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeComponentsPrimengComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
