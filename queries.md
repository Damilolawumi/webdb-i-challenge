# Database Queries

## Find all customers with postal code 1010

<answer/> SELECT * FROM Customers WHERE postalcode = 1010;

## Find the phone number for the supplier with the id 11

<answer/> SELECT phone FROM suppliers WHERE supplierid = 11;

## List first 10 orders ever places, descending by the order date

<answer/> SELECT * FROM orders ORDER BY orderdate DESC LIMIT 10;

## Find all customers that live in London, Madrid, or Brazil

<answer/> SELECT * FROM Customers WHERE City IN ('London', 'Madrid') OR Country = 'Brazil';

## Add a customer record for "The Shire", the contact name is "Bilbo Baggins" the address is -"1 Hobbit-Hole" in "Bag End", postal code "111" and the country is "Middle Earth"

<answer/> INSERT INTO Customers ('CustomerName', 'ContactName', 'Address', 'City', 'PostalCode', 'Country') VALUES ('The Shire', 'Bilbo Baggins', '1 Hobbit-Hole', 'Bag End', '111', 'MiddleEarth');

## Update Bilbo Baggins record so that the postal code changes to "11122"

<answer/> UPDATE Customers SET PostalCode = '11122' WHERE CustomerId = 93;

## (Stretch) Find a query to discover how many different cities are stored in the Customers table. Repeats should not be double counted

<answer/> SELECT COUNT(DISTINCT(City)) FROM Customers;

## (Stretch) Find all suppliers who have names longer than 20 characters. You can use `length(SupplierName)` to get the length of the name

<answer/> SELECT * FROM Suppliers WHERE length(SupplierName) > 20;