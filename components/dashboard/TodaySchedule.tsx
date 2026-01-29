import { ArrowRight } from "lucide-react";

interface ScheduleItem {
  id: string;
  courseCode: string;
  courseName: string;
  instructor: string;
  room: string;
  time: string;
  type: "lecture" | "lab";
  status: "next" | "later" | "current";
}

const schedule: ScheduleItem[] = [
  {
    id: "1",
    courseCode: "CS301",
    courseName: "AI Fundamentals",
    instructor: "Dr. Smith",
    room: "Room B-203",
    time: "11:00 - 12:30",
    type: "lab",
    status: "later",
  },
  {
    id: "2",
    courseCode: "CS302",
    courseName: "Advanced Algorithms",
    instructor: "Dr. Brown",
    room: "Room A-204",
    time: "09:00 - 10:30",
    type: "lecture",
    status: "next",
  },
];

const TodaySchedule = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm h-full">
      <h2 className="text-lg font-bold text-gray-900 mb-4">Today's Schedule</h2>

      <div className="space-y-3">
        {schedule.map((item) => (
          <div
            key={item.id}
            className={`p-3 rounded-lg border transition-all duration-200 ${
              item.status === 'next' 
                ? 'bg-blue-50 border-blue-200' 
                : 'bg-gray-50 border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="font-semibold text-sm mb-1" style={{
                  color: item.status === 'next' ? '#026892' : undefined
                }}>
                  {item.courseName}
                </h3>
                <p className="text-xs" style={{
                  color: item.status === 'next' ? '#026892' : undefined
                }}>
                  {item.room} • {item.time}
                </p>
              </div>
              {item.status === 'next' ? (
                <button 
                  className="px-3 py-1.5 text-white rounded-md text-xs font-medium hover:opacity-90 transition-colors"
                  style={{ backgroundColor: '#026892' }}
                >
                  Next
                </button>
              ) : (
                <button className="px-3 py-1.5 bg-white border border-gray-300 rounded-md text-xs font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                  View
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;