import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhipComponent } from './whip.component';

describe('WhipComponent', () => {
  let component: WhipComponent;
  let fixture: ComponentFixture<WhipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
