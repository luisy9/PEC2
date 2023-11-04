/**
 * @class Controller
 *
 * @param model
 * @param view
 */

class ExpenseController {
  constructor(service, view) {
    this.service = service;
    this.view = view;

    this.service.bindExpendListChanged(this.onHistoryChanged);
    this.view.submitForm(this.handleAdd);
    this.view.bindDeleteExpend(this.handleDeleteHistory);
    this.view.updateExpends(this.handleUpdateExpense);
    // this.view.bind;

    this.onHistoryChanged(this.service.expense);
  }

  onHistoryChanged = expense => {
    this.view.displayHistory(expense);
  };

  handleAdd = ({id, text, num}) => {
    this.service.addHistory({id,text, num});
  };

  handleUpdateExpense = (id, text, num) => {
    this.service.updateHistory(id, text, num);
  };

  handleDeleteHistory = (_id) => {
    this.service.deleteHistory(_id);
  };
}
