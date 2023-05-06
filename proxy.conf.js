const PROXY_CONFIG = [
  {
      context: [
          '/health-hospi-core'
      ],
      // target: 'http://78.46.11.10:8777',
      target: 'http://192.168.8.101:8777',
      secure: false
  }
]

module.exports = PROXY_CONFIG;
