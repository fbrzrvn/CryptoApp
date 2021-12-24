import dotenv from 'dotenv';

dotenv.config();

const { CLIENT_URL, PORT } = process.env;

const config = {
  app: {
    port: PORT || 4000,
  },
  client: {
    url: CLIENT_URL || 'http://localhost:3000',
  },
};

export default config;
