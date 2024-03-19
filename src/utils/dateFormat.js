import moment from "moment";

export const formatDate=(date) => {
	const inputTimestamp=moment(date); 
	const formattedDate=inputTimestamp.format("MMMM DD, YYYY HH:mm");
	return formattedDate;
};
