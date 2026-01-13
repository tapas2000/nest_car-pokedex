export const EnvConfiguration = () => ({
  DEFAULT_LIMIT: +process.env.DEFAULT_LIMIT || 7,
  PORT: +process.env.PORT || 3000,
  URL_API_PREFIX: process.env.URL_API_PREFIX,
  MONGODB: process.env.MONGODB,
});
