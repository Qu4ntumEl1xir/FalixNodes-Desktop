function sidebarHeader_default() {
    document.getElementById('nv-default').style.display = 'grid';
    document.getElementById('nv-notifications').style.display = 'none';
    document.getElementById('nv-settings').style.display = 'none';

    document.getElementById('sb-header-text-default').style.fontSize = '14px';
    document.getElementById('sb-header-text-notifications').style.fontSize = '0px';
    document.getElementById('sb-header-text-settings').style.fontSize = '0px';

    document.getElementById('sb-header-selected').style.margin = '7px 7px 7px 7px';
    document.getElementById('sb-header-selected').style.width = '121px';
}

function sidebarHeader_notifications() {
    document.getElementById('nv-default').style.display = 'none';
    document.getElementById('nv-notifications').style.display = 'grid';
    document.getElementById('nv-settings').style.display = 'none';

    document.getElementById('sb-header-text-default').style.fontSize = '0px';
    document.getElementById('sb-header-text-notifications').style.fontSize = '14px';
    document.getElementById('sb-header-text-settings').style.fontSize = '0px';

    document.getElementById('sb-header-selected').style.margin = '7px 7px 7px 125.3px';
    document.getElementById('sb-header-selected').style.width = '111px';
}

function sidebarHeader_settings() {
    document.getElementById('nv-default').style.display = 'none';
    document.getElementById('nv-notifications').style.display = 'none';
    document.getElementById('nv-settings').style.display = 'grid';

    document.getElementById('sb-header-text-default').style.fontSize = '0px';
    document.getElementById('sb-header-text-notifications').style.fontSize = '0px';
    document.getElementById('sb-header-text-settings').style.fontSize = '14px';

    document.getElementById('sb-header-selected').style.margin = '7px 7px 7px 190.3px';
    document.getElementById('sb-header-selected').style.width = '93px';
}