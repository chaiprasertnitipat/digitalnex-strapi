module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/all-data',
      handler: 'all-data.allData',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
