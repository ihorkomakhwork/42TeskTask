module.exports = {
    apps : [
        {
          name: "42TestTask",
          script: "/usr/local/bin/node-red",
          watch: true,
          env: {
            "VISA_AUTH_ID": "XUODRN89PMITTDKCWHTJ21M862xJYdnMaV2B2ivXUZeGEB7bM",
            "VISA_AUTH_PASSWORD": "7S8ZTHJcr4B1QH",
            "VISA_HOST": "https://sandbox.api.visa.com/",
            "VISA_AUTH_PRIVATE_KEY": "/home/komigor/visa/privateKey.pem",
            "VISA_AUTH_CERT": "/home/komigor/visa/cert.pem",
            "PORT": 1860,
            "NODE_ENV": "development"
            }
        }
    ]
  }