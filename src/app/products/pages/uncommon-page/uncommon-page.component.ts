import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = 'Godfrey';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient(): void{
    this.name = 'Melina';
    this.gender = 'female'
  }

  //i18n Plurar
  public clients: string[] = ['Ranni','Melina','Radahn','Radagon','Malenia','Miquella','Maliketh'];
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos 1 cliente esperando.',
    '=2': 'tenemos 2 clientes.',
    'other': 'tenemos # clientes esperando.',
  }

  deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Ranni',
    age: 300000,
    address: 'Liurnia'
  }

  // Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('Tap: ',value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('Tenemos data en la promesa');
      console.log('Tenemos data');
      this.person.name = 'Otro Nombre'
    }, 3500);
  })

}
