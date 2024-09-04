import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsCComponent } from './news-c.component';

describe('NewsCComponent', () => {
  let component: NewsCComponent;
  let fixture: ComponentFixture<NewsCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsCComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
