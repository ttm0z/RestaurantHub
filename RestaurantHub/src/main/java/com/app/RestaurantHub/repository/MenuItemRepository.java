package com.app.RestaurantHub.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.RestaurantHub.model.MenuItem;

public interface MenuItemRepository extends JpaRepository<MenuItem, Long> {
    
}
