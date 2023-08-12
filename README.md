# redis-vs-beanstalkd

1. To start, you need to run docker

```
docker-compose up
```

2. Install yarn packages

```
yarn
```

3. Run script

```
node redis.js
```

To run redis with **rdb** config change the port inside **redis.js** file on **6381**. for **aof** on **6380**

According to the results, it turned out that beanstalkd is 3 times faster in **!!!circumstances if redis uses pub/sub!!!**. With normal compare almost no differences 

# **Redis AOF**

<img width="614" alt="image" src="https://github.com/danylboiko95/redis-vs-beanstalkd/assets/44903844/097cbeba-2594-4aa5-9e3f-837277075417">

# **Redis RDB**

<img width="617" alt="image" src="https://github.com/danylboiko95/redis-vs-beanstalkd/assets/44903844/100fae91-f2b0-41bc-8041-90f889ff213f">

# **Beanstalkd**

<img width="671" alt="image" src="https://github.com/danylboiko95/redis-vs-beanstalkd/assets/44903844/688fe20f-9a6e-411a-b625-a215ff3413bf">



I did not see a difference in speed for rdb and aof. I think it is more clearly if disk is loaded
