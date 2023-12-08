import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [CommonModule, SlickCarouselModule]
})
export class HomeComponent {
  slides = [
    {
      img: 'assets/images/scine.png',
      caption: "In a world where innovation meets compassion, a brilliant rubber duck scientist tirelessly works in the lab, crafting groundbreaking medicines. This little hero in a lab coat symbolizes the relentless pursuit of medical breakthroughs that could change lives"  
    },

    {
      img: 'assets/images/aliens.png',
      caption: "Amidst a chaotic alien invasion, a courageous rubber duck stands as humanity's unlikely defender. Armed with bravery and futuristic weaponry, this duck showcases the extraordinary feats we can achieve when we fight for our planet."  
    },

    {
      img: 'assets/images/cat.png',
      caption: "On vast cotton fields, hundreds of diligent rubber ducks take on the role of farmers, tending to the crops with care and precision. This scene represents how, in unity, we can create sustainable practices and foster a harmonious relationship with nature."  
    },
    {
      img: 'assets/images/plant.png',
      caption: "With unwavering courage and a fire hose at the ready, a heroic rubber duck firefighter bravely rescues a kitten stuck in a tree. This inspiring figure epitomizes the selfless acts of bravery that keep our communities safe and cared for."  
    },

    {
      img: 'assets/images/help.png',
      caption: "In the quiet corridors of care homes, a compassionate rubber duck provides comfort and support to the elderly and sick. This tender scene captures the essence of empathy and care that enriches our society and the lives of those in need."  
    },

  ];

  slideConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "dots": true,
    "infinite": true,
    "autoplay": true,
    "autoplaySpeed": 2000,
    "arrows": true
  };
}
