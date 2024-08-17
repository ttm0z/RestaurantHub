package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.MenuItem;
import com.app.RestaurantHub.service.MenuItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/MenuItems")
public class MenuItemController {
    
    @Autowired
    private MenuItemService MenuItemService;

    @GetMapping
    public List<MenuItem> getAllMenuItems() {
        return MenuItemService.getAllMenuItems();
    }

    @GetMapping("/{id}")
    public ResponseEntity<MenuItem> getMenuItemById(@PathVariable Long id) {
        Optional<MenuItem> MenuItem = MenuItemService.getMenuItemById(id);
        return MenuItem.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public MenuItem createMenuItem(@RequestBody MenuItem MenuItem) {
        return MenuItemService.saveMenuItem(MenuItem);
    }

    @PutMapping("/{id}")
    public ResponseEntity<MenuItem> updateMenuItem(@PathVariable Long id, @RequestBody MenuItem MenuItemDetails) {
        Optional<MenuItem> menuItem = MenuItemService.getMenuItemById(id);
        if (menuItem.isPresent()){
            MenuItem updatedMenuItem = menuItem.get();
            updatedMenuItem.setItemName(MenuItemDetails.getItemName());
            updatedMenuItem.setPrice(MenuItemDetails.getPrice());
            //otherfieldsasneeded

            MenuItemService.saveMenuItem(updatedMenuItem);
            return ResponseEntity.ok(updatedMenuItem);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenuItem(@PathVariable Long id){
        MenuItemService.deleteMenuItem(id);
        return ResponseEntity.noContent().build();
    }
}