import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/debounceTime';

@Injectable()
export class EditorStateService {


    private _state: string;
    public parsedState: string;
    get state(): string { return this._state; }
    set state(val: string) {
        this._state = val;
        this.parsedState = this.parse(val);
    }
    constructor() {
        this.state = 'Initial content';
    }
    private re = new RegExp(/\*([^\*]*)\*/);

    parse(md: string): string {
        return md.replace(this.re, '<em>$1</em>');
    }
}
