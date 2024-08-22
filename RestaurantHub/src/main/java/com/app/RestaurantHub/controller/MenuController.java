package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.Menu;
import com.app.RestaurantHub.model.MenuItem;
import com.app.RestaurantHub.service.MenuItemService;
import com.app.RestaurantHub.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/Menus")
public class MenuController {
    
    @Autowired
    private MenuService menuService;

    @Autowired
    private MenuItemService menuItemService;

    @GetMapping
    public List<Menu> getAllMenus() {
        return menuService.getAllMenus();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable Long id) {
        Optional<Menu> menu = menuService.getMenuById(id);
        return menu.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Menu createMenu(@RequestBody Menu menu) {
        List<MenuItem> menuItems = menuItemService.getMenuItemsById(menu.getMenuItemIds());
        menu.setMenuItems(menuItems);
        return menuService.saveMenu(menu);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu menuDetails) {
        Optional<Menu> menu = menuService.getMenuById(id);
        if (menu.isPresent()){
            Menu updatedMenu = menu.get();
            updatedMenu.setMenuName(menuDetails.getMenuName());
            
            List<MenuItem> menuItems = menuItemService.getMenuItemsById(menuDetails.getMenuItemIds());
            
            updatedMenu.setMenuItems(menuItems);
            
            //otherfieldsasneeded
            menuService.saveMenu(updatedMenu);
            return ResponseEntity.ok(updatedMenu);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Long id){
        menuService.deleteMenu(id);
        return ResponseEntity.noContent().build();
    }
}