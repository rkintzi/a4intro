class:  middle

# Angular 2/4/5 
**Radosław Kintzi**<br>
@rkintzi


---

# Agenda

0. Introduction

1. Angular CLI 

2. Components and interaction

4. Services and DI

5. Hierarchical injector

6. Change detection

7. Styling techniques

8. Testing


---

class: middle

# Introduction

---

# What we gonna build today


---

# How will we work


---

# How will we work

* few minutes of my talking

* a task to do

* review and my solution

---

# How will we work

* few minutes of my talking

* a task to do

* review and my solution

---

class: middle

# Angular CLI

---

# Angular CLI 

http://cli.angular.io/

Command line utility for Angular

```
> npm install -g @angular/cli
> ng new my-super-app
> cd my-super-app
> ng serve
```


---

# Angular CLI 

http://cli.angular.io/

Command line utility for Angular

```bash
> npm install -g @angular/cli
> ng new my-super-app
> cd my-super-app
> ng serve
```

<br>


```bash
> ng generate component MyComponetName
> ng generate service MyService
> ng test
> ng build
```

---

# Task #1

(If you haven't done yet)

---

# Task #1

(If you haven't done yet)

```bash
> git clone http://github.com/rkintzi/a4intro
> cd a4intro
> npm install
```

---

# Task #1

(If you haven't done yet)

```bash
> git clone http://github.com/rkintzi/a4intro
> cd a4intro
> npm install
```

<br>

```bash
> export PATH=`pwd`/node_modules/.bin:$PATH
```

```bash
> npm install -g @angular/cli
```

---

# Review #1
What was generated for us?

---

# Task #2

1. On first console run:

    ```bash
    > ng serve
    ```
2. Open a browser `http://localhost:4200`

3. On second console run:

    ```bash
    > ng test
    ```

---

# Review #2

---
class: middle

# Components and interaction

---

# Components

* Building blocks you compose UI from

* Consist of template, controller, and styles

* React on user interactions

* Communicate each other to provide complex look and feel 

---

# First Component

```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {


    constructor(public editorState: EditorStateService) {
    }

    ngOnInit() {
    }

}
```
---

# Task #3

1. Generate `EditorComponent` with:

    ```bash
    > ng gnerate component EditorComponent
    ```

2. Write a template and CSS stylesheet so the component provides a two-column layout for our editor

3. Columns should contain nothing but simple strings: "Left column" and "Right
   column"

4. Make use of the new component in the app component 

---

# Review #3
   
To compare with a suggested solution:
```bash
> git diff task3
```

---

# Review #3

To compare with a suggested solution:
```bash
> git diff task3
```

To obtain the suggested solution:
```bash
> git reset --hard task3
```

---

# Review #3

```html
<div class="editor">
    <div>Left column</div>
    <div>Right column</div>
</div>
```

```css
.editor {
    display: flex;
    flex-direction: row;
}
.editor > * {
    flex: 1;
}
```
```html
<div>
  <h1 style="text-align:center">
    Welcome to {{title}}!
  </h1>
  <app-editor></app-editor>
</div>
```

---

# Task #4

1. Fix a test for the `AppComponent`

2. Write a test for the `EditorComponent`
