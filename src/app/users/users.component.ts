import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UsersService} from "../@shared/services/users.service";
import {UsersModel} from "../@shared/models/users.model";
import {NzModalRef, NzModalService} from "ng-zorro-antd/modal";
import {GeoComponent} from "../@shared/components/geo/geo.component";
import * as L from "leaflet";



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
public users: UsersModel[] = [];
public listOfFilterName :{name:'',value:''}[]=[];
   listOfColumns = [
     {
       name: 'id',
       faName: 'شماره',
       sortOrder: null,
     },
     {
       name: 'name',
       faName: 'نام',
       sortOrder: null,
       sortFn: (a: UsersModel, b: UsersModel) => a.name.localeCompare(b.name),
     },
     {
       name: 'username',
       faName: 'نام کاربری',
       sortOrder: null,
       sortFn:  (a: UsersModel, b: UsersModel) => a.username.localeCompare(b.username),
     },
     {
       name: 'email',
       faName: 'ایمیل',
     },
     {
       name: 'phone',
       faName: 'شماره همراه',
     },
     {
       name: 'website',
       faName: 'وب سایت',
     },

     {
       name: 'company',
       faName: 'شرکت',
       listOfFilter: [
         {text: 'Romaguera-Crona'  , value: 'Romaguera-Crona'} ,
         {text: 'Abernathy Group'  , value: 'Abernathy Group'} ,
       ],
       filterFn: (list: string[], item: UsersModel) => list.some(company => item.company.name.indexOf(company) !== -1)
     },
     {
       name: 'address',
       faName: 'آدرس',
     },

   ];
  constructor(private userService: UsersService ,
              private viewContainerRef: ViewContainerRef,
              private modal: NzModalService) { }

  ngOnInit(): void {
    this.getUsers();
  }



  private getUsers():void{
    this.userService.getUsers().subscribe((users: Array<UsersModel>) => {
      this.users = users;
    });
  }

  createObject(name: string) {
    const object: any = {
      text: name,
      value: name
    }
    // @ts-ignore
    this.listOfFilterName.push(object)
    console.log('this.listOfFilterName' , this.listOfFilterName)
  }


  handelActions(event: any) : void{

    if(event.obj){
     const ref =   this.modal.create({
       nzContent: GeoComponent,
       nzComponentParams: {
         address : event.obj.geo
       },

      });

      ref.afterClose.subscribe((result => {
        console.log('afterClose' , result)
      }))


    }

  }

}
