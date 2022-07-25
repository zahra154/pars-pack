
import {NgModule} from "@angular/core";
import {LayoutComponent} from "./components/layout/layout.component";
import { ModalComponent } from './components/modal/modal.component';
import {NzButtonModule} from "ng-zorro-antd/button";
import {NzModalModule} from "ng-zorro-antd/modal";
import {NzTableModule} from "ng-zorro-antd/table";
import { CustomTableComponent } from './components/custom-table/custom-table.component';

@NgModule({
  imports:[
    NzButtonModule,
    NzModalModule,
    NzTableModule


  ],
  declarations:[
    LayoutComponent,
    ModalComponent,
    CustomTableComponent,

  ],
  providers:[],
  exports:[
    LayoutComponent,
    ModalComponent,
    CustomTableComponent
  ]
})


export class ShareModule{}
