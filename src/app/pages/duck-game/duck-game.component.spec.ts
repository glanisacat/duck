import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuckGameComponent } from './duck-game.component';

describe('DuckGameComponent', () => {
  let component: DuckGameComponent;
  let fixture: ComponentFixture<DuckGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DuckGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DuckGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
