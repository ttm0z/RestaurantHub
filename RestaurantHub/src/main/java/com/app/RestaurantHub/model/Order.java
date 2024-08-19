package com.app.RestaurantHub.model;

import java.time.LocalDateTime;

import java.util.List;
import java.util.stream.Collectors;

import jakarta.persistence.*;

@Entity
@Table(name="orders")
public class Order {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderId;

    @Column(name="price")
    private Float price;
    
    @OneToOne
    @JoinColumn(name="table_id", nullable = true)
    private ServiceTable table; 

    @ManyToOne
    @JoinColumn(name = "customer_id", nullable = false)
    private Customer customer;

    @ManyToOne
    @JoinColumn(name = "employee_id", nullable = false)
    private Employee server;

    @ManyToMany
    @JoinTable(
        name = "order_menu_items", 
        joinColumns = @JoinColumn(name = "order_id"), 
        inverseJoinColumns = @JoinColumn(name = "menu_item_id")
    )
    private List<MenuItem> menuItems;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // Getters and Setters

    public Long getOrderId() { return orderId; }
    public void setOrderId(Long orderId) { this.orderId = orderId; }

    public float getPrice() { return price; }
    public void setPrice(float price) { this.price = price; }

    public ServiceTable getTable() { return table; }
    public void setTable(ServiceTable table) { this.table = table; }

    public Customer getCustomer() { return customer; }
    public void setCustomer(Customer customer) { this.customer = customer; }

    public Employee getServer() { return server; }
    public void setServer(Employee server) { this.server = server; }

    public List<MenuItem> getMenuItems() { return menuItems; }
    public void setMenuItems(List<MenuItem> menuItems) { this.menuItems = menuItems; }


    public Long getTableId() {
        return table.getTableId();
    }

    public Long getCustomerId() {
        return customer.getCustomerId();
    }

    public Long getServerId() {
        return server.getEmployeeId();
    }

    public List<Long> getMenuItemIds() {
        return menuItems.stream()
            .map(MenuItem::getItemId)
            .collect(Collectors.toList());
    }


}
