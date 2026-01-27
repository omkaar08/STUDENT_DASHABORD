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
    courseCode: "CS302",
    courseName: "Data Structures",
    instructor: "Dr. Brown",
    room: "Room 304",
    time: "10:00 AM — 11:00 AM",
    type: "lecture",
    status: "next",
  },
  {
    id: "2",
    courseCode: "CS301",
    courseName: "Database Systems Lab",
    instructor: "Dr. Smith",
    room: "Lab 1",
    time: "02:00 PM — 03:00 PM",
    type: "lab",
    status: "later",
  },
];

const TodaySchedule = () => {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 h-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-base font-bold text-gray-900">Today&apos;s Schedule</h2>
        <button className="text-xs font-medium text-gray-600 hover:text-gray-800 flex items-center gap-1">
          View Full Timetable <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="space-y-2">
        {schedule.map((item) => (
          <div
            key={item.id}
            className={`flex items-center justify-between p-3 rounded-xl border transition-all duration-200 ${
              item.status === "next" 
                ? "border-blue-200 bg-blue-50/50" 
                : "border-gray-100 bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm mb-0.5">
                {item.courseCode} — {item.courseName}
              </h3>
              <p className="text-xs text-gray-500">
                {item.room} — {item.time}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                item.status === "next" 
                  ? "bg-blue-100 text-blue-700" 
                  : "bg-gray-100 text-gray-600"
              }`}>
                {item.status === "next" ? "Next" : "Later"}
              </span>
              <span className="px-1.5 py-0.5 rounded text-xs font-medium bg-gray-200 text-gray-700">
                {item.type === "lecture" ? "Lecture" : "Lab"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaySchedule;