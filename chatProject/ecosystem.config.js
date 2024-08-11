const commonEnv = {
    PORT:process.env.PORT,        
    MYSQL_HOST:process.env.MYSQL_HOST,
    MYSQL_PORT:process.env.MYSQL_PORT,
    USER:process.env.USER,
    PWD:process.env.PWD,
    DBNAME:process.env.DBNAME,
    MONGODB_URL:process.env.MONGODB_URL,
    COLLECTION:process.env.COLLECTION,
  }
  
  module.exports = {
      apps : [{
        name: "TingChat",
        script: "./dist/main.js",
        args: "start",
        instances: 1,
        autorestart: true,
        watch: false,
        // max_memory_restart: "1G",
        env: {
          NODE_ENV: "development",
          BACKENDPORT:process.env.PORT,
          // MONGODB_URL:process.env.MONGODB_URL,        
          // DATABASE:process.env.DATABASE,
          // REDISDB:process.env.REDISDB, 
          // DBNAME:process.env.DBNAME,
          ...commonEnv,
        },
        env_production: {
          NODE_ENV: "production",
          BACKENDPORT:process.env.DEFAULT,
          // MONGODB_URL:process.env.MONGODB_URL,        
          // DATABASE:process.env.TDATABASE,
          // REDISDB:process.env.TREDISDB,
          // DBNAME:process.env.DBNAME,
          ...commonEnv,
      }
      }]
    };