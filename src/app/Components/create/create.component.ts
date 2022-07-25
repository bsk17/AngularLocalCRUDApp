import { Component, OnInit } from '@angular/core';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private consumerService: ConsumerService) { }

  consumerEmail: string;
  consumerUsername: string;
  consumerPhoneNumber: string;

  saveConsumer(){
    if (this.validFields()){
      this.consumerService.createConsumer(this.consumerEmail, this.consumerPhoneNumber, this.consumerUsername);
    }
  }

  private validFields(): boolean{
    return (this.consumerEmail.length > 0 && this.consumerPhoneNumber.length > 0 && this.consumerUsername.length > 0);
  }

  ngOnInit(): void {
  }

}
