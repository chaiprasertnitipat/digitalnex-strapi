module.exports = ({env}) => ({

	'strapi-plugin-populate-deep': {
    		config: {
      			defaultDepth: 15, // Default is 5
    		}
  	},

	'strapi-code-editor-custom-field': {
    		enabled: true,
  	},

	"keycloak": {
  		"provider": "keycloak",
  		"clientId": "strapi",
 	 	"clientSecret": "l1X39C87f1SM4WWoefD1okVzUtghzs6i",
  		"host": "https://directus.digitalnex.com",
  		"callback": "https://strapi.digitalnex.com/api/connect/keycloak/callback",
  		"scope": [],
  		"redirectUri": "https://strapi.digitalnex.com/api/connect/keycloak/callback"
	},

	"strapi-google-auth": {
    	  enabled: true,
  	},

	/*'import-export-entries': {
    	  enabled: true,
    	  config: {
      	    // See `Config` section.
    	  },
  	},*/

	"rest-cache": {
    	  config: {
      	    provider: {
       	      name: "memory",
              options: {
          	max: 32767,
          	maxAge: 3600,
              },
      	    },
      	    strategy: {
       	      contentTypes: [
         	// list of Content-Types UID to cache
          	"api::page.page",
          	"api::custom-code.custom-code",
              ],
      	    },
    	  },
  	},

	ezforms: {
    		config: {
			enableFormName: true,
      			captchaProvider: {
        			name: "recaptcha",
  				config: {
    					secretKey: "6LeIBngpAAAAAO9gRWEIh1-5l8fGdG_C2XNTcFGA",
    					minimumScore: 0.5
  				}
      			},
      			notificationProviders: [
				{
  					name: 'email',
  					enabled: true,
  					config: {
    						subject: "Test Form Email", // Optional
    						from: 'no-reply@truecorp.co.th' // Required
  					}
				},
			]
    		}
	}

});

