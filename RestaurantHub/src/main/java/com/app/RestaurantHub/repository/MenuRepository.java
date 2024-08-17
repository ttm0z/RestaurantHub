package com.app.RestaurantHub.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.RestaurantHub.model.Menu;

public interface MenuRepository extends JpaRepository<Menu, Long>{
    
}
