import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DatabindingComponent } from "./databinding/databinding.component";
import { DirectivesComponent } from "./directives/directives.component";
import { PipeComponent } from "./pipes/pipe/pipe.component";
import { ComponentCommunicationComponent } from "./component-communication/component-communication/component-communication.component";
import { HeaderComponent } from "./router/header/header.component";
import { CommonModule } from '@angular/common';
import { ProductComponent } from "./http-apicalls/product/product.component";
import { TemplateDrivenComponent } from "./Template-Driven-From/template-driven/template-driven.component";
import { ReactiveFormsComponent } from "./Reactive-Forms/reactive-forms/reactive-forms.component";
import { FormsModule } from '@angular/forms';

import { HomeComponent } from "../../../ngrx/src/app/components/home/home.component";
import { OnchagesOnInitComponent } from "./hooks/onchages-on-init/onchages-on-init.component";
import { NgdocheackComponent } from "./hooks/ngdocheack/ngdocheack.component";
import { ProducComponent } from "./hooks/produc/produc.component";
import { UserComponent } from "./hooks/user/user.component";
import { TestComponent } from "./hooks/test/test.component";
import { ObservableComponent } from "./Observable/observable/observable.component";
import { TodofComponent } from "./subjects/todof/todof.component";
import { TodolComponent } from "./subjects/todol/todol.component";
import { ChatComponent } from "./subjects/chat/chat.component";
import { AuthComponent } from "./subjects/auth/auth.component";
import { NotificationsComponent } from "./subjects/notifications/notifications.component";
import { DataComponent } from "./subjects/data/data.component";
import { OperatorComponent } from "./Operators/operator/operator.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, DatabindingComponent, DirectivesComponent, PipeComponent, ComponentCommunicationComponent, HeaderComponent, RouterModule, ProductComponent, TemplateDrivenComponent, ReactiveFormsComponent, FormsModule, HomeComponent, OnchagesOnInitComponent, NgdocheackComponent, ProducComponent, UserComponent, TestComponent, ObservableComponent, TodofComponent, TodolComponent, ChatComponent, AuthComponent, NotificationsComponent, DataComponent, OperatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular-Concept';
  userName = 'Anil';
  wish: string = ''; 
   count: number = 0;

  increaseCount() {
    this.count++;
  }

  decreaseCount() {
    this.count--;
  }
    // ngdocheak
   mobile = "";
  mList = [
    "OPPO",
    "GOOGLE",
    "LENVO",
    "IQOO",
    "VIVO"
  ]

 addMobile() {
    if (this.mobile.trim()) {
      // Using spread operator to trigger change detection
      this.mList = [...this.mList, this.mobile]; 
      this.mobile = ""; // Clear input field after adding
    }
  }

   changeUserName() {
    this.userName = this.userName === 'Anil' ? 'Haresh' : 'Anil';
  }
  showComponent = true;

  toggleComponent() {
    this.showComponent = !this.showComponent;
  }
}
