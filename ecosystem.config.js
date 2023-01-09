module.exports = {
    apps : [
        {
          name: "42TestTask",
          script: "/usr/local/bin/node-red",
          watch: true,
          env: {
            "VISA_MLE_KEY_ID": "eca211bd-ecb8-4f65-9b5c-80cec9abd5bd",
            "VISA_TRACE_AUDIT_NUMBER": 806805 ,
            "VISA_RET_NUMBER": "330000550000",
            "VISA_BUSINESS_AUDIT_APLIACTION_ID": "AA", 
            "VISA_CARD_ACCEPTOR": {
              "address": {
              "country": "USA",
              "zipCode": "94404",
              "county": "081",
              "state": "CA"
              },
              "idCode": "ABCD1234ABCD123",
              "name": "Visa Inc. USA-Foster City",
              "terminalId": "ABCD1234"
              },
             
              "VISA_ACQUIRING_INFO": {
              "acquirerCountryCode": "840",
              "acquiringBin": "408999",
            },
            "VISA_MLE_KEY": "/home/komigor/visa/privateKeyMLE.pem", 
            "VISA_MLE_CLIENT_CERT": "/home/komigor/visa/client_cert_MLE.pem",
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