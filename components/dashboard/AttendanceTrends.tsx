import { TrendingUp, Calendar, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

interface CourseAttendance {
  id: string;
  name: string;
  code: string;
  attendance: number;
  sessions: number;
  status: 'excellent' | 'good' | 'warning';
}

const AttendanceTrends = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const courses: CourseAttendance[] = [
    { id: '1', name: 'Data Structures', code: 'CS201', attendance: 92, sessions: 24, status: 'excellent' },
    { id: '2', name: 'Database Systems', code: 'CS301', attendance: 88, sessions: 22, status: 'good' },
    { id: '3', name: 'Computer Networks', code: 'CS302', attendance: 85, sessions: 20, status: 'good' },
    { id: '4', name: 'Software Engineering', code: 'CS401', attendance: 90, sessions: 18, status: 'excellent' },
    { id: '5', name: 'Mathematics', code: 'MATH201', attendance: 78, sessions: 26, status: 'warning' }
  ];

  const overallAttendance = Math.round(courses.reduce((sum, course) => sum + course.attendance, 0) / courses.length);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-[#026892]" />
          <h2 className="text-lg font-bold text-gray-900">Attendance Overview</h2>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#026892]">{overallAttendance}%</div>
          <div className="text-xs text-gray-500">Overall</div>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-4 gap-2 mb-2 p-2 bg-gray-50 rounded-lg">
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-900">{overallAttendance}%</div>
          <div className="text-xs text-gray-500">Average</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-gray-900">5</div>
          <div className="text-xs text-gray-500">Courses</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-green-600">4</div>
          <div className="text-xs text-gray-500">Above 85%</div>
        </div>
        <div className="text-center">
          <div className="text-sm font-semibold text-orange-600">1</div>
          <div className="text-xs text-gray-500">Below 85%</div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">

        {/* Course Chart */}
        <div className="flex-1 flex items-end justify-center">
          <div className="flex items-end gap-4 w-full max-w-md" style={{ height: '160px' }}>
            {courses.map((course, index) => {
              const barHeight = isLoaded ? (course.attendance / 100) * 140 : 0;
              return (
                <div key={course.id} className="flex flex-col items-center flex-1">
                  <div 
                    className="bg-gray-100 relative rounded-t cursor-pointer"
                    style={{ height: '140px', width: '28px' }}
                    onMouseEnter={() => setHoveredBar(index)}
                    onMouseLeave={() => setHoveredBar(null)}
                  >
                    <div
                      className="w-full absolute bottom-0 rounded-t transition-all duration-1000 ease-out"
                      style={{ 
                        height: `${barHeight}px`,
                        backgroundColor: '#026892',
                        transitionDelay: `${index * 100}ms`
                      }}
                    />
                    
                    {hoveredBar === index && (
                      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                        {course.name}: {course.attendance}%
                      </div>
                    )}
                  </div>
                  <div className="mt-2 text-center">
                    <div className="text-xs font-medium text-gray-900">{course.attendance}%</div>
                    <div className="text-xs text-gray-500 leading-tight">
                      {course.name.length > 10 ? course.name.substring(0, 10) + '...' : course.name}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-4 pt-3 border-t border-gray-100">
          <div className="flex justify-between items-center text-xs">
            <span className="text-gray-500">This semester</span>
            <span className="font-medium text-gray-900">Min Required: 85%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTrends;
