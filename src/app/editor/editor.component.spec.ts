import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, Input } from '@angular/core';

import { EditorComponent } from './editor.component';
import { EditorStateService } from '../editor-state.service';



describe('EditorComponent', () => {
    let component: EditorComponent;
    let fixture: ComponentFixture<EditorComponent>;
    let editAreaState: string;
    let previewState: string;

    @Component({
        selector: 'app-edit-area',
        template: '<div>mocked edit area</div>',
    })
    class EditAreaComponent {
        @Input() set editorState(val: string) { editAreaState = val };
    }


    @Component({
        selector: 'app-preview',
        template: '<div>mocked preview</div>',
    })
    class PreviewComponent {
        @Input() set editorState(val: string) { previewState = val };
    }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
          EditorComponent,
          EditAreaComponent,
          PreviewComponent,
      ],
      providers: [ EditorStateService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
    it('should create edit area', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-edit-area').textContent)
            .toContain('mocked edit area');
    });
    it('should create preview area', () => {
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-preview').textContent)
            .toContain('mocked preview');
    });
    it('should pass editor state to editor area', () => {

        component.editorState.state = 'edited text';
        fixture.detectChanges();
        expect(editAreaState).toEqual('edited text');
        expect(previewState).toEqual('edited text');
    });
});
