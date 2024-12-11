module.exports = {
  allData: async () => {
    try {

      	let collections = ["page", "news", "event", "service", "form", "popup-event", "web-menu"];
	let ret = {"collections": collections};

     	for(i = 0; i < collections.length; i++) {

	  let collection = collections[i];		

      	  let rows = await strapi.entityService.findMany(
            "api::"+ collection +"."+ collection,
            {
              fields: ["*"],
              populate: "deep"
            }
          );

	  ret[collection] = rows;
	}

     
	return ret;

    } catch (err) {
      return err;
    }
  },
};
