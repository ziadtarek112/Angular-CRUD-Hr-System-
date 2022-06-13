import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employeess } from 'src/app/models/Employeess.1';
import { ManagerServicesService } from 'src/app/Services/manager-services.service';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {
  allDataa:[];
  emp=new Employeess;
  constructor(private serv: ManagerServicesService,private rout:Router) { 
    this.serv.getv().subscribe((data: any) => {
      this.allDataa=data;
    })
  } 
  
  del(id){
    this.serv.deletev(id).subscribe(data=>{
      window.location.reload();
    })
  }

  ngOnInit(): void {
  }

}
