package com.app.RestaurantHub.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.app.RestaurantHub.model.ServiceTable;

public interface ServiceTableRepository extends JpaRepository<ServiceTable, Long>{
    
}
