import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // We will use this later
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  profile: any;
  posts: any[] = [];
  projects: any[] = [];
  projectsWithSafeUrls: any[] = [];

  constructor(private dataService: DataService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.dataService.getData().subscribe({
      next: data => {
        this.profile = data.profile;
        this.projects = data.projects;

         // Sanitize the URLs for projects with a YouTube video
        this.projectsWithSafeUrls = this.projects.map(project => {
        if (project.media_type === 'youtube') {
          return {
            ...project,
            media_url: this.sanitizer.bypassSecurityTrustResourceUrl(project.media_url)
          };
        }
        return project;
      });
      },
      error: err => console.error('Error fetching static data', err)
    });

    this.dataService.getDevtoPosts('vctrsmelo').subscribe({
      next: posts => {
        this.posts = posts.slice(0, 3);
        // console.log(posts)
      },
      error: err => console.error('Error fetching DEV.to posts', err)
    });
  }
}