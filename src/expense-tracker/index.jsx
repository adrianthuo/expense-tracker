export const ExpenseTracker = ( )=> {
    return (
        <>
    <div className="expense-tracker">
        <div className="container">
            <h1>Expense Tracker</h1>
            <div className="balance">
                <h3>Your Balance</h3>
                <h2>$0.00</h2>
            </div>
            <div className="summary">
            <div className="income">
                <h4>Income</h4>
                <p>$0.00</p>
            </div>
            <div className="expenses">
                <h4>Expenses</h4>
                <p>$0.00</p>
            </div>
            </div>
            <form className="ad-transaction">
                <input type="text" placeholder="description" required></input>
                <input type="text" placeholder="Amount" required></input>
                <input type="radio" id="expense" value="expense"></input>
                <label htmlFor="expense">Expense</label>
                <input type="radio" id="income" value="income" ></input>
                <label htmlFor="income">Income</label>


                <button type="submit">Add transaction</button>

            </form>
        </div>
    </div>
    <div className="transaction">
        <h3>Transactions</h3>
    </div>
 </>
);};