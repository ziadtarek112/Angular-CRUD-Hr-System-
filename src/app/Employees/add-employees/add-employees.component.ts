import { EmployeeServicesService } from 'src/app/Services/employee-services.service';

import { ApiServicesService } from './../../Services/api-services.service';
import { Component, OnInit } from '@angular/core';
import { Employeess } from 'src/app/models/Employeess.1';
import { Router } from '@angular/router';
import { DepFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-employees',
  templateUrl: './add-employees.component.html',
  styleUrls: ['./add-employees.component.css']
})
export class AddEmployeesComponent implements OnInit {
  emp = new Employeess;
  constructor(private serv: EmployeeServicesService, private rout: Router) { }


  postEmployee(name, Dep, age, sal) {
    if (name.invalid || Dep.invalid || age.invalid || sal.invalid) {
      alert('Please Enter valid data');
      window.location.reload();
    }
    else {
      this.serv.postv(this.emp).subscribe(data => {
        this.rout.navigateByUrl('lEmployee')
      })
    }
  }

  ngOnInit(): void {
  }

}
