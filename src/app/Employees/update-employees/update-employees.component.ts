import { EmployeeServicesService } from 'src/app/Services/employee-services.service';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employeess } from 'src/app/models/Employeess.1';
import { ApiServicesService } from 'src/app/Services/api-services.service';

@Component({
  selector: 'app-update-employees',
  templateUrl: './update-employees.component.html',
  styleUrls: ['./update-employees.component.css']
})
export class UpdateEmployeesComponent {
  id;
  emp = new Employeess;

  constructor(private serv: EmployeeServicesService, private rout: Router, private arout: ActivatedRoute) {
        this.id=this.arout.snapshot.paramMap.get('id');
        this.serv.getById(this.id).subscribe((data:any)=>{
          this.emp=data;
        })
  }




  updateEmployee(name, Dep, age, sal) {
    if (name.invalid || Dep.invalid || age.invalid || sal.invalid) {
      alert('Please Enter valid data');
      window.location.reload();
    }
    else {
      this.serv.editv(this.id, this.emp).subscribe(data => {
        this.rout.navigateByUrl('lEmployee')
      })
    }
  }
  ngOnInit(): void {
  }
}

