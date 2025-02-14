import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact'
import {CONTACTS} from '../data/contacts';

@Injectable({
  providedIn: 'root',
})

export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    this.contacts.push(contact)
  }

  GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((c) => c.id === id)
    return of(contact)
  }

}