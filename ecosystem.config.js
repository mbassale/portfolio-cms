module.exports = {
  apps: [
    {
      name: 'strapi',
      cwd: '/var/www/cms.mbassale.cl',
      script: 'yarn',
      args: 'start',
      env: {
        NODE_ENV: 'production',
        DATABASE_FILENAME: '.tmp/data.db',
      },
    },
  ],
};
