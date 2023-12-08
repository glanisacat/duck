import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckBuilderComponent } from './duck-builder.component';

describe('DuckBuilderComponent', () => {
  let component: DuckBuilderComponent;
  let fixture: ComponentFixture<DuckBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuckBuilderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuckBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
