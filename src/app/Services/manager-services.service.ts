import { HttpClient } from '@angular/common/http';
import { ApiServicesService } from 'src/app/Services/api-services.service';
import { Injectable } from '@angular/core';
import { Managers } from '../models/Managers';

@Injectable({
  providedIn: 'root'
})
export class ManagerServicesService extends ApiServicesService <Managers>{

  constructor(private https:HttpClient) {
    super("http://localhost:3000/Managers",https);
    }
}
