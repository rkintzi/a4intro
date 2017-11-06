import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import { EditAreaComponent } from './edit-area/edit-area.component';
import { PreviewComponent } from './preview/preview.component';
import { EditorStateService } from './editor-state.service';

@NgModule({
  declarations: [
    AppComponent,
    EditorComponent,
    EditAreaComponent,
    PreviewComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [EditorStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
