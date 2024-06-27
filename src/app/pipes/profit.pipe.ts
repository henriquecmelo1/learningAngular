import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "profit",
  standalone: true
})

export class ProfitPipe implements PipeTransform {
  transform(value: number, profitPercentage = 10): string { //10 = default -> profit: percentage
    return (value * profitPercentage / 100).toFixed(2); //toFixed(2) -> 2 decimal places
  }
}