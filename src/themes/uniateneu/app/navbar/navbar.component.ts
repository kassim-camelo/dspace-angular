import { Component } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavbarComponent as BaseComponent } from '../../../../app/navbar/navbar.component';
import { slideMobileNav } from '../../../../app/shared/animations/slide';

/**
 * Component representing the public navbar
 */
@Component({
  selector: 'ds-navbar',
  styleUrls: ['./navbar.component.scss'],
  templateUrl: './navbar.component.html',
  animations: [slideMobileNav]
})
export class NavbarComponent extends BaseComponent {
  menuCollapsed = new BehaviorSubject(true);
  toggleSideMenu(){
    this.menuCollapsed.next(!this.menuCollapsed.getValue());
  }
}
