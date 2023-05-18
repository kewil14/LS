const PROXY_CONFIG = [
  {
      context: [
          '/health-hospi-core'
      ],
      // target: 'http://78.46.11.10:8777',
      target: 'http://161.97.80.60:8777',
      secure: false
  }
]

module.exports = PROXY_CONFIG;
