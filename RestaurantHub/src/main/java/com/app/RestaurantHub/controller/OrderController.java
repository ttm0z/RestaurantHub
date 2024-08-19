package com.app.RestaurantHub.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.app.RestaurantHub.model.Order;
import com.app.RestaurantHub.model.MenuItem;
import com.app.RestaurantHub.model.Customer;
import com.app.RestaurantHub.model.Employee;

import com.app.RestaurantHub.service.OrderService;

import jakarta.persistence.EntityNotFoundException;

import com.app.RestaurantHub.service.MenuItemService;
import com.app.RestaurantHub.service.CustomerService;
import com.app.RestaurantHub.service.EmployeeService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Orders")
public class OrderController {
    
    @Autowired
    private OrderService orderService;

    @Autowired
    private MenuItemService menuItemService;

    @Autowired
    private CustomerService customerService;

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Optional<Order> order = orderService.getOrderById(id);
        return order.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Order createOrder(@RequestBody Order order) {
        // to handle many-to-many relationships
        // repeat with menu-menuitem
        List<MenuItem> menuItems = menuItemService.getMenuItemsById(order.getMenuItemIds());
        
        Customer customer = customerService.getCustomerById(order.getCustomerId())
            .orElseThrow(() -> new EntityNotFoundException("Customer not found"));
        
        Employee server = employeeService.getEmployeeById(order.getServerId())
            .orElseThrow(() -> new EntityNotFoundException("Employee not found"));
        
        order.setMenuItems(menuItems);
        order.setCustomer(customer);
        order.setServer(server);
        
        return orderService.saveOrder(order);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order orderDetails) {
        Optional<Order> order = orderService.getOrderById(id);
        if (order.isPresent()){
            Order updatedOrder = order.get();

                
            Customer customer = customerService.getCustomerById(orderDetails.getCustomerId())
                .orElseThrow(() -> new EntityNotFoundException("Customer not found"));
    
            Employee server = employeeService.getEmployeeById(orderDetails.getServerId())
                .orElseThrow(() -> new EntityNotFoundException("Employee not found"));
    
            List<MenuItem> menuItems = menuItemService.getMenuItemsById(orderDetails.getMenuItemIds());

            updatedOrder.setPrice(orderDetails.getPrice());
            updatedOrder.setTable(orderDetails.getTable());
            updatedOrder.setCustomer(customer);
            updatedOrder.setServer(server);
            updatedOrder.setMenuItems(menuItems);
            
            orderService.saveOrder(updatedOrder);
            return ResponseEntity.ok(updatedOrder);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id){
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
}