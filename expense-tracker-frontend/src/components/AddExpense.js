import React, { useState } from 'react';

function AddExpense({ refreshExpenses }) {
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [category, setCategory] = useState('');
    const [date, setDate] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const expense = {
            description,
            amount: parseFloat(amount),
            category,
            date,
        };

        fetch('http://localhost:8080/api/expenses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expense),
        })
            .then(response => response.json())
            .then((data) => {
                setDescription('');
                setAmount('');
                setCategory('');
                setDate('');
                refreshExpenses();
            })
            .catch((error) => console.error('Error adding expense:', error));
    };

    return (
        <div>
            <h2>Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <label>Description:</label>
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
                <br />
                <label>Amount:</label>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
                <br />
                <label>Category:</label>
                <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
                <br />
                <label>Date:</label>
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
                <br />
                <button type="submit">Add Expense</button>
            </form>
        </div>
    );
}

export default AddExpense;
