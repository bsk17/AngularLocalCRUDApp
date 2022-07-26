import { Component, OnInit } from '@angular/core';
import { Consumer } from 'src/app/Models/Consumer';
import { ConsumerService } from 'src/app/Services/consumer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  viewingConsumer: Consumer;
  toSearchConsumerEmail: string;

  searchConsumer(){
    if (this.toSearchConsumerEmail.length > 0){
      this.viewingConsumer = this.consumerService.getConsumer(this.toSearchConsumerEmail);
    } 
  }

  constructor(private consumerService: ConsumerService) { }

  ngOnInit(): void {
  }

}
