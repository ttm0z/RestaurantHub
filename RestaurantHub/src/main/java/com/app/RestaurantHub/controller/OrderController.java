package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.Order;
import com.app.RestaurantHub.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Orders")
public class OrderController {
    
    @Autowired
    private OrderService OrderService;

    @GetMapping
    public List<Order> getAllOrders() {
        return OrderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = OrderService.getOrderById(id);
        return order.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        return OrderService.saveOrder(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order OrderDetails) {
        Optional<Order> order = OrderService.getOrderById(id);
        if (order.isPresent()){
            Order updatedOrder = order.get();

            updatedOrder.setPrice(OrderDetails.getPrice());
            updatedOrder.setTable(OrderDetails.getTable());
            updatedOrder.setCustomer(OrderDetails.getCustomer());
            updatedOrder.setServer(OrderDetails.getServer());
            updatedOrder.setMenuItems(OrderDetails.getMenuItems());
            
            OrderService.saveOrder(updatedOrder);
            return ResponseEntity.ok(updatedOrder);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id){
        OrderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}