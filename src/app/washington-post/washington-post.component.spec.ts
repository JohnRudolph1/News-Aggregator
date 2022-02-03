import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingtonPostComponent } from './washington-post.component';

describe('WashingtonPostComponent', () => {
  let component: WashingtonPostComponent;
  let fixture: ComponentFixture<WashingtonPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WashingtonPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WashingtonPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
