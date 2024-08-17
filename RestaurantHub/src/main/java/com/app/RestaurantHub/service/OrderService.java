package com.app.RestaurantHub.service;

import com.app.RestaurantHub.model.Order;
import com.app.RestaurantHub.repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {
    
    @Autowired
    private OrderRepository OrderRepository;

    public List<Order> getAllOrders() {
        return OrderRepository.findAll();
    }

    public Optional<Order> getOrderById(Long id) {
        return OrderRepository.findById(id);
    }

    public Order saveOrder(Order order) {
        return OrderRepository.save(order);
    }

    public void deleteOrder(Long id) {
        OrderRepository.deleteById(id);
    }
}