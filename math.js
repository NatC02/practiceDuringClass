const operatingSystems = 2;

const linuxOS = {
    recentBrowsers: 3,
    whyLinux: 'Using linux for productivity',
    extensionsFirefox: 8,
    extensionsChrome: 9,
    extensionsOpera: 2,
    totalHoursDuringLifeTime: 1
}

const windowsOS = {
    recentBrowsers: 11,
    whyWindows: 'Using Windows for games and programs',
    totalPrograms: 134,
    totalhours: 124,
}

function whyWindows() {
    localStorage.setItem('whyWindows', windowsOS.whyWindows);
}

function totalRecentBrowsers(windowsOS, linuxOS) {
    return windowsOS.recentBrowsers + linuxOS.recentBrowsers;
}