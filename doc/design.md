## Development Phases
**System Requirements Gathering**
- /requirements.md

**Use Case Analysis**
- /usecases.md

---
**Features**
- **Admin Features**
  - Get, Create, Update, Delete Employees
  - Get, Create, Update, Delete Menu
  - Generate Sales Report



- - -
## Database Schema Prototyping
## I. Database Entities

#### Customer
  
  **Fields**
  * Long customerId
  * String firstName
  * String lastName
  * String email;
  * Order[] orders
  * createdAt

#### Employee
  
  **Fields**
  * Long employeeId
  * String firstName
  * String lastName
  * String email
  * String category
  * Float salary
  * Order[] orders
  * createdAt

  **API Endpoints**
  * Create Employee
  * Update Employee
  * Get Employee
  * Delete Employee

#### Menu

- **API Endpoints**
  * Create Menu
  * Update Menu
  * Get Menu
  * Delete Menu
* 
#### Menu Item
#### ServiceTable
#### Order
  * Long orderId;
  * Float price;
  * ServiceTable table;
  * Customer customer;
  * Employee server
  * MenuItem[] menuItems;
  * createdAt



**(add later)**
* **Bill**
- - -
## Users

* **Server**
  * Server Responsibilities
    * greets customers, takes orders, and processes payments
  * Server Views
    *  OrderManagement


* **Cook**
  * Cook Responsibilities
    * Prepares orders
    * Prepares ingredients
    * Consumes Inventory
  * Cook Views
    * TicketingSystem
- - -