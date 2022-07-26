import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';



@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})
export class CustomTableComponent implements OnChanges , OnInit {
  @Input() data: any;
  @Input() listOfColumns: any;
  @Output() handelActions: EventEmitter<any> = new EventEmitter<any>()

  listOfData: any[] = [];

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
    this.listOfData = this.data
  }


  trackByName(_: number, item: any): string {
    return item.id
  }


  action(type: string , obj: any){
    this.handelActions.emit({
      type,obj
    })
  }




}
