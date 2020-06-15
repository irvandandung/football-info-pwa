const urlBase64ToUint8Array = (base64String) => {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/-/g, '+')
        .replace(/_/g, '/');
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}
const registerServiceWorker = async _ => {
    try {
        const registration = await navigator.serviceWorker
            .register("/service-worker.js");
        console.log("register success");
        return registration;
    } catch (e) {
        console.log("register not success");
    }
}

const requestPermission = _ => {
    Notification.requestPermission().then(function(result) {
        if (result === "denied") {
            console.log("notification fitur denied.");
            return;
        } else if (result === "default") {
            console.error("User close box dialog.");
            return;
        }
        navigator.serviceWorker.ready.then(function() {
            navigator.serviceWorker.getRegistration().then(function(registration) {
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array("BP3BnjW_i7wGw6xqLkp0TKyERy7SOqC2j58C-psv0cqyZ1bnGBxGDHu60Eb_oB389S4J3v6I5GP_fntGp8NF7nQ")
                }).then(function(subscribe) {
                    console.log('Success subscribe with endpoint: ', subscribe.endpoint);
                    console.log('Success subscribe with p256dh key: ', btoa(String.fromCharCode.apply(
                        null, new Uint8Array(subscribe.getKey('p256dh')))));
                    console.log('Success subscribe with auth key: ', btoa(String.fromCharCode.apply(
                        null, new Uint8Array(subscribe.getKey('auth')))));
                }).catch(function(e) {
                    console.error('can not do subscribe', e.message);
                });
            });
        });
    });
}

export {
    registerServiceWorker,
    requestPermission
}