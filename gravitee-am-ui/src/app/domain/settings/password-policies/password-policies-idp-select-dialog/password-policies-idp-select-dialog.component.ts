/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Component, Inject } from '@angular/core';
import { FlexModule } from '@angular/flex-layout';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadge } from '@angular/material/badge';

import {
  IdpDataModel,
  PasswordPoliciesIdpSelectTableComponent,
} from './password-policies-idp-select-table/password-policies-idp-select-table.component';

export interface DialogData {
  linkedIdps: IdpDataModel[];
  unlinkedIdps: IdpDataModel[];
}

export interface DialogResult {
  idpsToLink: string[];
  idpsToUnlink: string[];
}

@Component({
  selector: 'app-password-policies-idp-select-dialog',
  standalone: true,
  imports: [
    FlexModule,
    MatButton,
    NgxDatatableModule,
    ReactiveFormsModule,
    PasswordPoliciesIdpSelectTableComponent,
    MatTabsModule,
    MatIconModule,
    MatBadge,
  ],
  templateUrl: './password-policies-idp-select-dialog.component.html',
  styleUrl: './password-policies-idp-select-dialog.component.scss',
})
export class PasswordPoliciesIdpSelectDialogComponent {
  result: DialogResult = {
    idpsToLink: [],
    idpsToUnlink: [],
  };
  constructor(
    private dialogRef: MatDialogRef<PasswordPoliciesIdpSelectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  confirmSelection(): void {
    this.dialogRef.close(this.result);
  }

  handleEvent(event: { id: string; selected: boolean }, result: DialogResult): void {
    if (event.selected) {
      result.idpsToLink.push(event.id);
      const i = result.idpsToUnlink.indexOf(event.id);
      if (i !== -1) {
        result.idpsToUnlink.splice(i, 1);
      }
    } else {
      result.idpsToUnlink.push(event.id);
      const i = result.idpsToLink.indexOf(event.id);
      if (i !== -1) {
        result.idpsToLink.splice(i, 1);
      }
    }
  }
}
