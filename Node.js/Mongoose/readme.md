# status Flags

-  200, 201 -> Success
-  400, 401 -> Bad Request
-  404, 405 -> Error

# GET

-  find -> Find All Products, Can To Search By Anu Key
-  findById -> Find Product By ID
-  findOne -> Find Product Any Property

# CREATE

-  create() -> Use To Create A New Product Without Save()
-  new Collection() -> Create New Object From The Class Model And Recieve The Data From The User By <Req.body>
-  save() -> Use To Send The Data To The Database

# UPDATE

-  findOneAndUpdate -> Find Document By Key name, And Update This Document By The New Body
-  findByIdAndUpdate -> Find Document By ID, And Update This Document By The New Body
-  updateOne -> Update The First Document Matching The Filter Key, Update By Set, OR Push, Set For Replace, And Push For Insert
-  updateMany -> Update All The Documents Matching The Filter Key, Update By Set, OR Push, Set For Replace, And Push For Insert
-  findById -> Return The Document By ID, Then Update The Target Key Manually
-  set -> Update By Key And Value

# DELETE

-  findByIdAndDelete -> Diractly Delete The Document By ID
-  findOneAndDelete -> Diractly Delete The Document By Key
-  deleteOne -> Diractly Delete The Document By Key
-  deleteMany -> Diractly Delete All The Documents By Key

# Schema -> Is The Pattert That The Database Object Will Create Like That

-  SchemaTypes.ObjectId -> Make The Key Contain A Mongo Default ID

-  type -> Detect Key Type
-  required -> Make The Property Is Required
-  default -> Put A Default Value To The Attribute
-  unique -> Make The property Is Unique
-  trim -> Trim The Whitespaces From The Left And Right

-  minLength -> Set A Min Length To The Property
-  maxLength -> Set A Max Length To The Property
-  min -> Min Value Of The Price
-  max -> Max Value Of The Price

-  emum -> Make The User To Choose Between Some Values
-  validate{validator, message} -> Create A Custome Validation

-  lowercase -> Convert To Lowercase
-  uppercase -> Convert To Uppercase

-  get -> Make Something While Get From Database
-  set -> Make Something While Send To Database

# Events -> Recieve Data From DB That Matching The Target Event

-  limit(num) -> Limit The Recieved Data
-  count() -> The Elements Count
-  sort(param)
-  -  { key: flag } -> [1, true] Bigger To Smaller, [-1, false] Smaller To Bigger
-  -  "key" -> Sort By Key From Bigger To Smaller
-  select(params)
-  -  { key: flag } -> [1] Accept, [-1] Ignore
-  -  "key" -> Accept Key Value

# Queries -> Recieve Data From DB That Matching The Target Query

-  [eq] Equal
-  [gt] Greater Than
-  [lt] Less Than
-  [gte] Greater Than OR Equal
-  [lte] Less Than OR Equal
-  [in] In This Numbers
-  [nin] Now In This Numbers
-  [or] Key1 || key2
-  [and] key1 && key2
-  [^] Start With /regex/
-  [$] End With /regex/
-  [.*] Any Where /regex/
