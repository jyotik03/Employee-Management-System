import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  imports: [NgbCarouselModule, CommonModule] // ✅ Import CommonModule for *ngIf
})
export class HomeComponent {
  
  showContact: { [key: string]: boolean } = {};

  constructor(private router: Router) { }

  goToEmployeeList() {
    this.router.navigate(['/show-all-employees']);
  }

  toggleContactInfo(name: string) {
    this.showContact[name] = !this.showContact[name];
  }
}
