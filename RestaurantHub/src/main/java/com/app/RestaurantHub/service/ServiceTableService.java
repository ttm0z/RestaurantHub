package com.app.RestaurantHub.service;

import com.app.RestaurantHub.model.ServiceTable;
import com.app.RestaurantHub.repository.ServiceTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceTableService {
    
    @Autowired
    private ServiceTableRepository ServiceTableRepository;

    public List<ServiceTable> getAllServiceTables() {
        return ServiceTableRepository.findAll();
    }

    public Optional<ServiceTable> getServiceTableById(Long id) {
        return ServiceTableRepository.findById(id);
    }

    public ServiceTable saveServiceTable(ServiceTable serviceTable) {
        return ServiceTableRepository.save(serviceTable);
    }

    public void deleteServiceTable(Long id) {
        ServiceTableRepository.deleteById(id);
    }
}