import { EmployeeServicesService } from 'src/app/Services/employee-services.service';
import { Employeess } from './../../models/Employeess.1';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {
  allData:[];
  emp=new Employeess;
  constructor(private serv: EmployeeServicesService,private rout:Router) {
    this.serv.getv().subscribe((data: any) => {
      this.allData=data;
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
