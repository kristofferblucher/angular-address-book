import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Injectable } from '@angular/core';
import { Contact } from 'src/app/models/contact';


@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];
  constructor(private readonly contactService: ContactsService) {
    this.contacts = this.contactService.contacts;
  }
}
