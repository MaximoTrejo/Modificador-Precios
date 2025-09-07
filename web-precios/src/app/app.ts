import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from "./pages/header/header";
import { Footer } from "./pages/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, RouterLink, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('web-precios');


}
