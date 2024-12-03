import { Component } from '@angular/core';

interface Affiliate {
  name: string;
  avatar: string;
  description: string;
  achievements: string;
}

@Component({
  selector: 'app-affiliates',
  templateUrl: './affiliates.component.html',
  styleUrls: ['./affiliates.component.css']
})
export class AffiliatesComponent {
  affiliates: Affiliate[] = [
    {
      name: 'Affiliate 1',
      avatar: 'assets/avatar1.png',
      description: 'Description for Affiliate 1',
      achievements: 'Achievements for Affiliate 1'
    },
    {
      name: 'Affiliate 2',
      avatar: 'assets/avatar2.png',
      description: 'Description for Affiliate 2',
      achievements: 'Achievements for Affiliate 2'
    },
    {
      name: 'Affiliate 3',
      avatar: 'assets/avatar3.png',
      description: 'Description for Affiliate 3',
      achievements: 'Achievements for Affiliate 3'
    }
  ];
  
  searchTerm: string = '';

  clearSearch() {
    this.searchTerm = '';
  }

  openWebsite(affiliate: Affiliate) {
    console.log('Opening website for', affiliate.name);
  }

  contact(affiliate: Affiliate) {
    console.log('Contacting', affiliate.name);
  }
}