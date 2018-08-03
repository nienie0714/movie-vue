let api = {
  getDeviceInfo: { url: 'getDeviceInfo2', cache: true },
  getPortSize: { url: 'getPortSize', cache: false },
  forecast: { url: 'forecast/', cache: false }
};

// for (var k in api) {
//   let urlHost = window.htp.apihost;
//   let url = api[k].url;

//   if (process.env.NODE_ENV === 'development') {
//     urlHost = '/s6/weather/';
//   }
//   api[k].url = urlHost + url;
// }

export default api;
