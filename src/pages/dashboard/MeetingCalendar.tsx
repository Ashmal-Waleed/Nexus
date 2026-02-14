import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useState } from "react";



interface MeetingEvent {
  id: string;
  title: string;
  start: string;
  end?: string;
}

export default function MeetingCalendar() {
  const [events, setEvents] = useState<MeetingEvent[]>([
    {
      id: "1",
      title: "Demo Meeting",
      start: new Date().toISOString(),
    },
  ]);

  const handleDateSelect = (selectInfo: any) => {
    const title = prompt("Enter meeting title");

    if (title) {
      setEvents([
        ...events,
        {
          id: String(events.length + 1),
          title,
          start: selectInfo.startStr,
          end: selectInfo.endStr,
        },
      ]);
    }
  };



  return (

  <div className=" flex flex-col justify-center w-full max-w-6xl mx-auto mt-6 px-4  md:px-6 lg:px-8 sm:px-4 sm:text-sm">
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Meeting Calendar</h1>
      <p className="text-gray-600 mb-4">Schedule and manage your meetings with investors</p>
    </div>
    <div className=" flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center justify-center lg:justify-end gap-3">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={window.innerWidth < 768 ? "dayGridMonth" : "timeGridWeek"}
        selectable
        select={handleDateSelect}
        events={events}
        height="auto"
        aspectRatio={1.5}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
      />
    </div>
  </div>
);

}
