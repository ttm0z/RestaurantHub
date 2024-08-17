package com.app.RestaurantHub.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.RestaurantHub.model.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    
}