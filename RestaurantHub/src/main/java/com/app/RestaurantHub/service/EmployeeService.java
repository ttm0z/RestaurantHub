package com.app.RestaurantHub.service;

import com.app.RestaurantHub.model.Employee;
import com.app.RestaurantHub.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {
    
    @Autowired
    private EmployeeRepository EmployeeRepository;

    public List<Employee> getAllEmployees() {
        return EmployeeRepository.findAll();
    }

    public Optional<Employee> getEmployeeById(Long id) {
        return EmployeeRepository.findById(id);
    }

    public Employee saveEmployee(Employee employee) {
        return EmployeeRepository.save(employee);
    }

    public void deleteEmployee(Long id) {
        EmployeeRepository.deleteById(id);
    }
}