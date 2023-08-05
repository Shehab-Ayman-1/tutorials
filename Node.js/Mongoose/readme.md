# status Flags

-   200, 201 -> Success
-   400, 401 -> Bad Request [Validate]
-   404, 405 -> Error

# Search

-   find -> Find All Products, Can To Search By Anu Key
-   findById -> Find Product By ID
-   findOne -> Find Product Any Property

# Events

-   limit(num) -> Limit The Recieved Data
-   sort({ key: 1 || -1 }) -> Sort By The Key Name, [1, true] -> From Bigger To Smaller | [-1, false] -> From Smaller To Bigger
-   select({ keys: 1 || -1 }) -> Select What Is Recieved Data
-   count -> The Elements Count

# Queries:

-   [eq] Equal
-   [gt] Greater Than
-   [lt] Leass Than
-   [gte] Greater Than OR Equal
-   [lte] Less Than OR Equal
-   [in] In This Numbers
-   [nin] Now In This Numbers
-   [or] Key1 || key2
-   [and] key1 && key2
-   [^] Start With /pattern/
-   [$] End With /pattern/
-   [.*] Any Where
