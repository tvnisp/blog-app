export function getFormatedDate(inputDate: Date) {
	const monthNames = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	];

	const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

	const date = new Date(inputDate);
	const day = date.getDate();
	const month = monthNames[date.getMonth()];
	const year = date.getFullYear();
	const dayOfWeekAbbreviation = dayOfWeek[date.getDay()];

	// Get the time components (hours and minutes)
	const hours = date.getHours().toString().padStart(2, '0');
	const minutes = date.getMinutes().toString().padStart(2, '0');

	return `${dayOfWeekAbbreviation}, ${day} ${month} ${year} ${hours}:${minutes}`;
}
