export default {
  mongodb: {
    DB_NAME: process.env.DB_NAME || "lacle_dev",
    DB_HOST: process.env.DB_HOST || "localhost",
    DB_PORT: process.env.DB_PORT || "27017",
    DB_AUTH: process.env.DB_AUTH !== undefined ? process.env.DB_AUTH : false,
    DB_USER: process.env.DB_USER || "lacle",
    DB_PASS: process.env.DB_PASS || "",
    DB_PROTOCOL: process.env.DB_PROTOCOL || "mongodb://",
  },
  jwt: {
    JWT_SECRET: process.env.JWT_SECRET || "",
  },
  DEFAULT_TIMEZONE: process.env.DEFAULT_TIMEZONE || "Europe/Paris",
  PORT: process.env.PORT || 8081,
};
