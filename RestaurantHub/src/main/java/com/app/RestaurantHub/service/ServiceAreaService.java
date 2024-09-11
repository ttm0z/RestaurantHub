package com.app.RestaurantHub.service;

import com.app.RestaurantHub.model.ServiceArea;
import com.app.RestaurantHub.repository.ServiceAreaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceAreaService {

    @Autowired
    private ServiceAreaRepository serviceAreaRepository;

    public List<ServiceArea> getAllServiceAreas() {
        return serviceAreaRepository.findAll();
    }

    public Optional<ServiceArea> getServiceAreaById(Long id) {
        return serviceAreaRepository.findById(id);
    }

    public ServiceArea saveServiceArea(ServiceArea serviceArea) {
        return serviceAreaRepository.save(serviceArea);
    }

    public void deleteServiceArea(Long id) {
        serviceAreaRepository.deleteById(id);
    }
}
