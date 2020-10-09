/** nav bar details and redirecting pages based on the user roles. */
import { Component, OnDestroy, Inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../_nav';
// import { UserService } from './../services/user.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements OnInit, OnDestroy {

  navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  sideBarNav = [];

  constructor(
    @Inject(DOCUMENT) private document,
    // private userService: UserService,
    private router: Router, private ref: ChangeDetectorRef) {


    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });
    this.element = document.body;
    this.changes.observe(this.element, {
      attributes: true,
      attributeFilter: ['class']
    });
  }
/**
 * on destroy
 * destroy the component
 */
ngOnDestroy(): void {
    this.changes.disconnect();
  }

  /**
   * on init
   *  redirecting role based navigation
   */
  ngOnInit() {
      // this.user = this.userService.getUser();
        // const Items = this.roleBasedNavItems[this.user['role']];
        // let arr = []
        // navItems.forEach((nav, index) => {
        //   if (Items.indexOf(nav.name) !== -1) {
        //     arr.push(nav);
        //   }
        // });
        // this.navItems = arr
        // this.ref.detectChanges();

  }

  /**
   * Logouts default layout component
   * logout functionality implemented here.
   */
  logout() {
    // this.userService.logout().subscribe(
    //   (res) => {
    //     localStorage.removeItem('authentication_token');
    //   }
    // );
  }
}
