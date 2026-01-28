import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrl: './expense-form.component.css',
})
export class ExpenseFormComponent {
  expenseForm: FormGroup;

  @Output() newExpenseEvent = new EventEmitter<IExpense>();

  constructor(private fb: FormBuilder) {
    this.expenseForm = this.fb.group({
      title: new FormControl(),
      amount: new FormControl(),
    });
  }

  onSubmit() {
    // console.log(this.expenseForm.value);
    this.newExpenseEvent.emit(this.expenseForm.value);
  }
}
