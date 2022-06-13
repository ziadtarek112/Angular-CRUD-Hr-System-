import { Employeess } from 'src/app/models/Employeess.1';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { EmployeeServicesService } from 'src/app/Services/employee-services.service';
@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {

  constructor(private serv : EmployeeServicesService, private rout: Router) { }
  emp = new Employeess;

  postManager(name, Dep, age, sal) {
    if (name.invalid || Dep.invalid || age.invalid || sal.invalid) {
      alert('Please Enter valid data');
      window.location.reload();
    }
    else {
      this.serv.postv(this.emp).subscribe(data => {
        this.rout.navigateByUrl('')
      })
    }
  }
    ngOnInit(): void {
    }
  }
  
