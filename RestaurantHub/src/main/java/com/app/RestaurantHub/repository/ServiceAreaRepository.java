package com.app.RestaurantHub.repository;

import com.app.RestaurantHub.model.ServiceArea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ServiceAreaRepository extends JpaRepository<ServiceArea, Long> {
}
