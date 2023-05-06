const PROXY_CONFIG = [
  {
      context: [
          '/loto-service-customers'
      ],
      // target: 'http://78.46.11.10:8777',
      target: 'http://192.198.148.158:8777',
      secure: false
  }
]

module.exports = PROXY_CONFIG;
