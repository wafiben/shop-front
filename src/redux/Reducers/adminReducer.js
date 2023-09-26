import {
	SEND_MESSAGE_TO_ADMIN_LOADING,
	SENDING_MESSAGE_SUCCESS,
	ERROR_MESSAGE_SENDING,
	GET_All_COMPANIES_LOADING,
	GET_ALL_COMPANIES,
	GET_LENGTH_COMPANY_INFO_LOADING,
	GET_LENGTH_COMPANY_INFO,
	GET_ALL_BANNED_COMPANIES_LOADING,
	GET_ALL_BANNED_COMPANIES,
	GET_ALL_VERIFIED_COMPANIES_LOADING,
	GET_ALL_VERIFIED_COMPANIES,
	GET_ALL_CLIENT_LOADING,
	GET_ALL_CLIENT,
	GET_BANN_CLIENT_LOADING,
	GET_BANN_CLIENT,
	GET_ACTIVATED_CLIENT_LOADING,
	GET_ACTIVATED_CLIENT,
	GET_LENGTH_CLIENT_INFO_LOADING,
	GET_LENGTH_CLIENT_INFO,
	GET_MESSAGES_LOADING,
	GET_MESSAGES,
	DELETE_MESSAGE_LOADING,
	DELETE_MESSAGE
} from "../types";
const initState={
	sendMessageLoading: false,
	sendMessage: "",
	company: {
		loading: false,
		companyBannedCount: 0,
		allCompaniesCount: 0,
		activatedCompaniesCount: 0,
		companies: {
			loading: false,
			all: [],
			ban: [],
			activ: [],
		},
	},
	clients: {
		loading: false,
		all: [],
		ban: [],
		activ: [],
		count: {
			ban: 0,
			all: 0,
			activ: 0,
			loading: false,
		},
	},
	msg: {
		messages: [],
		loading: false

	}
};
const adminReducer=(state=initState,action) => {
	switch(action.type) {
		case GET_All_COMPANIES_LOADING:
			return {
				...state,
				company: {
					...state.company,
					companies: {...state.company.companies,loading: true},
				},
			};
		case GET_ALL_COMPANIES:
			return {
				...state,
				company: {
					...state.company,
					companies: {
						...state.company.companies,
						loading: false,
						all: action.payload,
					},
				},
			};

		case GET_ALL_BANNED_COMPANIES_LOADING:
			return {
				...state,
				company: {
					...state.company,
					companies: {...state.company.companies,loading: true},
				},
			};

		case GET_ALL_BANNED_COMPANIES:
			return {
				...state,
				company: {
					...state.company,
					companies: {
						...state.company.companies,
						loading: false,
						ban: action.payload,
					},
				},
			};

		case GET_ALL_VERIFIED_COMPANIES_LOADING:
			return {
				...state,
				company: {
					...state.company,
					companies: {...state.company.companies,loading: true},
				},
			};
		case GET_ALL_VERIFIED_COMPANIES:
			return {
				...state,
				company: {
					...state.company,
					companies: {
						...state.company.companies,
						loading: false,
						activ: action.payload,
					},
				},
			};

		case GET_LENGTH_COMPANY_INFO_LOADING:
			return {
				...state,
				company: {...state.company,loading: true},
			};
		case GET_LENGTH_COMPANY_INFO:
			return {
				...state,
				company: {
					...state.company,
					loading: false,
					companyBannedCount: action.payload.companyBannedCount,
					allCompaniesCount: action.payload.allCompaniesCount,
					activatedCompaniesCount: action.payload.activatedCompaniesCount,
				},
			};



		// eslint-disable-next-line no-fallthrough
		case SEND_MESSAGE_TO_ADMIN_LOADING:
			return {...state,sendMessageLoading: true};
		case SENDING_MESSAGE_SUCCESS:
			return {
				...state,
				sendMessageLoading: false,
				sendMessage:
					"Your message has been sucessfully sended to our service we will contact you",
			};
		case ERROR_MESSAGE_SENDING:
			return {
				...state,
				sendMessageLoading: false,
				sendMessage: "Error",
			};

		case GET_ALL_CLIENT_LOADING:
			return {
				...state,
				clients: {
					...state.clients,
					loading: true,
				},
			};
		case GET_ALL_CLIENT:
			return {
				...state,
				clients: {
					...state.clients,
					loading: false,
					all: action.payload,
				},
			};
		case GET_BANN_CLIENT_LOADING:
			return {
				...state,
				clients: {
					...state.clients,
					loading: true,
				},
			};
		case GET_BANN_CLIENT:
			return {
				...state,
				clients: {
					...state.clients,
					loading: false,
					ban: action.payload,
				},
			};
		case GET_ACTIVATED_CLIENT_LOADING:
			return {
				...state,
				clients: {
					...state.clients,
					loading: true,
				},
			};
		case GET_ACTIVATED_CLIENT:
			return {
				...state,
				clients: {
					...state.clients,
					loading: false,
					activ: action.payload,
				},
			};

		case GET_LENGTH_CLIENT_INFO_LOADING:
			return {
				...state,
				clients: {
					...state.clients,
					count: {
						...state.clients.count,
						loading: true,
					},
				},
			};

		case GET_LENGTH_CLIENT_INFO:
			return {
				...state,
				clients: {
					...state.clients,
					count: {
						...state.clients.count,
						loading: false,
						ban: action.payload.clientBannedCount,
						all: action.payload.allClientsCount,
						activ: action.payload.activatedClientsCount,
					},
				},
			};


		case GET_MESSAGES:
			return {
				...state,
				msg: {
					...state.msg,
					loading: false,
					messages: action.payload
				},
			};
		case GET_MESSAGES_LOADING:
			return {
				...state,
				msg: {
					...state.msg,
					loading: true
				},
			};


		case DELETE_MESSAGE_LOADING:
			return {
				...state,
				msg: {
					...state.msg,
					loading: true,
				},
			};
		case DELETE_MESSAGE:
			return {
				...state,
				msg: {
					...state.msg,
					loading: false
				},
			};


		default:
			return state;
	}
};

export default adminReducer;
