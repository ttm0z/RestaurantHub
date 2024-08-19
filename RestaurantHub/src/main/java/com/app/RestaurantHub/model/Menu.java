package com.app.RestaurantHub.model;

import java.time.LocalDateTime;
import jakarta.persistence.*;

import java.util.List;
import java.util.stream.Collectors;

@Entity
@Table(name="menus")
public class Menu {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long menuId;

    @Column(nullable = false)
    private String menuName;

    @ManyToMany
    @JoinTable(
        name="menu_menu_items",
        joinColumns = @JoinColumn(name = "menuId"),
        inverseJoinColumns = @JoinColumn(name = "itemId")
    )
    private List<MenuItem> menuItems;

    @Column(name = "created_at", updatable = false, nullable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // Getters and Setters
    public Long getMenuId() { return menuId; }
    public void setMenuId(Long id) { this.menuId = id;}

    public String getMenuName() { return menuName; }
    public void setMenuName(String menuName) { this.menuName = menuName;}

    public List<MenuItem> getMenuItems() { return menuItems; }
    public void setMenuItems(List<MenuItem> menuItems) { this.menuItems = menuItems;}

    public List<Long> getMenuItemIds() {
        return this.getMenuItems().stream()
            .map(MenuItem::getItemId)
            .collect(Collectors.toList());
    }
}
