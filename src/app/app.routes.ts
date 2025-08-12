import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./features/home/home.component').then(m => m.HomeComponent),
    title: 'Moaz Ali - Home'
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/about.component').then(m => m.AboutComponent),
    title: 'Moaz Ali - About'
  },
  {
    path: 'projects',
    loadComponent: () => import('./features/projects/projects.component').then(m => m.ProjectsComponent),
    title: 'Moaz Ali - Projects'
  },
  {
    path: 'skills',
    loadComponent: () => import('./features/skills/skills.component').then(m => m.SkillsComponent),
    title: 'Moaz Ali - Skills'
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent),
    title: 'Moaz Ali - Contact'
  },
  {
    path: 'blog',
    loadComponent: () => import('./features/blog/blog.component').then(m => m.BlogComponent),
    title: 'Moaz Ali - Blog'
  },
  {
    path: 'blog/:slug',
    loadComponent: () => import('./features/blog/blog-post/blog-post.component').then(m => m.BlogPostComponent),
    title: 'Moaz Ali - Blog Post'
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
