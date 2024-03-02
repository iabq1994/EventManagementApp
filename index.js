class EventManagementApp {
  constructor() {
    this.events = [];
    this.attendees = [];
  }

  createEvent(eventDetails) {
    // Create a new event with the provided details
    const newEvent = {
      id: this.generateUniqueId(),
      details: eventDetails,
      attendees: [],
    };

    this.events.push(newEvent);
    return newEvent.id;
  }

  registerAttendee(eventId, attendeeDetails) {
    // Find the event with the given ID
    const event = this.events.find((event) => event.id === eventId);

    if (event) {
      // Create a new attendee with the provided details
      const newAttendee = {
        id: this.generateUniqueId(),
        details: attendeeDetails,
      };

      event.attendees.push(newAttendee);
      this.attendees.push(newAttendee);
      return newAttendee.id;
    }

    return null;
  }

  promoteEvent(eventId) {
    // Find the event with the given ID
    const event = this.events.find((event) => event.id === eventId);

    if (event) {
      // Promote the event by updating its status or performing other actions
      event.details.status = 'Promoted';
      return true;
    }

    return false;
  }

  manageAttendees(eventId) {
    // Find the event with the given ID
    const event = this.events.find((event) => event.id === eventId);

    if (event) {
      // Return the list of attendees for the event
      return event.attendees;
    }

    return [];
  }

  generateUniqueId() {
    // Generate a unique ID for events and attendees
    return Math.random().toString(36).substr(2, 9);
  }
}

// Example usage
const app = new EventManagementApp();

const eventId = app.createEvent({
  name: 'Music Festival',
  date: '2024-07-15',
  location: 'City Park',
});

const attendeeId = app.registerAttendee(eventId, {
  name: 'John Doe',
  email: 'johndoe@example.com',
});

app.promoteEvent(eventId);

const attendees = app.manageAttendees(eventId);

console.log('Event ID:', eventId);
console.log('Attendee ID:', attendeeId);
console.log('Attendees:', attendees);
