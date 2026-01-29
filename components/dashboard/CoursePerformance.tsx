import { ArrowRight, BarChart3 } from "lucide-react";
import { useState, useEffect } from "react";

const CoursePerformance = () => {
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  const overallGrade = 88;
  const courses = [
    { name: "Data Structures", grade: 92, details: "Grade based on midterm + assignments" },
    { name: "Database Systems", grade: 85, details: "Grade based on projects + final exam" },
    { name: "Computer Networks", grade: 88, details: "Grade based on labs + theory exam" },
    { name: "Software Engineering", grade: 90, details: "Grade based on group project + tests" },
    { name: "Mathematics", grade: 86, details: "Grade based on weekly quizzes + final" }
  ];
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 h-full">
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-gray-900">Course Performance</h2>
        <button className="text-xs font-medium text-gray-600 hover:text-gray-800 flex items-center gap-1">
          View Details <ArrowRight className="w-3 h-3" />
        </button>
      </div>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-gray-600">Overall Average</span>
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-gray-500" />
            <span className="text-lg font-semibold text-gray-900">{overallGrade}%</span>
          </div>
        </div>
        <p className="text-xs text-gray-500">Current semester grades</p>
      </div>

      <div className="space-y-3">
        {courses.map((course, index) => (
          <div key={index} className="space-y-2 relative">
            <div className="flex justify-between items-center">
              <span className="text-sm font-medium text-gray-700">{course.name}</span>
              <span className="text-sm font-semibold text-gray-900">{course.grade}%</span>
            </div>
            <div 
              className="h-3 bg-gray-100 rounded overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredCourse(index)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              <div
                className="h-full transition-all duration-1000 ease-out"
                style={{ 
                  width: isLoaded ? `${course.grade}%` : '0%',
                  transitionDelay: `${index * 150}ms`,
                  backgroundColor: '#026892'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#024a73'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#026892'}
              />
            </div>
            {hoveredCourse === index && (
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                {course.details}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursePerformance;