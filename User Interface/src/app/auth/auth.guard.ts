import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from "../Business Services/Admin.service";
import { DealerSalesEnggService} from '../components/DealerSalesEngg Component/shared/dealer-sales-engg.service';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService : AdminService,private router : Router, private _DealerSalesEnggService :DealerSalesEnggService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (!this.userService.isLoggedIn()) {
        this.router.navigateByUrl('/login');
        this.userService.deleteToken();
        this.router.navigateByUrl('/DealerSalesEnggLogin');
       this._DealerSalesEnggService.deleteToken();
        return false;
      }
    return true;
  }
}
