let api = {
  getDeviceInfo: { url: 'getDeviceInfo2', cache: true },
  getPortSize: { url: 'getPortSize', cache: false },
  forecast: { url: '/s6/weather/forecast/', cache: false },
  hourly: { url: '/s6/weather/hourly/', cache: false }
};

for (var k in api) {
  let urlHost = window.htp.apihost;
  let url = api[k].url;

  if (process.env.NODE_ENV === 'development') {
    urlHost = '/proxy';
  }
  api[k].url = urlHost + url;
}

export default api;
