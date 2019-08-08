import { Routes } from '@angular/router';

import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminSignInComponent } from './components/admin/admin-login/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './components/admin/admin-login/admin-sign-up/admin-sign-up.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
// import { AuthGuard} from './components/DealerSalesEngg Component/auth/auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
// import { ProductDetails } from './components/admin/shared/product-details.model';
import { ProductCURDComponent } from './components/admin/product-curd/product-curd.component';
import { PriceDetailsComponent } from './components/admin/price-details/price-details.component';
import { PraposalFormatComponent } from './components/admin/praposal-format/praposal-format.component';

//Dealer Sales Engineer//
import { DSESignUpComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dse-sign-up/dse-sign-up.component';
import { DealerSalesEnggComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dealer-sales-engg.component';
import { DseSignInComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dse-sign-in/dse-sign-in.component';
import { DealerSalesEnggDashboardComponent } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/dealer-sales-engg-dashboard.component';
import { CustomerDetailsComponent } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/customer-details/customer-details.component';


//Sales Manager Ho//
import { SalesManagerHOComponent } from './components/SalesManagerHo Component/sales-manager-ho/sales-manager-ho.component';
import { ApprovalForNewDealerComponent } from './components/SalesManagerHo Component/sales-manager-ho/approval-for-new-dealer/approval-for-new-dealer.component';
import {ApprovalForPennarSalesEngineerComponent } from './components/SalesManagerHo Component/sales-manager-ho/approval-for-pennar-sales-engineer/approval-for-pennar-sales-engineer.component';
import { ListOfPennarSalesEngineerComponent } from './components/SalesManagerHo Component/sales-manager-ho/list-of-pennar-sales-engineer/list-of-pennar-sales-engineer.component';
import { ListOfDealersComponent } from './components/SalesManagerHo Component/sales-manager-ho/list-of-dealers/list-of-dealers.component';

// Dealer //
import { RegisterDealerComponent } from './components/Dealer Component/register-dealer/register-dealer.component';
import { DealerSignUpComponent } from './components/Dealer Component/register-dealer/dealer-sign-up/dealer-sign-up.component';
import { DealerSignInComponent } from './components/Dealer Component/register-dealer/dealer-sign-in/dealer-sign-in.component';
import {DealerComponent} from './components/Dealer Component/dealer/dealer.component';
import{ ListofsalesengineerComponent } from './components/Dealer Component/dealer/listofsalesengineer/listofsalesengineer.component';


import { from } from 'rxjs';
//Pennar Sales Engineer components//

//import { PennarSalesEngineerComponent } from './components/PennarSalesEngg Component/pennar-sales-engineer/pennar-sales-engineer.component';
import { RegisterPennarSalesEnginnerComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/register-pennar-sales-enginner.component';
//import { PSESignInComponent } from './components/PennarSalesEngg Component/pennar-sales-engineer/pse-sign-in/pse-sign-in.component';
//import { PSESignUpComponent } from './components/PennarSalesEngg Component/pennar-sales-engineer/pse-sign-up/pse-sign-up.component';
import { PennarSalesEnggDashboardComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/pennar-sales-engg-dashboard.component';
import { PseSignUpComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/pse-sign-up/pse-sign-up.component';
import { PseSignInComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/pse-sign-in/pse-sign-in.component';
import { TowerDetailsComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/tower-details/tower-details.component';
import { MakeupWaterDetailsComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/makeup-water-details/makeup-water-details.component';
import { CirculatingWaterDetailsComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/circulating-water-details/circulating-water-details.component';
import { CustomerDataEntryScreenComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/customer-data-entry-screen/customer-data-entry-screen.component';

export const appRoutes: Routes = [
    //Admin Routes
    // {
    //     path: 'signup', component: UserComponent,
    //     children: [{ path: '', component: SignUpComponent }]
    // },
    {
        path: 'Admin-sign-up', component: AdminLoginComponent,
        children: [{ path: '', component: AdminSignUpComponent }]
    },
    // {
    //     path: 'login', component: UserComponent,
    //     children: [{ path: '', component: SignInComponent }]
    // },

    {
        path: 'Admin-login', component: AdminLoginComponent,
        children: [{ path: '', component: AdminSignInComponent }]
    },
    {
        path: 'adminDashboard', component: AdminComponent, canActivate: [AuthGuard],
    },
    {
        path: 'productDetails' , component: ProductCURDComponent, canActivate: [AuthGuard],
    },
    {
        path: 'priceDetails' , component: PriceDetailsComponent, canActivate: [AuthGuard],
    },
    {
        path: 'praposal-format' , component: PraposalFormatComponent, canActivate: [AuthGuard],
    },
    {
        path: 'home' , component: NavbarComponent
    },
    {
        path: '', redirectTo: '/home' , pathMatch: 'full'
    },
    // Sales manager ho //

    {
        path: 'approval-for-new-dealer' , component: ApprovalForNewDealerComponent, canActivate: [AuthGuard],
    },
    {
        path: 'pennar-sales-engg-approval' , component: ApprovalForPennarSalesEngineerComponent, canActivate: [AuthGuard],
    },
    {
        path: 'list-of-pennar-sales-engineer' , component: ListOfPennarSalesEngineerComponent, canActivate: [AuthGuard],
    },
    {
        path: 'list-of-dealers' , component: ListOfDealersComponent, canActivate: [AuthGuard],
    },
    {
        path: 'SalesManagerHo', component: SalesManagerHOComponent
    },


    // Dealer Sales Engineer Routes
    {
        path: 'DealerSalesEnggSignup', component: DealerSalesEnggComponent,
        children: [{ path: '', component:  DSESignUpComponent}]
    },
    {
        path: 'ApprovalForNewDealerComponent', component: ApprovalForNewDealerComponent,
        children: [{ path: '', component: DseSignInComponent}]
    },
    {
        path: 'ApprovalForPennarSalesEngineerComponent', component: ApprovalForPennarSalesEngineerComponent,
        children: [{ path: '', component: DseSignInComponent}]
    },

    {
        path: 'ListOfPennarSalesEngineerComponent', component: ListOfPennarSalesEngineerComponent,
        children: [{ path: '', component: DseSignInComponent}]
    },

    {
        path: 'ListOfDealersComponent', component: ListOfDealersComponent,
        children: [{ path: '', component: DseSignInComponent}]
    },

    // Pennar sales engg routes
   
    {
        path: 'DealerSalesEnggLogin', component: DealerSalesEnggComponent,
        children: [{ path: '', component: DseSignInComponent}]
    },
    {
        path: 'DealerSalesEnggDashboard', component: DealerSalesEnggDashboardComponent, canActivate: [AuthGuard]

    },
    {
        path: 'customerDetails' , component: CustomerDetailsComponent
    },

    // Dealers // 
    {
        path: 'Dealer-Sign-Up', component: RegisterDealerComponent,
        children: [{ path: '', component: DealerSignUpComponent }]
    },
    {
        path: 'Dealer-Login', component: RegisterDealerComponent,
        children: [{ path: '', component: DealerSignInComponent }]
    },
    {
        path: 'DealerComponent', component: DealerComponent
    },

    {
        path: 'ListofsalesengineerComponent', component: ListofsalesengineerComponent,
        children: [{ path: '', component: DseSignInComponent}]
    },

    //Pennar Sales Engineer Routes//
    
     {
         path: 'Pennar-Sales-Engineer-SignUp', component: RegisterPennarSalesEnginnerComponent,
         children: [{ path: '', component: PseSignUpComponent }]
     },
     {
         path: 'Pennar-Sales-Engineer-Login', component: RegisterPennarSalesEnginnerComponent,
         children: [{ path: '', component: PseSignInComponent }]
     },
    //  {
    //      path: 'PennarSalesEnggDashboard', component: PennarSalesEnggDashboardComponent,canActivate:[AuthGuard],
       
    // }
    {
        path: 'PennarSalesEnggDashboard', component: PennarSalesEnggDashboardComponent,
        children: [
            { path: 'red-pill', component: TowerDetailsComponent}]
        // children: [{ path: 'PennarSalesEnggDashboard/Tower-Details', component: TowerDetailsComponent }]
   },
   {path: 'Tower-Details', component:TowerDetailsComponent   },
   {path:'Makeup-Water-Details', component:MakeupWaterDetailsComponent},
   {path:'Circulating-Water-Details', component:CirculatingWaterDetailsComponent},
   {path:'Customer-Data-Entry-Screen', component:CustomerDataEntryScreenComponent}

];
