import { createClient } from 'redis';

const redisUrl = `redis://${process.env.REDIS_HOST}:${process.env.REDIS_PORT}`;

const redisClient = createClient({
  url: redisUrl,
  password: process.env.REDIS_PASSWORD,
  name: process.env.REDIS_DB,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis client connect successfully');
    redisClient.set('try', 'Hello, Welcome to the app!');
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

export default redisClient;
