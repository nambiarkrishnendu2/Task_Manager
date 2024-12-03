import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface ListItem {
  title: string;
  description: string;
}

interface Task {
  title: string;
  dueDate: string;
}

interface Project {
  name: string;
  deadline: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Announcements or notifications
  listItems: ListItem[] = [
    {
      title: 'New Feature Released',
      description: 'We have introduced task automation. Check it out!',
    },
    {
      title: 'Project Deadline Reminder',
      description: 'The deadline for Project Alpha is approaching on November 20.',
    },
    {
      title: 'Maintenance Update',
      description: 'System maintenance scheduled for this weekend.',
    },
    {
      title: 'Team Collaboration Tips',
      description: 'Learn how to collaborate better with our new guide.',
    },
  ];

  constructor(private router: Router) {}

  // State for toggling views
  showTasks = false;
  showProjects = false;

  // Sample tasks and projects
  tasks: Task[] = [
    { title: 'Complete Design Document', dueDate: 'November 15, 2024' },
    { title: 'Finish Code Review', dueDate: 'November 18, 2024' },
    { title: 'Prepare Presentation Slides', dueDate: 'November 20, 2024' },
  ];

  projects: Project[] = [
    { name: 'Project Alpha', deadline: 'November 30, 2024' },
    { name: 'Project Beta', deadline: 'December 15, 2024' },
  ];

  // Toggle between task and project views
  toggleTasks() {
    this.showTasks = !this.showTasks;
    if (this.showTasks) {
      this.showProjects = false;
    }
  }

  toggleProjects() {
    this.showProjects = !this.showProjects;
    if (this.showProjects) {
      this.showTasks = false;
    }
  }

  // Navigation methods
  viewTaskDetails(taskTitle: string) {
    this.router.navigate(['/tasks', taskTitle]);
  }

  viewProjectDetails(projectName: string) {
    this.router.navigate(['/projects', projectName]);
  }

  // Get list of tasks or projects based on the current selection
  getList() {
    return this.showTasks ? this.tasks : this.projects;
  }
}
