var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BFuuwGsQJM21Qdgf6zgr86EjkmZCmNAlfkZU3ACuXNUnAnps6OOECmrXcJBC7cL2-lLpsNlldhVY5hiYddT7V_I",
    "privateKey": "VBT0iFu16Rx8Oq0m9rZPSiHnoZ4jpPmfqDU8UCX5MbE"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/c05qwKP5IOA:APA91bFn6Y58QMmdIe71-XfpoJTqrR6oaNXt7465470UWToxtzz1k2AalfiRB3iYFkOhZ5Aa8TKasNBYQC3astpSItTGTfnYUU9iIoVPKs1hluwTwVFdG5eAuABjIj6QHpe5ksDc4mrx",
    "keys": {
        "p256dh": "BMFrN5WlKqA2KvO32YkZ3IFTbG4KoD5IUa/m8PAJqxWAWHXfsZNBI+CoHlB5GZs5mhDFS/wxalnLYF8dB2qcb7k=",
        "auth": "xF27hFP9cABbCH+8j/BX2g=="
    }
};
var payload = 'How are you, guys? cek epl standings now!';
var options = {
    gcmAPIKey: '759047161084',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);