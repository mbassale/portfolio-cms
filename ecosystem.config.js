module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/var/www/cms.mbassale.cl',
      script: 'npm',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        HOST: '0.0.0.0',
        PORT: 1337,
        DATABASE_FILENAME: '.tmp/data.db',
      },
    },
  ],
};
