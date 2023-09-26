import axios from "axios"
import {SEND_MESSAGE_TO_ADMIN_LOADING,ERROR_MESSAGE_SENDING,SENDING_MESSAGE_SUCCESS} from "../types"
import {baseUrl} from './../../config';

export const contactServiceMessage=(msg) => async (dispatch) => {
	try {
		dispatch({type: SEND_MESSAGE_TO_ADMIN_LOADING})
		await axios.post(`${baseUrl}/admin_message`,msg)
		dispatch({type: SENDING_MESSAGE_SUCCESS})
	} catch(error) {
		dispatch({type: ERROR_MESSAGE_SENDING})
	}
}