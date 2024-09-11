package com.app.RestaurantHub.model;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "ServiceAreas")
public class ServiceArea {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long serviceAreaId;

    @Column(nullable = false)
    private String serviceAreaName;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // Getter and Setter for serviceAreaId
    public Long getServiceAreaId() {
        return serviceAreaId;
    }

    public void setServiceAreaId(Long serviceAreaId) {
        this.serviceAreaId = serviceAreaId;
    }

    // Getter and Setter for serviceAreaName
    public String getServiceAreaName() {
        return serviceAreaName;
    }

    public void setServiceAreaName(String serviceAreaName) {
        this.serviceAreaName = serviceAreaName;
    }

    // Getter for createdAt (No Setter since it is auto-generated)
    public LocalDateTime getCreatedAt() {
        return createdAt;
    }
}
