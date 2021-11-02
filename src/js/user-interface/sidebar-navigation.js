function selectNewsDE() {
    document.getElementById('tab-news').style.borderLeft = '5px var(--accent) solid';
    document.getElementById('nv-default-selected').style.top = '103px';
}
function selectClientDE() {
    document.getElementById('tab-client').style.borderLeft = '5px var(--accent) solid';
    document.getElementById('nv-default-selected').style.top = '138px';
}
function selectServersDE() {
    document.getElementById('tab-servers').style.borderLeft = '5px var(--accent) solid';
    document.getElementById('nv-default-selected').style.top = '173px';
}

function hideAll() {
    document.getElementById('tab-news').style.borderLeft = '5px transparent solid';
    document.getElementById('tab-client').style.borderLeft = '5px transparent solid';
    document.getElementById('tab-servers').style.borderLeft = '5px transparent solid';
}