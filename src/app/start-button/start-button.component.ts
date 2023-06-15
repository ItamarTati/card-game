import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent {
  constructor(private router: Router) {}

  redirectToStory() {
    this.router.navigate(['/story']);
  }
}
