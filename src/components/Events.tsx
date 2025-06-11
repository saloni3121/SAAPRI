import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Plus, X, Send } from 'lucide-react';

const Events = () => {
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
    location: '',
    type: '',
    contactEmail: '',
    organizerName: '',
    expectedAttendees: '',
    additionalInfo: ''
  });

  const events = [
    {
      date: "Mar 15",
      year: "2024",
      title: "Community Health Summit",
      location: "San Francisco, CA",
      time: "9:00 AM - 5:00 PM",
      attendees: "250+ expected",
      type: "Summit",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      date: "Mar 22",
      year: "2024", 
      title: "Policy Advocacy Workshop",
      location: "Virtual Event",
      time: "2:00 PM - 4:00 PM",
      attendees: "150+ expected",
      type: "Workshop",
      image: "https://images.pexels.com/photos/1181623/pexels-photo-1181623.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      date: "Apr 5",
      year: "2024",
      title: "Annual Gala & Awards",
      location: "New York, NY",
      time: "6:00 PM - 10:00 PM", 
      attendees: "500+ expected",
      type: "Gala",
      image: "https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      date: "Apr 18",
      year: "2024",
      title: "Youth Leadership Program",
      location: "Chicago, IL",
      time: "10:00 AM - 3:00 PM",
      attendees: "75+ expected",
      type: "Program",
      image: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitEvent = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Event submitted:', formData);
    
    // Reset form and close modal
    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
      location: '',
      type: '',
      contactEmail: '',
      organizerName: '',
      expectedAttendees: '',
      additionalInfo: ''
    });
    setShowSubmitForm(false);
    
    // Show success message (you could implement a toast notification here)
    alert('Thank you! Your event has been submitted for review. We\'ll contact you within 2-3 business days.');
  };

  return (
    <section id="events" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#222222] mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-[#666666] max-w-3xl mx-auto">
            Join us at our upcoming events to connect with community leaders, 
            learn about policy initiatives, and take action together.
          </p>
        </div>

        {/* Submit Event Button */}
        <div className="text-center mb-12">
          <button
            onClick={() => setShowSubmitForm(true)}
            className="bg-[#9b1b01] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#7a1501] transition-all duration-200 transform hover:scale-105 flex items-center space-x-2 mx-auto shadow-lg"
          >
            <Plus className="w-5 h-5" />
            <span>Submit Your Event</span>
          </button>
          <p className="text-sm text-[#666666] mt-2">
            Have a community event? Submit it for review and we'll feature it on our site.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-[#fafafa] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex">
                <div className="flex-shrink-0 w-32 bg-[#9b1b01] p-6 flex flex-col items-center justify-center text-white">
                  <div className="text-2xl font-bold">{event.date.split(' ')[1]}</div>
                  <div className="text-lg">{event.date.split(' ')[0]}</div>
                  <div className="text-sm opacity-80">{event.year}</div>
                </div>
                
                <div className="flex-1 p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block bg-[#9b1b01] text-white text-xs px-3 py-1 rounded-full font-medium mb-2">
                        {event.type}
                      </span>
                      <h3 className="text-xl font-bold text-[#222222] mb-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-[#666666] text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-[#9b1b01]" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-[#666666] text-sm">
                      <Clock className="w-4 h-4 mr-2 text-[#9b1b01]" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-[#666666] text-sm">
                      <Users className="w-4 h-4 mr-2 text-[#9b1b01]" />
                      {event.attendees}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="bg-[#9b1b01] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#7a1501] transition-colors duration-200">
                      Register
                    </button>
                    <button className="border border-[#9b1b01] text-[#9b1b01] px-6 py-2 rounded-lg font-medium hover:bg-[#9b1b01] hover:text-white transition-colors duration-200">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border-2 border-[#9b1b01] text-[#9b1b01] px-8 py-3 rounded-lg font-semibold hover:bg-[#9b1b01] hover:text-white transition-colors duration-200">
            View All Events
          </button>
        </div>
      </div>

      {/* Submit Event Modal */}
      {showSubmitForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-[#222222]">Submit Your Event</h3>
                <button
                  onClick={() => setShowSubmitForm(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-[#666666]" />
                </button>
              </div>
              <p className="text-[#666666] mt-2">
                Fill out the form below and we'll review your event for inclusion on our website.
              </p>
            </div>

            <form onSubmit={handleSubmitEvent} className="p-6 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-[#222222] mb-2">
                    Event Title *
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                    placeholder="Enter event title"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-[#222222] mb-2">
                    Event Type *
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                  >
                    <option value="">Select event type</option>
                    <option value="Workshop">Workshop</option>
                    <option value="Summit">Summit</option>
                    <option value="Conference">Conference</option>
                    <option value="Community Meeting">Community Meeting</option>
                    <option value="Fundraiser">Fundraiser</option>
                    <option value="Cultural Event">Cultural Event</option>
                    <option value="Educational">Educational</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium text-[#222222] mb-2">
                  Event Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                  placeholder="Describe your event, its purpose, and what attendees can expect"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-[#222222] mb-2">
                    Event Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-[#222222] mb-2">
                    Event Time *
                  </label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                    placeholder="e.g., 2:00 PM - 5:00 PM"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-[#222222] mb-2">
                  Location *
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                  placeholder="e.g., San Francisco, CA or Virtual Event"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organizerName" className="block text-sm font-medium text-[#222222] mb-2">
                    Organizer Name *
                  </label>
                  <input
                    type="text"
                    id="organizerName"
                    name="organizerName"
                    value={formData.organizerName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                    placeholder="Your name or organization"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail" className="block text-sm font-medium text-[#222222] mb-2">
                    Contact Email *
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    name="contactEmail"
                                        value={formData.contactEmail}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                    placeholder="Enter a contact email"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expectedAttendees" className="block text-sm font-medium text-[#222222] mb-2">
                    Expected Attendees
                  </label>
                  <input
                    type="text"
                    id="expectedAttendees"
                    name="expectedAttendees"
                    value={formData.expectedAttendees}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                    placeholder="e.g., 100+ attendees"
                  />
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium text-[#222222] mb-2">
                    Additional Info
                  </label>
                  <input
                    type="text"
                    id="additionalInfo"
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b1b01] focus:border-transparent"
                    placeholder="Website, RSVP link, etc."
                  />
                </div>
              </div>

              <div className="text-right">
                <button
                  type="submit"
                  className="inline-flex items-center bg-[#9b1b01] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#7a1501] transition-colors duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Submit Event
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
