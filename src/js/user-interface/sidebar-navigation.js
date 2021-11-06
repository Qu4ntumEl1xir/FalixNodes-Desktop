// Settings
function selectAbout() {
    selectNone_settings();
    document.getElementById('about-settings').style.display = 'inherit';
    document.getElementById('selected-settings').style.top = '15px';
}

function selectAccount() {
    selectNone_settings();
    document.getElementById('account-settings').style.display = 'inherit';
    document.getElementById('selected-settings').style.top = '65px';
}

function selectNone_settings() {
    document.getElementById('about-settings').style.display = 'none';
    document.getElementById('account-settings').style.display = 'none';
}