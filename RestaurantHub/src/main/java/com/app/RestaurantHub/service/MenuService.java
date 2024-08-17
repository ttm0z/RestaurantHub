package com.app.RestaurantHub.service;

import com.app.RestaurantHub.model.Menu;
import com.app.RestaurantHub.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MenuService {
    
    @Autowired
    private MenuRepository MenuRepository;

    public List<Menu> getAllMenus() {
        return MenuRepository.findAll();
    }

    public Optional<Menu> getMenuById(Long id) {
        return MenuRepository.findById(id);
    }

    public Menu saveMenu(Menu menu) {
        return MenuRepository.save(menu);
    }

    public void deleteMenu(Long id) {
        MenuRepository.deleteById(id);
    }
}