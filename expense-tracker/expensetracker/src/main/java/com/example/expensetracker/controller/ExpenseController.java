
package com.example.expensetracker.controller;

import com.example.expensetracker.model.Expense;
import com.example.expensetracker.service.ExpenseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/expenses")
public class ExpenseController {

    private final ExpenseService service;

    public ExpenseController(ExpenseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Expense> getAll(@RequestParam(required = false) String category) {
        if (category != null) {
            return service.getByCategory(category);
        }
        return service.getAllExpenses();
    }

    @PostMapping
    public Expense add(@RequestBody Expense expense) {
        return service.addExpense(expense);
    }

    @GetMapping("/summary")
    public Map<String, Double> summary() {
        double total = service.getTotalAmount();
        return Map.of("total", total);
    }
}
