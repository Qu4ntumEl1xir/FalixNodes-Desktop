var ifConnected = window.navigator.onLine;
var updateServer = "https://updates.korbsstudio.com/111connect.png";
var updateServerCR = new Image();

checkNetwork();

function checkNetwork_repeat() {
    setTimeout(() => {
        if (ifConnected) {
            console.log('An internet connection is available.');
            document.getElementById('checklist-one-failing').style.display = 'none';
            checkUpdateServer();
        } else {
            console.log('An internet connection is not available.');
            checkNetwork_repeat();
        }
    }, 5000);
}

function checkNetwork() {
    document.getElementById('checklist-one').style.display = 'inherit';
    if (ifConnected) {
        console.log('An internet connection is available.');
        checkUpdateServer();
    } else {
        console.log('An internet connection is not available.');
        document.getElementById('checklist-one').style.display = 'none';
        document.getElementById('checklist-one-failing').style.display = 'inherit';
        checkNetwork_repeat();
    }
}

function checkUpdateServer() {
    document.getElementById('checklist-one').style.display = 'none';
    document.getElementById('checklist-one-failing').style.display = 'none';
    document.getElementById('checklist-two').style.display = 'inherit';
    updateServerCR.src = updateServer;
    updateServerCR.onload = function(){carryOn();}
    updateServerCR.onerror = function(){carryOn();}
}

function carryOn() {
    document.getElementById('checklist-two').style.display = 'none';
    document.getElementById('checklist-three').style.display = 'inherit';
    setTimeout(() => {
        window.api.send('launch')
    }, 2500);
}