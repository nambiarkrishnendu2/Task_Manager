import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

interface ListItem {
  title: string;
  description: string;
}

interface Tournament {
  name: string;
  date: string;
}

@Component({
  selector: 'app-afterlogin',
  templateUrl: './afterlogin.component.html',
  styleUrls: ['./afterlogin.component.css']
})
export class AfterLoginComponent {
  listItems: ListItem[] = [
    { title: 'List Item 1', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
    { title: 'List Item 2', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
    { title: 'List Item 3', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
    { title: 'List Item 4', description: 'Supporting line text lorem ipsum dolor sit amet, consectetur.' },
  ];

  showTournaments = false;
  selectedTournamentType: 'past' | 'upcoming' | null = null;

  showRankings = false;
  selectedRankingType: 'state' | 'national' | null = null;

  pastTournaments: Tournament[] = [
    { name: 'Chess Masters 2023', date: 'December 15-20, 2023' },
    { name: 'Grand Prix 2023', date: 'November 1-5, 2023' },
  ];

  upcomingTournaments: Tournament[] = [
    { name: 'World Chess Championship 2024', date: 'May 1-15, 2024' },
    { name: 'Chess Olympiad 2024', date: 'August 1-14, 2024' },
  ];

  showProfileMenu = false;

  
  constructor(private router: Router) {}

  toggleTournaments() {
    this.showTournaments = !this.showTournaments;
    this.showRankings = false; }
  
  toggleRankings() {
    this.showRankings = !this.showRankings;
    this.showTournaments = false; 
  }

  selectTournamentType(type: 'past' | 'upcoming') {
    if (type === 'past') {
      this.router.navigate(['/past']);
    } else if (type === 'upcoming') {
      this.router.navigate(['/upcoming']); 
    }
    this.showTournaments = false; 
  }
 

  getTournaments(): Tournament[] {
    return this.selectedTournamentType === 'past' ? this.pastTournaments : this.upcomingTournaments;
  }

  toggleProfileMenu() {
    this.showProfileMenu = !this.showProfileMenu;
  }

  closeProfileMenu() {
    this.showProfileMenu = false;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const profileMenu = document.querySelector('.profile-dropdown');

   
    if (this.showProfileMenu && !profileMenu?.contains(target) && !target.closest('.profile-icon')) {
      this.closeProfileMenu();
    }
  }
}
