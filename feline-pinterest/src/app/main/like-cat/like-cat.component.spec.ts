import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeCatComponent } from './like-cat.component';

describe('LikeCatComponent', () => {
  let component: LikeCatComponent;
  let fixture: ComponentFixture<LikeCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LikeCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
