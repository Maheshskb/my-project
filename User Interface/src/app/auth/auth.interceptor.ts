import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Router } from "@angular/router";

import { AdminService } from "../Business Services/Admin.service";
import { DealerSalesEnggService } from '../components/DealerSalesEngg Component/shared/dealer-sales-engg.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private userService : AdminService,private _DealerSalesEnggService:DealerSalesEnggService, private router : Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        if (req.headers.get('noauth'))
            return next.handle(req.clone());
        else {
            const clonedreq = req.clone({
                headers: req.headers.set("Authorization", "Bearer " + this.userService.getToken())
                
            });
            return next.handle(clonedreq).pipe(
                tap(
                    event => { },
                    err => {
                        if (err.error.auth == false) {
                            this.router.navigateByUrl('/login');
                            this.router.navigateByUrl('/DealerSalesEnggLogin')
                        }
                    })
            );
        }
    }
}