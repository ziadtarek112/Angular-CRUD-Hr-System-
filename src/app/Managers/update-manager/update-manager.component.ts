import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Employeess } from 'src/app/models/Employeess.1';
import { Managers } from 'src/app/models/Managers';
import { EmployeeServicesService } from 'src/app/Services/employee-services.service';
import { ManagerServicesService } from 'src/app/Services/manager-services.service';

@Component({
  selector: 'app-update-manager',
  templateUrl: './update-manager.component.html',
  styleUrls: ['./update-manager.component.css']
})
export class UpdateManagerComponent implements OnInit {


    id;
    man = new Managers;
  

  constructor(private serv: ManagerServicesService, private rout: Router, private arout: ActivatedRoute) { 
    this.id=this.arout.snapshot.paramMap.get('id');
    this.serv.getById(this.id).subscribe((data:any)=>{
      this.man=data;
    })
  }
  updateManager(name, Dep, age, sal) {
    if (name.invalid || Dep.invalid || age.invalid || sal.invalid) {
      alert('Please Enter valid data');
      window.location.reload();
    }
    else {
      this.serv.editv(this.id, this.man).subscribe(data => {
        this.rout.navigateByUrl('lEmployee')
      })
    }
  }

  ngOnInit(): void {
  }

}
