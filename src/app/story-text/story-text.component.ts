import { Component } from '@angular/core';

@Component({
  selector: 'app-story-text',
  templateUrl: './story-text.component.html',
  styleUrls: ['./story-text.component.scss']
})
export class StoryTextComponent {
  public storyText: Array<string> = [
    "Once upon a time in the mystical land of Eldoria, a young hero named Arin embarked on an extraordinary adventure. Armed with a deck of enchanted cards, Arin ventured into the treacherous Forest of Whispers, in search of the legendary Lost Temple.",
    "As Arin ventured deeper into the Forest of Whispers, an eerie silence fell upon the ancient trees. Shadows danced around him, and a soft whispering voice beckoned him forward. He followed the mysterious voice, card in hand, ready for any challenge that lay ahead.",
    "Suddenly, a pack of fearsome wolves emerged from the thick underbrush, their eyes gleaming with hunger. Without hesitation, Arin swiftly drew a card from his deck and summoned a powerful fire spirit. Flames erupted from the ground, engulfing the wolves in a blazing inferno. As the smoke cleared, Arin continued his journey, undeterred by the danger.",
    "As he pushed deeper into the forest, Arin stumbled upon an ancient stone door, covered in mysterious runes. Remembering a clue he had discovered earlier, he arranged his cards in a specific sequence, unlocking the hidden door. Inside, he discovered a hidden chamber filled with sparkling treasures and a map leading to the Lost Temple.",
    "Arin's heart pounded with excitement as he realized he was one step closer to his goal. With renewed determination, he set off towards the treacherous Misty Mountains, a dangerous path that stood between him and the fabled Lost Temple.",
    "The Misty Mountains loomed before Arin, shrouded in a thick blanket of fog. The air grew colder, and every step felt heavier as he ascended higher into the jagged peaks. Suddenly, an avalanche thundered down the mountainside, blocking his path. Thinking quickly, Arin drew a card depicting a mighty windstorm. With a swift gesture, he summoned gusts of wind that cleared the path, allowing him to continue his perilous journey.",
    "As he ventured further into the mountains, Arin found himself face-to-face with a colossal ice giant. Towering above him, the giant swung its massive fists, threatening to crush him. Undeterred, Arin played his card of an ancient golem, which sprang to life, matching the giant's strength blow for blow. With a final, decisive strike, Arin shattered the giant into a thousand icy fragments.",
    "Exhausted but determined, Arin reached the summit of the Misty Mountains. Before him lay a vast expanse of rolling clouds, hiding the Lost Temple from mortal eyes. Consulting the map, he carefully deciphered the clues, finding a hidden path that led him through the sky. Floating among the clouds, Arin marveled at the ethereal beauty around him as he moved closer to his final destination.",
    "With the strings of destiny guiding his every move, Arin descended from the heavens and found himself standing before the magnificent gates of the Lost Temple. The ancient structure pulsed with untold power, its secrets waiting to be revealed. With his deck of enchanted cards at the ready, Arin took a deep breath and stepped forward, ready to face the ultimate challenge that awaited him within the temple's hallowed halls.",
    "And so, dear adventurer, the story of Arin's thrilling journey to the Lost Temple comes to an end, yet his legend lives on in the hearts of those who dare to follow in his footsteps and embrace the power of the cards. Are you ready to embark on your own extraordinary adventure? The choice is yours."
  ];

  public selectedText: string = this.storyText[0]

}
