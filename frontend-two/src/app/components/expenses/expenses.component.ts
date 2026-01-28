import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { IExpense } from '../../model/expense-model';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css',
})
export class ExpensesComponent implements OnInit {
  expenseCollection!: Array<IExpense>;

  constructor(private service: ExpenseService) {}

  ngOnInit(): void {
    this.service
      .fetchAll()
      .subscribe((allExpenses) => (this.expenseCollection = allExpenses));
  }
}
