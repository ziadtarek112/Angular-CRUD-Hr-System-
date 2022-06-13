import { Employeess } from 'src/app/models/Employeess.1';
import { HttpClient } from '@angular/common/http';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServicesService extends ApiServicesService<Employeess>{

  constructor(private https: HttpClient) {
    super("http://localhost:3000/Employees",https);
  }
}
