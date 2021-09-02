import { Component, OnInit } from '@angular/core';
import { faAddressCard,faAddressBook,faBoxOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  faAddress = faAddressCard;
  faAddressBook=faAddressBook;
  faBoxOpen=faBoxOpen;

}
