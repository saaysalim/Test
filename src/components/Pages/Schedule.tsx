// Schedule.tsx
import React from 'react';

interface ScheduleItem {
  id: number;
  date: string;
  time: string;
  event: string;
}
const mockSchedule: ScheduleItem[] = [
  { id: 1, date: '2024-02-15', time: '10:00', event: 'React Basics Workshop' },
  { id: 2, date: '2024-02-16', time: '11:00', event: 'Advanced React Patterns' },
  { id: 3, date: '2024-02-17', time: '09:00', event: 'State Management Overview' },
];

const Schedule: React.FC = () => {
  return (
    <div>
      <h2>Schedule</h2>
      <ul>
        {mockSchedule.map((item) => (
          <li key={item.id}>
            <strong>{item.date} {item.time}</strong>: {item.event}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
