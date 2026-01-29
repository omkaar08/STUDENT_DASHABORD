import { CreditCard } from "lucide-react";
import { useState, useEffect } from "react";

const FeesOverview = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const totalPaid = 525000;
  const totalDue = 300000;
  const total = totalPaid + totalDue;
  const paidPercentage = (totalPaid / total) * 100;
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 h-full">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CreditCard className="w-4 h-4 text-gray-600" />
          <h2 className="text-lg font-bold text-gray-900">Fee Status</h2>
        </div>
        <span className="px-2 py-0.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">
          On Track
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        {/* Left Column: Payment Visualization */}
        <div className="flex flex-col items-center justify-center">
          <div 
            className="relative w-48 h-28 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <svg className="w-48 h-28" viewBox="0 0 140 70">
              {/* Background semicircle */}
              <path
                d="M 10 60 A 50 50 0 0 1 130 60"
                stroke="#e5e7eb"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
              />
              {/* Progress semicircle */}
              <path
                d="M 10 60 A 50 50 0 0 1 130 60"
                stroke="#026892"
                strokeWidth="12"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${isLoaded ? (paidPercentage * 2.62) : 0} 262`}
                style={{
                  transition: 'stroke-dasharray 1.5s ease-out, stroke 0.3s ease',
                  stroke: isHovered ? '#024a73' : '#026892'
                }}
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-3xl font-bold text-gray-900">{paidPercentage.toFixed(0)}%</span>
              <span className="text-sm font-medium text-gray-600 mt-1">Paid so far</span>
            </div>
          </div>
        </div>

        {/* Right Column: Financial Details */}
        <div className="space-y-3">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">Total</span>
              <span className="text-sm font-bold text-gray-900">RWF {total.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">Paid</span>
              <span className="text-sm font-semibold text-green-700">RWF {totalPaid.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-gray-500">Remaining</span>
              <span className="text-sm font-semibold text-gray-900">RWF {totalDue.toLocaleString()}</span>
            </div>
          </div>

          <div className="pt-2 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-600 mb-1">Breakdown</p>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">Tuition</span>
                <span className="font-medium text-gray-900">500K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Semester</span>
                <span className="font-medium text-gray-900">250K</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">Lab + Library</span>
                <span className="font-medium text-gray-900">75K</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
        <p className="text-xs text-gray-500">Next due: Jan 15, 2024</p>
        <button 
          className="px-3 py-1.5 text-white rounded-md text-xs font-medium hover:opacity-90 transition-colors"
          style={{ backgroundColor: '#026892' }}
        >
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default FeesOverview;