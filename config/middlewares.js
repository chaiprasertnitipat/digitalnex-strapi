module.exports = [
  'strapi::logger',
  'strapi::errors',
{
  name: 'strapi::security',
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        'script-src-elem': ["'self'", 'cdn.jsdelivr.net'],
        upgradeInsecureRequests: null,
      },
    },
  },
},
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
