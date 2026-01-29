import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IExpense } from '../model/expense-model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private baseUrl = 'http://localhost:3000/expenses';

  constructor(private http: HttpClient) {}

  fetchAll() {
    return this.http.get<Array<IExpense>>(this.baseUrl);
  }

  create(expense: IExpense) {
    return this.http.post<IExpense>(this.baseUrl, expense, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  fetch(expenseId: string) {
    return this.http.get<IExpense>(`${this.baseUrl}/${expenseId}`);
  }

  delete(expenseId: string) {
    return this.http.delete(`${this.baseUrl}/${expenseId}`);
  }
}
