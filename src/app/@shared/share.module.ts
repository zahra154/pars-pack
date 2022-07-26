
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./components/layout/layout.component";
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzTableModule} from "ng-zorro-antd/table";
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import {CommonModule} from "@angular/common";
import {en_US, fa_IR, NZ_I18N} from "ng-zorro-antd/i18n";
import { GeoComponent } from './components/geo/geo.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  imports:[
    CommonModule,
    NzButtonModule,
    NzModalModule,
    NzTableModule

  ],
  declarations:[
    LayoutComponent,

    CustomTableComponent,
    PageNotFoundComponent,
    GeoComponent,
    ModalComponent,

  ],
  providers:[
    { provide: NZ_I18N, useValue: fa_IR }
  ],
  exports:[
    LayoutComponent,
    CustomTableComponent
  ]
})


export class ShareModule{}
