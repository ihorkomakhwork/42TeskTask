module.exports = {
    apps : [
        {
          name: "42TestTask",
          script: "/usr/local/bin/node-red",
          watch: true,
          env: {
              "PORT": 3000,
              "NODE_ENV": "development"
          }
        }
    ]
  }