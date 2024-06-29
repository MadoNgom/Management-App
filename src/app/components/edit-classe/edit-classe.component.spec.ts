import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditClasseComponent } from './edit-classe.component';

describe('EditClasseComponent', () => {
  let component: EditClasseComponent;
  let fixture: ComponentFixture<EditClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditClasseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
