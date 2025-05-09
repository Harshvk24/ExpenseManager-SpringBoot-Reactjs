
package com.example.expensetracker.service;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.repository.ExpenseRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExpenseService {
    private final ExpenseRepository repository;

    public ExpenseService(ExpenseRepository repository) {
        this.repository = repository;
    }

    public List<Expense> getAllExpenses() {
        return repository.findAll();
    }

    public Expense addExpense(Expense expense) {
        return repository.save(expense);
    }

    public List<Expense> getByCategory(String category) {
        return repository.findByCategory(category);
    }

    public double getTotalAmount() {
        return repository.findAll().stream().mapToDouble(Expense::getAmount).sum();
    }
}
