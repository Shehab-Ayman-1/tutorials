<!-- Commands -->

-   Run Redis Server -> sudo service redis-server start
-   Test Redis Server -> redis-server --port 6380 --slaveof 127.0.0.1 6379
-   Ubutu Root User -> sudo -i
-   redis-cli -u redis://default:iOH4lv3kexQjyqMyAe3YE74S8BVu57qH@redis-10976.c11.us-east-1-2.ec2.cloud.redislabs.com:10976

<!-- Methods -->

# PUBLIC METHODS

-   flushAll -> Delete All Keys
-   return "ok"

-   keys(key || \*) -> Return The Key
-   return key || []

-   exists(key) -> Check If The Key Is Defined
-   return 1 || 0

-   ttl(key) -> Get The Resume Expired Time In Seconds
-   return "the rest time to expire"

-   hExists(objectName, key) -> Check If The Key Is In the Object
-   return 1 || 0

# GET METHODS

-   get(key) -> Get The String Key Value
-   return "key value"

-   lRange(key, from, to) -> Get The Array Value
-   return "key value"

-   hGet(objectName, key) -> Get The Value Of The Object Key
-   return "Key Value"

-   hGetAll(objectName) -> Get The All Keys Of The Object
-   return "keys and values"

# SET METHODS

-   set(key, value) -> Create A Unique Key
-   return "ok"

-   setEx(key, duration, value) -> Create A Unique Key And Gone After The Duration Is End
-   return "ok"

-   hSet(objectName, propKey, propValue) -> Create A New Key In The Object, Create The Object Also If Not Defined
-   return 1 || 0

# UPDATE METHODS

-   lPush(key, value) -> Push New Element In The First Of The Array, Create A New Key If Not Defined
-   return "array length"

-   rPush(key, value) -> Push New Element In The End Of The Array, Create A New Key If Not Defined
-   return "array length"

# DELETE METHODS

-   del(key) -> Delete Key
-   return 1 || 0

-   lPop(key) -> Delete The First Element In The Array
-   return "deleted key"

-   rPop(key) -> Delete The Last Element In The Array
-   return "deleted key"

-   hDel(objectName, key) -> Delete The Key From The Object
-   return 1 || 0
