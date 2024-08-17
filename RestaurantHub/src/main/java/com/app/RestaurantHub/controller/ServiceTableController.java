package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.ServiceTable;
import com.app.RestaurantHub.service.ServiceTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/ServiceTables")
public class ServiceTableController {
    
    @Autowired
    private ServiceTableService ServiceTableService;

    @GetMapping
    public List<ServiceTable> getAllServiceTables() {
        return ServiceTableService.getAllServiceTables();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ServiceTable> getServiceTableById(@PathVariable Long id) {
        Optional<ServiceTable> serviceTable = ServiceTableService.getServiceTableById(id);
        return serviceTable.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ServiceTable createServiceTable(@RequestBody ServiceTable serviceTable) {
        return ServiceTableService.saveServiceTable(serviceTable);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ServiceTable> updateServiceTable(@PathVariable Long id, @RequestBody ServiceTable ServiceTableDetails) {
        Optional<ServiceTable> serviceTable = ServiceTableService.getServiceTableById(id);
        if (serviceTable.isPresent()){
            ServiceTable updatedServiceTable = serviceTable.get();
            
            updatedServiceTable.setTableNumber(ServiceTableDetails.getTableNumber());
            updatedServiceTable.setOrder(ServiceTableDetails.getOrder());
            
            ServiceTableService.saveServiceTable(updatedServiceTable);
            return ResponseEntity.ok(updatedServiceTable);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteServiceTable(@PathVariable Long id){
        ServiceTableService.deleteServiceTable(id);
        return ResponseEntity.noContent().build();
    }
}