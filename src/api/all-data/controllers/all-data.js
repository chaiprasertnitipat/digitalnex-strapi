    module.exports = {
      async allData(ctx, next) {
        try {
          const data = await strapi
            .service("api::all-data.all-data")
            .allData();
          console.log(data, "data");
    
          ctx.body = data;
        } catch (err) {
          ctx.badRequest("Post report controller error", { moreDetails: err });
        }
      },
    };
