/**
 *
 * @class Service
 *
 * Manages the data of the application
 */

class ExpenseService {
  constructor() {
    this.expense = (JSON.parse(localStorage.getItem('expense')) || []).map(
      (e) => new Expense(e)
    );
  }

  bindExpendListChanged(callback) {
    this.onExpendListChanged = callback;
  }

  _commit(expense) {
    this.onExpendListChanged(expense);
    localStorage.setItem('expense', JSON.stringify(expense));
  }

  addHistory(text, num) {
    this.expense.push(new Expense({ text, num }));

    this._commit(this.expense);
  }

  deleteHistory(_id) {
    this.expense = this.expense.filter(({ id }) => id !== _id);

    this._commit(this.expense);
  }

  updateHistory(id, updateText, updateNum) {
    const cadenaSinMas = updateNum.split('+').join('');
    this.expense = this.expense.map((e) =>
      e.id === id
        ? new Expense({ ...e, text: updateText, num: cadenaSinMas })
        : e
    );

    this._commit(this.expense);
  }
}
