package com.app.RestaurantHub.controller;

import com.app.RestaurantHub.model.Menu;
import com.app.RestaurantHub.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/menus")
public class MenuController {
    
    @Autowired
    private MenuService MenuService;

    @GetMapping
    public List<Menu> getAllMenus() {
        return MenuService.getAllMenus();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Menu> getMenuById(@PathVariable Long id) {
        Optional<Menu> menu = MenuService.getMenuById(id);
        return menu.map(ResponseEntity::ok)
            .orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public Menu createMenu(@RequestBody Menu menu) {
        return MenuService.saveMenu(menu);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Menu> updateMenu(@PathVariable Long id, @RequestBody Menu MenuDetails) {
        Optional<Menu> menu = MenuService.getMenuById(id);
        if (menu.isPresent()){
            Menu updatedMenu = menu.get();
            updatedMenu.setMenuName(MenuDetails.getMenuName());
            updatedMenu.setMenuItems(MenuDetails.getMenuItems());
            
            //otherfieldsasneeded
            MenuService.saveMenu(updatedMenu);
            return ResponseEntity.ok(updatedMenu);
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteMenu(@PathVariable Long id){
        MenuService.deleteMenu(id);
        return ResponseEntity.noContent().build();
    }
}