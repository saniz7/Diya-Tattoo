import { Component, signal } from '@angular/core';
import { Home } from './home/home';
import { Navbar } from './navbar/navbar';
import { Footer } from './footer/footer';
import { AboutMe } from './about-me/about-me';
import { RecentWorks } from './recent-works/recent-works';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root',
  imports: [Home, Navbar, Footer, AboutMe, RecentWorks, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('diya-tattoo');
}
