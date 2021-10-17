function sidebarHeader_default() {
    document.getElementById('nv-default').style.display = 'grid';
    document.getElementById('nv-notifications').style.display = 'none';
    document.getElementById('nv-settings').style.display = 'none';

    document.getElementById('sb-header-selected').style.margin = '7px 7px 7px 7px';
    document.getElementById('sb-header-selected').style.width = '63px';
}

function sidebarHeader_notifications() {
    document.getElementById('nv-default').style.display = 'none';
    document.getElementById('nv-notifications').style.display = 'grid';
    document.getElementById('nv-settings').style.display = 'none';

    document.getElementById('sb-header-selected').style.margin = '7px 7px 7px 161.3px';
    document.getElementById('sb-header-selected').style.width = '30px';
}

function sidebarHeader_settings() {
    document.getElementById('nv-default').style.display = 'none';
    document.getElementById('nv-notifications').style.display = 'none';
    document.getElementById('nv-settings').style.display = 'grid';

    document.getElementById('sb-header-selected').style.margin = '7px 7px 7px 191.3px';
    document.getElementById('sb-header-selected').style.width = '30px';
}