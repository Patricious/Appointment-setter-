var event = {
    name: "Set Appointment",
    organizer: "Teach Me2",
    duration: 60,
    description: "Now you can set one hour appointments directly with your tutors",
    date: new Date(),
    time: "9:00",
    attendees: []
};

sessionStorage.setItem("eventObj", JSON.stringify(event));