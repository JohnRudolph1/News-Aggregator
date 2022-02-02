import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsnbcComponent } from './msnbc.component';

describe('MsnbcComponent', () => {
  let component: MsnbcComponent;
  let fixture: ComponentFixture<MsnbcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsnbcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsnbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
