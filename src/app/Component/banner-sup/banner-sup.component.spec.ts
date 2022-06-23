import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerSupComponent } from './banner-sup.component';

describe('BannerSupComponent', () => {
  let component: BannerSupComponent;
  let fixture: ComponentFixture<BannerSupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerSupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BannerSupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
