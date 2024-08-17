Use Case 1: A Server takes an order
- A group of customers enter the establishment and are greeted by a server
- The server decides where in the restaurant to seat the group
- The group is seated and are offered drinks while deciding on their order
- The server takes the customers order manually
- The server puts the order into the system [Contact with System]
  - An order object is initialized.
  - The server adds the requested items to the order object using the OrderManager interface
  - The server indicates to the system that the order is complete
  - The order is sent to the kitchen