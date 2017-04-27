import { Injectable } from '@angular/core';

interface IContact {
	name:string;
	number: string;
}

@Injectable()
export class ContactsService {

  constructor() { }

  getContacts(){
  	let contacts: IContact[] = [
  	{
  		name: 'Collins',
  		number: '0983567825'
  	},
  	{
  		name: 'Sarah',
  		number: '0233567825'
  	},
  	{
  		name: 'Francis',
  		number: '0633567825'
  	},
  	{
  		name: 'Lydia',
  		number: '025467825'
  	},
  	]
  	return contacts;
  }

}
