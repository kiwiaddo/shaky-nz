import { IQuakeData } from './../interfaces/quake-data';
import { Observable } from 'rxjs/Rx';
import { QuakeDataComponent } from '../quake-data/quake-data.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';

@Injectable()
export class DialogsService {

    constructor(private dialog: MdDialog) { }

    public confirm(title: string): Observable<IQuakeData> {

        let dialogRef: MdDialogRef<QuakeDataComponent>;

        dialogRef = this.dialog.open(QuakeDataComponent);
        dialogRef.componentInstance.title = title;

        return dialogRef.afterClosed();
    }
}