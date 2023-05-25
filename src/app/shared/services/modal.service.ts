import { Injectable } from '@angular/core';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  ref?: DynamicDialogRef;

  entity: any;

  constructor() { }
}
