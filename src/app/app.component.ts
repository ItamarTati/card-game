import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public playerTurn: boolean = true
  public cardErenYeager = {
    Names: {
      English: 'Eren Yeager',
      Japanese: 'エレン・イェーガー',
      German: 'Eren Yēgā'
    },
    Species: ['Human', 'Intelligent Titan'],
    Age: 15,
    Form: {
      Human: {
        Height: '170 cm',
        AttackDamage: 10,
        Defence: 50,
        Stamina: 100,
        Agility: 25,
        Intelligence: 10,
        Luck: 100,
        health: 100
      },
      AttackTitans: {
        Height: '15 m',
        AttackDamage: 1000,
        Defence: 1000,
        Stamina: 10,
        Agility: 0,
        Intelligence: 10,
        Luck: 35,
        health: 1000
      }
    },
    Relatives: ['Grisha Yeager', 'Carla Yeager', 'Zeke Yeager',
      'Mr. Yeager', 'Mrs. Yeager', 'Faye Yeager'],
    Friends: ["Armin", "Mikasa", "Jean", "Connie", "Sasha"],
    LoveInterest: 'Mikasa',
    Birthday: 'March 30th',
    Birthplace: 'Shiganshina District',
    Residence: 'Wall Rose',
    Affiliations: ['Yeagerists', 'Survey Corps', 'Special Operations Squad',
      '104th Training Corps', 'Alpha Squad'],
    GradeRank: 5,
    Grade: 'A'
  }

  public cardPureTitan = {
    AttackDamage: 250,
    Defence: 50,
    Stamina: 10,
    Agility: 0,
    Intelligence: 0,
    Luck: 0,
    health: 250
  }

}
