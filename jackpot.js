javascript:(() => {
  const urls = {
    'Vote 1': 'https://servers-minecraft.net/server-jackpotmc.24188',
    'Vote 2': 'https://minecraftservers.org/vote/622448',
    'Vote 3': 'https://topminecraftservers.org/vote/20274',
    'Vote 4': 'https://minecraft-mp.com/server/292628/vote/',
    'Vote 5': 'https://minecraft-server-list.com/server/481273/vote/',
    'Vote 6': 'https://best-minecraft-servers.co/server-jackpotmc.796/vote',
    'Vote 7': 'https://minecraftpocket-servers.com/server/123120/'
  };
  const urlsHtml = Object.entries(urls).map(([label, url]) => `<a href="${url}" target="_blank">${label}</a>`).join('<br/>');
  const title = 'JackpotMC';
  window.open().document.write(`<title>${title}</title><h1>${title}</h1>${urlsHtml}`);
})();