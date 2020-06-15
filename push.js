var webPush = require('web-push');

const vapidKeys = {
    "publicKey": "BP3BnjW_i7wGw6xqLkp0TKyERy7SOqC2j58C-psv0cqyZ1bnGBxGDHu60Eb_oB389S4J3v6I5GP_fntGp8NF7nQ",
    "privateKey": "bfbeeRLy6fPfEZxXDSrC04yAS-HtEdVhfIIg-FRkXkA"
};


webPush.setVapidDetails(
    'mailto:example@yourdomain.org',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/diLXU28WTf0:APA91bEghimH5x-CGQFn8H4viaEGQpH8mBRPrglcXwyI8N57hjaAP5P93emYdKZC5qngKHSvmHO47WpDQT276pqY25TXXI09kmhhzh-jIsSKU-7RMt5xkV0Ms_VYMg8DSmkKhVgro7s4",
    "keys": {
        "p256dh": "BAFplUmKocWV7F1qErlajUWNdghkyaNHH3kvpez7uw+br0LMQ+CdoUp8Smfl3O4tv81lK/3zJfXTmenwZmkyvqw=",
        "auth": "j0LDTkD2XWmuqZNC6pXZHw=="
    }
};
var payload = 'Hei, Where Are You! Check Standings EPL Now!';

var options = {
    gcmAPIKey: '489407451958',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);