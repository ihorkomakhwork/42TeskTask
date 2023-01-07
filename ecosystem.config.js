module.exports = {
    apps : [
        {
          name: "42TestTask",
          script: "/usr/local/bin/node-red",
          watch: true,
          env: {
            "VISA_MLE_KEY": "eca211bd-ecb8-4f65-9b5c-80cec9abd5bd", 
            "VISA_MLE_SERVER_CERT": "/home/komigor/visa/server_cert_MLE.pem",              
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