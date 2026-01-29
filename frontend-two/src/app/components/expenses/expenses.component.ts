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

  showForm = false;
  showExpense = false;
  selectedExpense!: IExpense;

  constructor(private service: ExpenseService) {}

  ngOnInit(): void {
    this.service
      .fetchAll()
      .subscribe((allExpenses) => (this.expenseCollection = allExpenses));
  }

  onAddNewExpense(newExpense: IExpense) {
    this.service.create(newExpense).subscribe((expense) => {
      this.expenseCollection = [expense, ...this.expenseCollection];
      this.showForm = false;
    });
  }

  onSelectExpense(expenseId: string) {
    this.service.fetch(expenseId).subscribe((expense) => {
      this.selectedExpense = expense;
      this.showExpense = true;
    });
  }

  onDelete(expenseId: string) {
    this.service.delete(expenseId).subscribe(() => {
      this.showExpense = false;
      this.expenseCollection = this.expenseCollection.filter(
        (exp) => exp.id !== expenseId,
      );
    });
  }
}
