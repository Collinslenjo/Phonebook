import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material'

import { ContactsService } from '../contacts.service'

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
contacts:any[];
  constructor(
  	private ContactsService: ContactsService,
  	public dialog:MdDialog
  	) { }

  ngOnInit() {
  	this.contacts = this.ContactsService.getContacts();
  }

  add() {
  	let dialogRef = this.dialog.open(AddContactDialog);
  }

}
