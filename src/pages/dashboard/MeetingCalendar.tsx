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
    <div   className="absolute inset-x-20 top-60 z-10 "   style={{ background: "#fff", padding: "16px", borderRadius: "8px" }}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        selectable
        select={handleDateSelect}
        events={events}
        height="600px"
      />
    </div>
  );
}
