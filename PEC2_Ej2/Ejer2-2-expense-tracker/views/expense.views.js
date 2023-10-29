/**
 * @class View
 *
 * Visual representation of the model.
 */

class ExpenseView {
  constructor() {
    this.root = document.getElementById('root');
    this.title = document.createElement('h2');
    this.title.textContent = 'Expense Tracker';
    this.root.append(this.title);
    this.container = document.createElement('div');
    this.container.className = 'container';
    this.h4Balance = document.createElement('h4');
    this.h4Balance.textContent = 'Your Balance';
    this.h1 = document.createElement('h1');
    this.h1.id = 'balance';
    this.h1.textContent = '$0.00';
    this.inc_exp_container = document.createElement('div');
    this.inc_exp_container.className = 'inc-exp-container';
    this.box1_inc = document.createElement('div');
    this.Income = document.createElement('h4');
    this.Income.textContent = 'Income';
    this.money_plus = document.createElement('p');
    this.money_plus.id = 'money-plus';
    this.money_plus.className = 'money plus';
    this.money_plus.textContent = '+$0.00';
    this.box1_inc.append(this.Income, this.money_plus);
    this.inc_exp_container.appendChild(this.box1_inc);

    //2 div
    this.box2_inc = document.createElement('div');
    this.Expense = document.createElement('h4');
    this.Expense.textContent = 'Expense';
    this.Moneyminus = document.createElement('p');
    this.Moneyminus.textContent = '-$0.00';
    this.Moneyminus.id = 'money-minus';
    this.Moneyminus.className = 'money minus';
    this.box2_inc.append(this.Expense, this.Moneyminus);
    this.inc_exp_container.appendChild(this.box2_inc);

    //Form
    this.History = document.createElement('h3');
    this.History.textContent = 'History';
    this.Add = document.createElement('h3');
    this.Add.textContent = 'Add new transaction';
    this.form = document.createElement('form');
    this.form.id = 'form';
    this.divForm = document.createElement('div');
    this.divForm.classList = 'form-control';
    this.labelText = document.createElement('label');
    this.labelText.for = 'text';
    this.labelText.textContent = 'Text';
    this.inputText = document.createElement('input');
    this.inputText.type = 'text';
    this.inputText.id = 'text';
    this.inputText.placeholder = 'Enter text...';
    this.divForm.append(this.labelText, this.inputText);
    this.form.append(this.divForm);
    this.divFormControl2 = document.createElement('div');
    this.divFormControl2.classList = 'form-control';
    this.labelAmount = document.createElement('label');
    this.labelAmount.for = 'amount';
    this.labelAmount.innerHTML = `Amount <br/> (negative - expense, positive - income)`;
    this.inputAmount = document.createElement('input');
    this.inputAmount.type = 'number';
    this.inputAmount.id = 'amount';
    this.inputAmount.placeholder = 'Enter amount...';
    this.divFormControl2.append(this.labelAmount, this.inputAmount);
    this.form.appendChild(this.divFormControl2);
    this.ul = document.createElement('ul', 'expend-list');
    this.buttonSubmit = document.createElement('button');
    this.buttonSubmit.textContent = 'Add transaction';
    this.buttonSubmit.classList = 'btn';
    this.buttonSubmit.type = 'submit';
    this.form.append(this.buttonSubmit);
    this.container.append(
      this.h4Balance,
      this.h1,
      this.inc_exp_container,
      this.History,
      this.ul,
      this.Add,
      this.form
    );
    this.root.append(this.container);

    this.localStorageTransactions = JSON.parse(
      localStorage.getItem('transactions')
    );

    this.transactions =
      localStorage.getItem('transactions') !== null
        ? this.localStorageTransactions
        : [];

    this.temporaryText = '';
    this.temporaryNum = 0;
    this._initLocalListeners();
  }

  get _textExpend() {
    return this.inputText.value;
  }

  get _numExpend() {
    return this.inputAmount.value;
  }

  get _id() {
    return Math.floor(Math.random() * 100000000);
  }

  _resetInput() {
    this.inputText.value = '';
  }

  submitForm(handler) {
    this.form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (
        this.inputText.value.trim() === '' ||
        this.inputAmount.value.trim() === ''
      ) {
        alert('Please add a text and amount');
      }
      if (this._textExpend && this._numExpend) {
        handler(this._textExpend, this._numExpend);
        this._resetInput();
      }
    });
  }

  displayHistory(expense) {
    const transaction = {
      id: this._id,
      text: this.inputText.value,
      num: this.inputAmount.value,
    };

    this.ul.classList.add('list');
    while (this.ul.firstChild) {
      this.ul.removeChild(this.ul.firstChild);
    }

    expense.forEach((expe) => {
      if (expense.length === 0) {
        return;
      } else {
        const li = document.createElement('li');
        li.id = expe.id;
        this.sing = expe.num < 0 ? '-' : '+';
        li.classList.add(expe.num < 0 ? 'minus' : 'plus');
        this.pText = document.createElement('p');
        this.pNum = document.createElement('p');
        this.pText.contentEditable = true;
        this.pText.classList.add('editable');
        this.pText.textContent = `${expe.text}`;
        this.pNum.contentEditable = true;
        this.pNum.classList.add('editable');
        this.pNum.textContent = `${this.sing}${expe.num}`;
        li.append(this.pText, this.pNum);
        const buttonDelete = document.createElement('button', 'delete');
        buttonDelete.classList.add('delete-btn');
        buttonDelete.textContent = 'X';
        li.append(buttonDelete);
        this.ul.append(li);
        this.inputText.value = '';
        this.inputAmount.value = '';
      }
    });
  }

  bindDeleteExpend(handler) {
    this.ul.addEventListener('click', (event) => {
      if (event.target.className === 'delete-btn') {
        const _id = event.target.parentElement.id;
        handler(_id);
      }
    });
  }

  _initLocalListeners() {
    this.ul.addEventListener('input', (event) => {
      if (event.target.className === 'editable') {
        this.temporaryText = this.pText.textContent;
        this.temporaryNum = this.pNum.textContent;
      }
    });
  }

  updateExpends(handler) {
    this.ul.addEventListener('focusout', (event) => {
      if ((this.temporaryText || this.temporaryNum) || (this.temporaryText && this.temporaryNum)) {
        const id = event.target.parentElement.id;
        handler(id, this.temporaryText, this.temporaryNum);
      }
    });
  }
}
