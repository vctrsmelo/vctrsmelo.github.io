import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { DataService } from '../../data.service';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';

declare function fetchDevtoPosts(): Promise<any[]>;

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

  constructor(private dataService: DataService, private sanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId: Object) { }

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

    if (isPlatformBrowser(this.platformId)) {
      fetchDevtoPosts().then(posts => {
        this.posts = posts;
      });
    }
  }
}