import { Component } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent {
  userTurn = true
  showDropdown = false;

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  kidnapper1 = {
    attack: 7,
    health: 10
  }
  kidnapper2 = {
    attack: 7,
    health: 10
  }
  kidnapper3 = {
    attack: 7,
    health: 20
  }
  eren = {
    attack: 3,
    health: 15,
    energy: 10,
    fear: 0
  }
  mikasa = {
    attack: 3,
    health: 15, 
    energy: 10,
    fear: 100
  }

  attackKidnapper1() {
    if(this.eren.energy < 10) {
      console.log('eren is tired')
    } 
    else {
    this.kidnapper1.health = this.kidnapper1.health - 3
    this.eren.energy = this.eren.energy -10
    }
  }

  attackKidnapper2() {
    this.kidnapper2.health = this.kidnapper2.health - 3
    this.eren.energy = this.eren.energy -10
  }

  attackKidnapper3() {
    this.kidnapper3.health = this.kidnapper3.health - 3
    this.eren.energy = this.eren.energy -10
  }

  endTurn() {
    this.eren.energy = 10
    this.userTurn = false
    this.enemyTurn()
  }

  enemyTurn() {
    this.attackEren()
  } 

  attackEren() {
    this.eren.health = this.eren.health - this.kidnapper1.attack
  }

}
