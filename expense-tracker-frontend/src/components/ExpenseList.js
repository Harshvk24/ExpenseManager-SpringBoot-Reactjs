import React, { useState, useEffect } from 'react';
import AddExpense from './AddExpense';  // Import AddExpense

function ExpenseList() {
    const [expenses, setExpenses] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchExpenses = () => {
        setLoading(true);
        fetch('http://localhost:8080/api/expenses')
            .then(response => response.json())
            .then(data => {
                setExpenses(data);
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchExpenses();
    }, []);

    const refreshExpenses = () => {
        fetchExpenses();
    };

    const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);

    const expensesByMonth = expenses.reduce((acc, expense) => {
        const monthYear = new Date(expense.date).toLocaleString('default', { month: 'long', year: 'numeric' });
        if (!acc[monthYear]) {
            acc[monthYear] = 0;
        }
        acc[monthYear] += expense.amount;
        return acc;
    }, {});

    if (loading) {
        return <div>Loading expenses...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            {/* Add Expense form is at the top now */}
            <AddExpense refreshExpenses={refreshExpenses} />

            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense) => (
                    <li key={expense.id}>
                        <div>
                            <strong>{expense.description}</strong> - ${expense.amount} ({expense.category})
                        </div>
                        <span>{new Date(expense.date).toLocaleDateString()}</span>
                    </li>
                ))}
            </ul>

            {/* Display total expenses */}
            <h3>Total Expenses: ${totalExpenses.toFixed(2)}</h3>

            {/* Display expenses by month */}
            <div className="month-expenses">
                <h3>Expenses by Month:</h3>
                <ul>
                    {Object.keys(expensesByMonth).map(month => (
                        <li key={month}>
                            <strong>{month}:</strong> ${expensesByMonth[month].toFixed(2)}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ExpenseList;
