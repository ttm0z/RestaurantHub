package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.Employee;
import com.app.RestaurantHub.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/employees")
public class EmployeeController {
    
    @Autowired
    private EmployeeService EmployeeService;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return EmployeeService.getAllEmployees();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Optional<Employee> employee = EmployeeService.getEmployeeById(id);
        return employee.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Employee createEmployee(@RequestBody Employee employee) {
        return EmployeeService.saveEmployee(employee);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeDetails) {
        Optional<Employee> employee = EmployeeService.getEmployeeById(id);
        if (employee.isPresent()){
            Employee updatedEmployee = employee.get();
            updatedEmployee.setFirstName(employeeDetails.getFirstName());
            updatedEmployee.setLastName(employeeDetails.getLastName());
            updatedEmployee.setEmail(employeeDetails.getEmail());
            //otherfieldsasneeded
            EmployeeService.saveEmployee(updatedEmployee);
            return ResponseEntity.ok(updatedEmployee);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable Long id){
        EmployeeService.deleteEmployee(id);
        return ResponseEntity.noContent().build();
    }
}
