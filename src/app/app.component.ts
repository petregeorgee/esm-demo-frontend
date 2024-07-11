import { Component } from '@angular/core';
import { SortService } from './sort.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers: string = '';
  sortedNumbers: number[] | null = null;
  error: string | null = null;

  constructor(private sortService: SortService) { }

  onSubmit(): void {
    const numArray = this.numbers.split(',').map(num => parseInt(num.trim(), 10));
    this.sortService.sortNumbers(numArray).subscribe(
      (result) => {
        this.sortedNumbers = result;
        this.error = null;
      },
      (error) => {
        this.error = error.message;
        this.sortedNumbers = null;
      }
    );
  }
}
