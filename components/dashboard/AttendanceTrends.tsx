import { ArrowRight, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const AttendanceTrends = () => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const dailyData = [
    { day: "Data Structures", attendance: 92 },
    { day: "Database Systems", attendance: 85 },
    { day: "Computer Networks", attendance: 88 },
    { day: "Software Engineering", attendance: 90 },
    { day: "Mathematics", attendance: 86 }
  ];

  const overallAttendance = 87;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Attendance Trends</h2>
          <p className="text-xs text-gray-500 mt-1">Course-wise attendance overview</p>
        </div>
        <button className="text-sm font-medium text-[#026892] hover:text-[#024a73] flex items-center gap-1">
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Stats Summary */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{overallAttendance}%</div>
            <div className="text-xs text-gray-500">Overall</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">5</div>
            <div className="text-xs text-gray-500">Courses</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-green-600">4</div>
            <div className="text-xs text-gray-500">Above 85%</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-red-600">1</div>
            <div className="text-xs text-gray-500">Below 85%</div>
          </div>
        </div>

        {/* Bar Chart */}
        <div className="flex-1 flex items-end justify-center">
          <div className="flex items-end gap-4 w-full max-w-md" style={{ height: '180px' }}>
            {dailyData.map((course, index) => {
              const barHeight = isLoaded ? (course.attendance / 100) * 140 : 0;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="bg-gray-100 relative cursor-pointer rounded-t"
                    style={{ height: '140px', width: '24px' }}
                    onMouseEnter={() => setHoveredDay(index)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    <div
                      className="w-full absolute bottom-0 rounded-t transition-all duration-1000 ease-out"
                      style={{ 
                        height: `${barHeight}px`,
                        backgroundColor: course.attendance >= 85 ? '#026892' : '#dc2626',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                    
                    {hoveredDay === index && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        {course.attendance}%
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-medium text-gray-900">{course.attendance}%</div>
                    <div className="text-xs text-gray-500 leading-tight">
                      {course.day.length > 8 ? course.day.substring(0, 8) + '...' : course.day}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex justify-center items-center text-xs">
            <span className="text-gray-500">This semester: <span className="font-medium text-gray-900">{overallAttendance}%</span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTrends;
