var url = window.location.href;
if(url.startsWith("https://falixnodes.net/")
|| url.startsWith("https://client.falixnodes.net/")
|| url.startsWith("https://panel.falixnodes.net/")
|| url.startsWith("https://start.falixnodes.net/")
|| url.startsWith("https://help.falixnodes.net/")
|| url.startsWith("https://software.falixnodes.net/")
|| url.startsWith("https://discord.com/")
|| url.startsWith("http://localhost:9999/domain-access.html")
|| url.startsWith("https://wl.hetrixtools.com/r/64ff7310029db59cdd2e69792cca6182/")
|| url.startsWith("https://falixnodes.medium.com/")
)
{} else {setTimeout(() => {location.href = 'http://localhost:9999/domain-access.html'}, 500);}