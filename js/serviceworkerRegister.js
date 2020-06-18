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
                    applicationServerKey: urlBase64ToUint8Array("BFuuwGsQJM21Qdgf6zgr86EjkmZCmNAlfkZU3ACuXNUnAnps6OOECmrXcJBC7cL2-lLpsNlldhVY5hiYddT7V_I")
                        // applicationServerKey: 'AAAAsLq8hPw:APA91bEOIXxmQKjC3DPu82X0xTx1EIYxNOl2WgmoJ8BvtSqIC09L5UMJj-PVsPXq-UOW98MU3Bhxzjoi64sR5F0WB0TzKQ6Eo0lPSxBq312-idha7KHsT3oldc8gCqf9lKXBISZmaPfY'
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