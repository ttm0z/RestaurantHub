package com.app.RestaurantHub.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.RestaurantHub.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    
}
