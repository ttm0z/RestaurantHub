package com.app.RestaurantHub.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name="employees")
public class Employee {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long employeeId;

    @Column(nullable = false)
    private String firstName;

    @Column(nullable = false)
    private String lastName;

    @Column(nullable = false, unique=true)
    private String email;

    @Column(nullable = false)
    private String category;

    @Column(nullable = false)
    private float salary;

    @OneToMany(mappedBy = "server", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Order> orders;
    
    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    
    // Getters and Setters
    public Long getEmployeeId() { return employeeId; }
    public void setEmployeeId(Long id) { this.employeeId = id;}

    public String getFirstName() { return firstName; }
    public void setFirstName(String firstName) { this.firstName = firstName;}

    public String getLastName() { return lastName; }
    public void setLastName(String lastName) { this.lastName = lastName;}

    public String getEmail() { return email; }
    public void setEmail(String email) { this.email = email;}

    public String getCategory() { return category; }
    public void setCategory(String category) { this.category = category;}

    public Float getSalary() { return salary; }
    public void setSalary(Float salary) { this.salary = salary;}

    public List<Order> getOrders() { return orders; }
    public void setOrders(List<Order> orders) { this.orders = orders;}
    
}
