'use client'

import { useState } from "react"
import { BookOpen, CheckCircle, Clock, BarChart3 } from "lucide-react"
import Sidebar from "@/components/layout/Sidebar"
import Header from "@/components/layout/Header"
import TopBar from "@/components/layout/TopBar"
import StatCard from "@/components/dashboard/StatCard"
import PendingActions from "@/components/dashboard/PendingActions"
import TodaySchedule from "@/components/dashboard/TodaySchedule"
import QuickActions from "@/components/dashboard/QuickActions"
import FeesOverview from "@/components/dashboard/FeesOverview"
import AttendanceTrends from "@/components/dashboard/AttendanceTrends"
import CoursePerformance from "@/components/dashboard/CoursePerformance"
import PaymentOverview from "@/components/dashboard/PaymentOverview"

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Sidebar isOpen={sidebarOpen} onToggle={() => setSidebarOpen(!sidebarOpen)} />

      {/* Main Content */}
      <main className="lg:ml-64 min-h-screen pt-16">
        <div className="max-w-7xl mx-auto px-2 sm:px-3 lg:px-4 py-2">
          <Header />

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
            <div className="animate-fade-in" style={{ animationDelay: "0ms" }}>
              <StatCard
                title="Current Percentage"
                value="95.0%"
                subtitle="2.5% from last semester"
                icon={BookOpen}
                iconColor="bg-blue-50"
                trend={{ value: "2.5% from last semester", positive: true }}
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "50ms" }}>
              <StatCard
                title="Attendance Rate"
                value="80.4%"
                subtitle="48 of 60 classes attended"
                subtitleColor="green"
                icon={CheckCircle}
                iconColor="bg-green-50"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <StatCard
                title="Pending Tasks"
                value="3"
                subtitle="2 require immediate action"
                subtitleColor="red"
                icon={Clock}
                iconColor="bg-orange-50"
              />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "150ms" }}>
              <StatCard
                title="Credits Earned"
                value="45/120"
                subtitle="37.5% of degree completed"
                subtitleColor="green"
                icon={BarChart3}
                iconColor="bg-purple-50"
              />
            </div>
          </div>

          {/* Main Three-Column Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-3">
            <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <QuickActions />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "250ms" }}>
              <TodaySchedule />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <PendingActions />
            </div>
          </div>

          {/* Analytics Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="animate-fade-in" style={{ animationDelay: "350ms" }}>
              <AttendanceTrends />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "400ms" }}>
              <CoursePerformance />
            </div>
          </div>

          {/* Bottom Row: Fee Summary Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <div className="animate-fade-in" style={{ animationDelay: "450ms" }}>
              <FeesOverview />
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
              <PaymentOverview />
            </div>
          </div>

          {/* Professional Footer */}
          <footer className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
              <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                <span>© 2024 University Student Portal</span>
                <span>•</span>
                <span>Academic Year 2023-2024</span>
                <span>•</span>
                <span>Version 2.1.0</span>
              </div>
              <div className="flex items-center space-x-4">
                <span>Last updated: {new Date().toLocaleDateString()}</span>
                <span>•</span>
                <span>Session: Active</span>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  )
}