import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentsComponentComponent } from './components-component.component';

describe('ComponentsComponentComponent', () => {
  let component: ComponentsComponentComponent;
  let fixture: ComponentFixture<ComponentsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentsComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
