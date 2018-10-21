require('dotenv').config()

module.exports = {
  useFileSystemPublicRoutes: false,
  publicRuntimeConfig: {
    STUDENT_SERVICE: process.env.STUDENT_SERVICE,
    ENROLL_SERVICE: process.env.STUDENT_SERVICE,
  },
  serverRuntimeConfig: {
    JWT_SECRET: process.env.JWT_SECRET,
    REDIS_HOST: process.env.REDIS_HOST,
    REDIS_PORT: process.env.REDIS_PORT,
    REDIS_PASSWORD: process.env.REDIS_PASSWORD,
    ALCHEMIST_TOKEN: process.env.ALCHEMIST_TOKEN,
  },
}
