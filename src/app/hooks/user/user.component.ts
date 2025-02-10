import { AfterContentChecked, AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent implements AfterContentInit, AfterContentChecked {

  @ContentChild('userContent', { static: false }) userContent!: ElementRef;

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Projected content initialized!');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content inside <ng-content> checked!');
  }
}