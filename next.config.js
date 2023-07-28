const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        PUBLIC_URL: "https://localhost:3000",
        SERVER_URL: "http://127.0.0.1:5000",
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      PUBLIC_URL: "http://2clickmail.com",
      SERVER_URL: "https://twoclickmail.fly.dev",
    }
  }
}
