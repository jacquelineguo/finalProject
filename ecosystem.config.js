module.exports = {
    apps : [
    {
      name: "app",
      cwd: "./client",
      script: "npm",
      args: "run start",
      autorestart: true,
      watch: false,
      max_memory_restart: "1G",
        env_production: {
          "PORT": 3000,//you can choose
          "NODE_ENV": "production",
        }
    },
      {
        name: "project",
      script: "./server/index.js",
        watch: true,
        env: {
          "PORT": 8080,//you can choose
          "NODE_ENV": "development"
        },
        env_production: {
          "PORT": 5000,//you can choose
          "NODE_ENV": "production",
        }
      }
    ]
}
