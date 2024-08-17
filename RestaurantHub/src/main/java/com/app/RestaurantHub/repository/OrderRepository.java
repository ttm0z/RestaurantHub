package com.app.RestaurantHub.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.RestaurantHub.model.Order;

public interface OrderRepository extends JpaRepository<Order, Long>{
    
}
