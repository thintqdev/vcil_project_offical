"use client";
import React, { useEffect, useState } from "react";

interface Event {
  id: number;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  slug: string;
  registrationLink: string;
  createdAt: string;
  updatedAt: string;
}

const HomeUpcomingEvent: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          "http://localhost:3333/api/programs/upcoming"
        );
        const data = await response.json();
        setEvents(data.data.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="text-center w-full sm:w-3/4 mx-auto">
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-green-500">
        Upcoming Event
      </h2>
      <div className="flex justify-center">
        <hr className="w-1/4 sm:w-1/6 md:w-1/12 my-2 sm:my-4 md:my-6" />
      </div>
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div
              key={event.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-justify">
                <h3 className="text-lg font-bold text-gray-800">
                  {event.name.toUpperCase()}
                </h3>
                <p className="text-sm text-gray-500 mb-2">
                  {new Date(event.createdAt).toLocaleDateString()}
                </p>
                <p className="text-gray-600 mb-4">{event.shortDescription}</p>
                <a
                  href={event.registrationLink}
                  className="text-green-600 hover:underline font-semibold"
                >
                  LEARN MORE &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeUpcomingEvent;
