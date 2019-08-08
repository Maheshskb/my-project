// built-in
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Toaster notification
import { ToastrModule } from 'ngx-toastr';
//angular stepper material
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
} from '@angular/material';


import { NgModule } from '@angular/core';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { FileSelectDirective } from 'ng2-file-upload';
import { RouterModule } from '@angular/router';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
// TEXT EDITOR 
import { RichTextEditorAllModule } from '@syncfusion/ej2-angular-richtexteditor';
// components
import { AppComponent } from './app.component';
//routes
import { appRoutes } from './routes';

import { AdminService } from './Business Services/Admin.service';
//other
import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductCURDComponent } from './components/admin/product-curd/product-curd.component';
import { PriceDetailsComponent } from './components/admin/price-details/price-details.component';
import { PraposalFormatComponent } from './components/admin/praposal-format/praposal-format.component';
import { DealerSalesEnggComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dealer-sales-engg.component';
import { DSESignUpComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dse-sign-up/dse-sign-up.component';
import { DseSignInComponent } from './components/DealerSalesEngg Component/dealer-sales-engg/dse-sign-in/dse-sign-in.component';
import { DealerSalesEnggDashboardComponent } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/dealer-sales-engg-dashboard.component';
import { DealerSalesEnggService } from './components/DealerSalesEngg Component/shared/dealer-sales-engg.service';
import { CustomerDetailsComponent } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/customer-details/customer-details.component';
import { RegistrationStep1Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step1/registration-step1.component';
import { RegistrationStep2Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step2/registration-step2.component';
import { RegistrationStep3Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step3/registration-step3.component';
import { RegistrationStep4Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step4/registration-step4.component';
import { RegistrationStep5Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step5/registration-step5.component';
import { RegistrationStep6Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step6/registration-step6.component';
import { RegistrationStep7Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step7/registration-step7.component';
import { RegistrationStep8Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step8/registration-step8.component';
import { RegistrationStep9Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step9/registration-step9.component';
import { HeaderComponent } from './components/admin/Common Components/header/header.component';
import { FooterComponent } from './components/admin/Common Components/footer/footer.component';

import { SalesManagerHOComponent} from './components/SalesManagerHo Component/sales-manager-ho/sales-manager-ho.component';
import { SMFooterComponent } from './components/SalesManagerHo Component/sales-manager-ho/Common Component/smfooter/smfooter.component';
import { SMHeaderComponent } from './components/SalesManagerHo Component/sales-manager-ho/Common Component/smheader/smheader.component';
import { ApprovalForNewDealerComponent } from './components/SalesManagerHo Component/sales-manager-ho/approval-for-new-dealer/approval-for-new-dealer.component';
import { ApprovalForPennarSalesEngineerComponent } from './components/SalesManagerHo Component/sales-manager-ho/approval-for-pennar-sales-engineer/approval-for-pennar-sales-engineer.component';
import { ListOfPennarSalesEngineerComponent } from './components/SalesManagerHo Component/sales-manager-ho/list-of-pennar-sales-engineer/list-of-pennar-sales-engineer.component';
import { ListOfDealersComponent } from './components/SalesManagerHo Component/sales-manager-ho/list-of-dealers/list-of-dealers.component';
import { DealerComponent } from './components/Dealer Component/dealer/dealer.component';
import { DmheaderComponent } from './components/Dealer Component/dealer/Common Component/dmheader/dmheader.component';
import { DmfooterComponent } from './components/Dealer Component/dealer/Common Component/dmfooter/dmfooter.component';
import { ListofsalesengineerComponent } from './components/Dealer Component/dealer/listofsalesengineer/listofsalesengineer.component';


import { RegistrationStep10Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step10/registration-step10.component';
import { RegistrationStep11Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step11/registration-step11.component';
import { RegistrationStep12Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step12/registration-step12.component';
import { RegistrationStep13Component } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/registration-step13/registration-step13.component'

import { CustomerListComponent } from './components/DealerSalesEngg Component/dealer-sales-engg-dashboard/customer-list/customer-list.component';
import { PennarSalesEnggDashboardComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/pennar-sales-engg-dashboard.component';
import { RegisterPennarSalesEnginnerComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/register-pennar-sales-enginner.component';
import { PseSignInComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/pse-sign-in/pse-sign-in.component';
import { PseSignUpComponent } from './components/PennarSalesEngg Component/register-pennar-sales-enginner/pse-sign-up/pse-sign-up.component';
import { RegisterDealerComponent } from './components/Dealer Component/register-dealer/register-dealer.component';
import { DealerSignInComponent } from './components/Dealer Component/register-dealer/dealer-sign-in/dealer-sign-in.component';
import { DealerSignUpComponent } from './components/Dealer Component/register-dealer/dealer-sign-up/dealer-sign-up.component';
import { AdminLoginComponent } from './components/admin/admin-login/admin-login.component';
import { AdminSignInComponent } from './components/admin/admin-login/admin-sign-in/admin-sign-in.component';
import { AdminSignUpComponent } from './components/admin/admin-login/admin-sign-up/admin-sign-up.component';
import { TowerDetailsComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/tower-details/tower-details.component';
import { MakeupWaterDetailsComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/makeup-water-details/makeup-water-details.component';
import { CirculatingWaterDetailsComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/circulating-water-details/circulating-water-details.component';
import { CustomerDataEntryScreenComponent } from './components/PennarSalesEngg Component/pennar-sales-engg-dashboard/customer-data-entry-screen/customer-data-entry-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdminComponent,
    ProductCURDComponent,
    PriceDetailsComponent,
    PraposalFormatComponent,
    FileSelectDirective,
    DealerSalesEnggComponent,
    DSESignUpComponent,
    DseSignInComponent,
    DealerSalesEnggDashboardComponent,
    CustomerDetailsComponent,
    RegistrationStep1Component,
    RegistrationStep2Component,
    RegistrationStep3Component,
    RegistrationStep4Component,
    RegistrationStep5Component,
    RegistrationStep6Component,
    RegistrationStep7Component,
    RegistrationStep8Component,
    RegistrationStep9Component,
    HeaderComponent,
    FooterComponent,

    SalesManagerHOComponent,
    SMFooterComponent,
    SMHeaderComponent,
    ApprovalForNewDealerComponent,
    ApprovalForPennarSalesEngineerComponent,
    ListOfPennarSalesEngineerComponent,
    ListOfDealersComponent,
    DealerComponent,
    DmheaderComponent,
    DmfooterComponent,
    ListofsalesengineerComponent,
    
   
    RegistrationStep10Component,
    RegistrationStep11Component,
    RegistrationStep12Component,
    RegistrationStep13Component,
    CustomerListComponent,
    PennarSalesEnggDashboardComponent,
    RegisterPennarSalesEnginnerComponent,
    PseSignInComponent,
    PseSignUpComponent,
    RegisterDealerComponent,
    DealerSignInComponent,
    DealerSignUpComponent,
    AdminLoginComponent,
    AdminSignInComponent,
    AdminSignUpComponent,
    TowerDetailsComponent,
    MakeupWaterDetailsComponent,
    CirculatingWaterDetailsComponent,
    CustomerDataEntryScreenComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    ToastrModule.forRoot({
      positionClass :'toast-top-center'
     
    }),
    HttpClientModule,
    RichTextEditorAllModule,
    MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatStepperModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule,
  MatTableModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,AdminService, [DealerSalesEnggService]],
  bootstrap: [AppComponent]
})
export class AppModule { }
