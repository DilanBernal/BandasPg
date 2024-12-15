import { Component } from '@angular/core';
import { LogoComponent } from "./logo/logo.component";
import { AuthComponent } from "./auth/auth.component";
import { NavLinksComponent } from "../nav-links/nav-links.component";

@Component({
  selector: 'app-header',
  imports: [LogoComponent, AuthComponent, NavLinksComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
