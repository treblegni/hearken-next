const greetings = {
	morning: 'Good Morning, anything you want to tell me?',
	afternoon: 'Good Afternoon, anything you want to tell me?',
	evening: 'Good Evening, anything you want to tell me?',
	night: 'Beautiful Night, anything you want to tell me?',
}

export const currentTheme = () => {
	//Get time to set the theme
	const 
			today = new Date(),
			timeOfDay = today.getHours()
	
	if (timeOfDay >= 0 && timeOfDay < 12) return {time: 'morning',greeting: greetings.morning}
	if (timeOfDay >= 12 && timeOfDay < 16) return {time: 'afternoon',greeting: greetings.afternoon}
	if (timeOfDay >= 16 && timeOfDay < 21) return {time: 'evening',greeting: greetings.evening}
	if (timeOfDay >= 21 && timeOfDay < 24) return {time: 'night',greeting: greetings.night}
}