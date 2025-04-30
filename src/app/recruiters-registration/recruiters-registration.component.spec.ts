import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitersRegistrationComponent } from './recruiters-registration.component';

describe('RecruitersRegistrationComponent', () => {
  let component: RecruitersRegistrationComponent;
  let fixture: ComponentFixture<RecruitersRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruitersRegistrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitersRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
