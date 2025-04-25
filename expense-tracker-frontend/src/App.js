import React from 'react';
import ExpenseList from './components/ExpenseList';

function App() {
    return (
        <div className="App">
            <h1>Expense Tracker</h1>
            {/* Ensure only one instance of ExpenseList is rendered */}
            <ExpenseList />
        </div>
    );
}

export default App;
