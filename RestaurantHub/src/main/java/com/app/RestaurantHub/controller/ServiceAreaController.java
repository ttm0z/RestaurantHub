package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.ServiceArea;
import com.app.RestaurantHub.service.ServiceAreaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ServiceAreas")
public class ServiceAreaController {

    @Autowired
    private ServiceAreaService serviceAreaService;

    @GetMapping
    public List<ServiceArea> getAllServiceAreas() {
        return serviceAreaService.getAllServiceAreas();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceArea> getServiceAreaById(@PathVariable Long id) {
        Optional<ServiceArea> serviceArea = serviceAreaService.getServiceAreaById(id);
        return serviceArea.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ServiceArea createServiceArea(@RequestBody ServiceArea serviceArea) {
        return serviceAreaService.saveServiceArea(serviceArea);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceArea> updateServiceArea(@PathVariable Long id, @RequestBody ServiceArea serviceAreaDetails) {
        Optional<ServiceArea> serviceArea = serviceAreaService.getServiceAreaById(id);
        if (serviceArea.isPresent()) {
            ServiceArea updatedServiceArea = serviceArea.get();
            updatedServiceArea.setServiceAreaName(serviceAreaDetails.getServiceAreaName());

            serviceAreaService.saveServiceArea(updatedServiceArea);
            return ResponseEntity.ok(updatedServiceArea);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceArea(@PathVariable Long id) {
        serviceAreaService.deleteServiceArea(id);
        return ResponseEntity.noContent().build();
    }
}
