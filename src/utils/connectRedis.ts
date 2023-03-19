import { createClient } from 'redis';
import config from "config";
const redisConfig = config.get<{
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
}>('redisConfig');

const redisUrl = `redis://${redisConfig.host}:${redisConfig.port}`;

const redisClient = createClient({
  url: redisUrl,
  password: redisConfig.password,
  username: redisConfig.username,
  name: redisConfig.database,
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
