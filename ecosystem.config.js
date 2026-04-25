module.exports = {
  apps: [{
    name: 'tenta-web',
    script: 'node_modules/.bin/next',
    args: 'start',
    env: {
      NODE_ENV: 'production',
      PORT: 3000,
    }
  }]
};
