import { Injectable } from '@angular/core';
import { Consumer } from '../Models/Consumer';

@Injectable({
  providedIn: 'root'
})
export class ConsumerService {

  // local storage for the list of consumers
  private consumerList: Consumer[] = [
    new Consumer(1, 'bob@bob.com', '+12345678910', 'bob')
  ];

  // service method to find a consumer
  getConsumer(consumerEmail: string){
    return this.consumerList.find(consumer => consumer.email === consumerEmail);
  }

  // service method to update a consumer
  updateConsumer(consumer: Consumer){
    const consumerToUpdate = this.consumerList.find(consumerIterator => consumerIterator.id === consumer.id);

    if(consumerToUpdate !== null){
      consumerToUpdate.email = consumer.email;
      consumerToUpdate.phoneNumber = consumer.phoneNumber;
      consumerToUpdate.email = consumer.email;
    }
  }

  // service method to create a consumer
  createConsumer(consumerEmail: string, consumerPhoneNumber: string, consumerUsername: string){
    this.consumerList.push(new Consumer(this.consumerList.length + 1, consumerEmail, consumerPhoneNumber, consumerUsername));
  }

  // service method to delete a consumer
  deleteConsumer(consumerToDelete: Consumer){
    this.consumerList.splice(this.consumerList.indexOf(consumerToDelete), 1);
  }
}
