# DB-Assignment
Product and Product_Category and  Inventory and Product_Discount

1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.
--
The relationship between the "Product" and "Product_Category" is a "Many to One" relation.

for Ex we have multiple products like Tv, smartphones, laptops.. and the category is "Electronics".
It is so because multiple Products (TV, smartphones, laptops) can belong to the same category of "Electronics".
and we can query the details based on the categoryId stored in the products category


2.  How could you ensure that each product in the "Product" table has a valid category assigned to it?

 This validation can be done using the Mongo validation in the Product Schema and this validation will check whether the category ID exists or not in the 
 product schema when the product collection is saved in the database.
 When creating or updating a product document, Mongoose will validate that the categoryId refers to an existing document in the "productCategory" collection.

   
