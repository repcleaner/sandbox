export const state = () => ({
  name: null,
	email: null,
	clientPhone: null,
	business_name: null, 
	business_address: null, 
	business_industry_icon: null,
	business_review_link: null,
	business_telephone: null, 
	business_rating: null, 
	business_total_rating: null, 
	place_id: null,
	locations: [], // ARRAY OF LOCATION SHORTEN URLS
	token: null,
	verify_token: null,
	funnel_link: ''


});

export const mutations = {
	add_customer(state, {place_id, name, formatted_address, rating, total_rating, industry_icon, review_link }) {
		state.place_id = place_id;
		state.business_name = name;
		state.business_address = formatted_address;
		state.business_rating = rating;
		state.business_total_rating = total_rating;
		state.business_review_link = review_link;
		state.business_industry_icon = industry_icon;
	},
	remove_customer(state) {

		for(const key in state){
			if(!state.hasOwnProperty(key)) continue;

			if(key === 'exists'){
                state[key] = false;
                continue;
			}
			state[key] = null;
		}
	},
	set_locations(state, locations){
		console.log(locations);
		state.locations = locations;
	},

    set_registration_token(state, token){
        state.verify_token = token;
    },

    set_auth_token(state, token){
        state.token = token;
    },
	set_funnel_link(state, funnel_link){
		state.funnel_link = funnel_link;
	}
};

export const getters = {
	business: (state) => {
		return state.business_name
	}
};

export const actions = {
	add_customer: ({place_id, name, formatted_address, rating, total_rating, review_link, industry_icon}) => {
        place_id,
		name, 
		formatted_address, 
		rating, 
		total_rating, 
		review_link,
		industry_icon
	},
    remove_customer: () => {},
    set_locations: (locations) => {locations},
    set_registration_token: (token) => {token},
    set_auth_token: (token) => {token},
};
