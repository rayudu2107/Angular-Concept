import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { from, fromEvent, interval, merge, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, mergeMap, pluck, skip, startWith, switchMap, take, tap } from 'rxjs/operators';

@Component({
  selector: 'app-operator',
  standalone: true,
  imports: [],
  templateUrl: './operator.component.html',
  styleUrl: './operator.component.scss'
})
export class OperatorComponent implements OnInit, AfterViewInit {

  @ViewChild('btn') buttonElement!: ElementRef<HTMLButtonElement>;
  @ViewChild('mobile') mobileElement!: ElementRef<HTMLInputElement>;
  @ViewChild('name') nameElement!: ElementRef<HTMLInputElement>;

  constructor() {}

  ngOnInit(): void {
    // **CREATION OPERATORS**
    const obs1 = of(1, 2, 3,3, 4, 5);
    const obs2 = from(['A', 'B', 'C', 'D']);
    const obs3 = interval(1000).pipe(take(5));

    // obs1.subscribe(data => console.log("of:", data));
    // obs2.subscribe(data => console.log("from:", data));
    // obs3.subscribe(data => console.log("interval:", data));

    // **FILTERING OPERATORS**
    obs1.pipe(filter(value => value > 2)).subscribe(data => console.log("filter:", data));
    obs1.pipe(distinctUntilChanged()).subscribe(data => console.log("distinctUntilChanged:", data));
    obs1.pipe(skip(2)).subscribe(data => console.log("skip:", data));

    // **TRANSFORMATION OPERATORS**
    obs1.pipe(map(value => value * 10)).subscribe(data => console.log("map:", data));

    const userObservable = from([
      { id: 1, name: 'John', address: { city: 'New York' } },
      { id: 2, name: 'Jane', address: { city: 'Los Angeles' } }
    ]);

    userObservable.pipe(pluck('address', 'city')).subscribe(data => console.log("pluck:", data));

    // **COMBINATION OPERATORS**
    merge(obs1, obs2).subscribe(data => console.log("merge:", data));

    // **UTILITY OPERATORS**
    obs1.pipe(
      tap(value => console.log("Before map:", value)),
      map(value => value * 2),
      tap(value => console.log("After map:", value))
    ).subscribe();
  }

  ngAfterViewInit(): void {
    if (!this.mobileElement) return;

    fromEvent(this.mobileElement.nativeElement, 'keyup').pipe(
      debounceTime(5000)
    ).subscribe(event => {
      const inputElement = event.target as HTMLInputElement; 
      console.log("debounceTime:", inputElement.value);
    });
  }
}
// Operators Used in the Code
// Operator	Category	Description
// of()	Creation	Emits values synchronously
// from()	Creation	Converts an array into an observable
// interval()	Creation	Emits values at a set interval
// take(n)	Filtering	Takes only the first n values
// filter()	Filtering	Filters values based on a condition
// distinctUntilChanged()	Filtering	Removes consecutive duplicate values
// skip(n)	Filtering	Skips first n values
// map()	Transformation	Modifies emitted values
// pluck()	Transformation	Extracts a specific property
// merge()	Combination	Merges multiple observables
// tap()	Utility	Performs side effects like logging
// fromEvent()	Event Handling	Converts DOM events into observables
// debounceTime()	Utility	Waits for a pause before emitting