import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlegeComponent } from './knowledge.component';

describe('KnowlegeComponent', () => {
  let component: KnowlegeComponent;
  let fixture: ComponentFixture<KnowlegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KnowlegeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KnowlegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
