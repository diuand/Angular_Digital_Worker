import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderHeightService {
  private navbarHeight!: number ;

  setNavbarHeight(height: number) {
    this.navbarHeight = height;
  }

  getNavbarHeight(): number {
    return this.navbarHeight;
  }
}
