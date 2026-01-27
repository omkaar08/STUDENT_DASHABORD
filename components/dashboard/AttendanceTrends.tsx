import { ArrowRight, RefreshCw } from "lucide-react";
import { useState, useEffect } from "react";

const AttendanceTrends = () => {
  const [hoveredDay, setHoveredDay] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const dailyData = [
    { day: "Mon", attendance: 65 },
    { day: "Tue", attendance: 78 },
    { day: "Wed", attendance: 85 },
    { day: "Thu", attendance: 82 },
    { day: "Fri", attendance: 88 },
    { day: "Sat", attendance: 92 },
    { day: "Sun", attendance: 95 }
  ];

  const overallAttendance = 87;

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold text-gray-900">Attendance Trends</h2>
          <RefreshCw className="w-4 h-4 text-gray-400" />
        </div>
        <button className="text-sm font-medium text-[#024698] hover:text-[#013a7a] flex items-center gap-1">
          View Details <ArrowRight className="w-4 h-4" />
        </button>
      </div>
      <p className="text-gray-400 text-xs mb-2">Updated less than a minute ago</p>
      
      {/* Session Summary */}
      <div className="flex items-center gap-4 text-xs text-gray-600 mb-4">
        <span>Sessions this week: <span className="font-medium text-gray-900">30</span></span>
        <span>•</span>
        <span>Missed: <span className="font-medium text-red-600">1</span></span>
        <span>•</span>
        <span>Status: <span className="font-medium text-green-600">On Track</span></span>
      </div>

      {/* Single horizontal content row */}
      <div className="flex gap-6 flex-1 items-end">
        {/* Left: KPI block */}
        <div className="w-1/3">
          <div className="text-5xl font-bold text-gray-900 leading-none">{overallAttendance}%</div>
          <div className="text-sm text-gray-600 mt-1 mb-3">Weekly attendance rate</div>
          <div className="space-y-0.5">
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">This week</span>
              <span className="font-medium text-gray-900">{overallAttendance}%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Last week</span>
              <span className="font-medium text-gray-900">84%</span>
            </div>
            <div className="flex justify-between text-xs">
              <span className="text-gray-500">Trend</span>
              <span className="font-medium text-green-600">+3%</span>
            </div>
          </div>
        </div>

        {/* Right: Bar chart - bottom aligned */}
        <div className="w-2/3 h-full flex items-end pb-2">
          <div className="flex items-end gap-2 w-full" style={{ height: '200px' }}>
            {dailyData.map((day, index) => {
              const barHeight = isLoaded ? (day.attendance / 100) * 180 : 0;
              return (
                <div key={index} className="flex flex-col items-center flex-1">
                  <div 
                    className="w-full bg-gray-100 relative cursor-pointer"
                    style={{ height: '180px' }}
                    onMouseEnter={() => setHoveredDay(index)}
                    onMouseLeave={() => setHoveredDay(null)}
                  >
                    <div
                      className="w-full absolute bottom-0 transition-all duration-1000 ease-out"
                      style={{ 
                        height: `${barHeight}px`,
                        backgroundColor: '#024698',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                    
                    {hoveredDay === index && (
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        {day.attendance}%
                      </div>
                    )}
                  </div>
                  <span className="text-xs text-gray-500 mt-2">{day.day}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTrends;
