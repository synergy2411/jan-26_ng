import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IExpense } from '../../../model/expense-model';

@Component({
  selector: 'app-expense-item',
  templateUrl: './expense-item.component.html',
  styleUrl: './expense-item.component.css',
})
export class ExpenseItemComponent {
  @Input() expense!: IExpense;

  @Output() closeEvent = new EventEmitter();
  @Output() deleteEvent = new EventEmitter<string>();

  onDelete() {
    this.deleteEvent.emit(this.expense.id);
  }
  onClose() {
    this.closeEvent.emit();
  }
}
