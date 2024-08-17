package com.app.RestaurantHub.service;

import com.app.RestaurantHub.model.MenuItem;
import com.app.RestaurantHub.repository.MenuItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuItemService {
    
    @Autowired
    private MenuItemRepository MenuItemRepository;

    public List<MenuItem> getAllMenuItems() {
        return MenuItemRepository.findAll();
    }

    public Optional<MenuItem> getMenuItemById(Long id) {
        return MenuItemRepository.findById(id);
    }

    public MenuItem saveMenuItem(MenuItem menuItem) {
        return MenuItemRepository.save(menuItem);
    }

    public void deleteMenuItem(Long id) {
        MenuItemRepository.deleteById(id);
    }
}
