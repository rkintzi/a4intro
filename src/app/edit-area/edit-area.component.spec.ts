import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { EditAreaComponent } from './edit-area.component';

describe('EditAreaComponent', () => {
  let component: EditAreaComponent;
  let fixture: ComponentFixture<EditAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAreaComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    xit('should emmit state', () => {
        let state: string;
        component.editorStateChange.subscribe((val) => {state = val; });
        component.editorState = 'state1';
        fixture.detectChanges();
        expect(state).toEqual('state1');
        component.editorState = 'state2';
        fixture.detectChanges();
        expect(state).toEqual('state2');

    });
});
