package com.app.RestaurantHub.model;

import java.time.LocalDateTime;

import jakarta.persistence.*;

@Entity
@Table(name="service_tables")
public class ServiceTable {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tableId;

    @Column(nullable = false)
    private int tableNumber;

    @OneToOne(mappedBy = "table")
    private Order order;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // Getters and Setters

    public Long getTableId() { return tableId; }
    public void setTableId(Long tableId) { this.tableId = tableId; }

    public int getTableNumber() { return tableNumber; }
    public void setTableNumber(int tableNumber) { this.tableNumber = tableNumber; }

    public Order getOrder() { return order; }
    public void setOrder(Order order) { this.order = order; }

}
