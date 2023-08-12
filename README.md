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

According to the results, it turned out that binstock is 2 times faster

I did not see a difference in speed for rdb and aof. I think it is more clearly if disk is loaded
