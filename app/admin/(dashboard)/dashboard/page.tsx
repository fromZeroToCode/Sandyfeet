"use client";

import { motion } from "framer-motion";
import { Users, BedDouble, Map, CreditCard, ArrowRight, Activity, TrendingUp } from "lucide-react";

export default function AdminDashboardOverview() {
  const stats = [
    { name: "Today's Check-ins", value: "12", icon: BedDouble, trend: "+2", color: "bg-blue-500" },
    { name: "Pending Day Tours", value: "24", icon: Map, trend: "+5", color: "bg-emerald-500" },
    { name: "Total Users", value: "405", icon: Users, trend: "+14", color: "bg-indigo-500" },
    { name: "Pending Payments", value: "8", icon: CreditCard, trend: "-2", color: "bg-amber-500" },
  ];

  return (
    <div className="space-y-8">
      {/* Header section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-neutral-900">Dashboard Overview</h2>
          <p className="text-neutral-500 mt-1">Welcome back. Here is what's happening at Sandyfeet today.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 bg-white border border-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-50 font-medium transition-colors text-sm">
            Download Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors shadow-sm shadow-blue-200 text-sm">
            Create Booking
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={stat.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-100"
          >
            <div className="flex items-center justify-between">
              <div className={`p-3 rounded-xl ${stat.color} bg-opacity-10`}>
                <stat.icon className={`w-6 h-6 text-inherit`} />
              </div>
              <div className="flex items-center gap-1 text-emerald-600 text-sm font-medium bg-emerald-50 px-2 py-1 rounded-md">
                <TrendingUp className="w-3 h-3" />
                {stat.trend}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-neutral-500">{stat.name}</p>
              <h3 className="text-3xl font-bold text-neutral-900 mt-1">{stat.value}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Split */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Recent Activity List */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-neutral-900">Recent Reservations</h3>
            <button className="text-sm text-blue-600 font-medium hover:text-blue-700 flex items-center gap-1">
              View all <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-neutral-50 rounded-xl hover:bg-neutral-100/80 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-medium text-sm">
                    JD
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">John Doe</p>
                    <p className="text-xs text-neutral-500">Deluxe Sea View • 2 Nights</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-neutral-900 text-sm">₱6,500</p>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mt-1">
                    Pending Payment
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Logs mini */}
        <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6">
           <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-bold text-neutral-900">System Logs</h3>
            <Activity className="w-5 h-5 text-neutral-400" />
          </div>
          <div className="relative pl-4 space-y-6 before:absolute before:inset-0 before:ml-[9px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-200 before:to-transparent">
            {['Staff logged in', 'Room 102 updated', 'Tour booked by Guest'].map((log, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white bg-blue-100 text-blue-600 shadow shrink-0 -ml-[2px] md:-ml-0">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                </div>
                <div className="w-full ml-4 font-medium text-sm text-neutral-600">
                  {log}
                  <div className="text-xs text-neutral-400 mt-0.5">2 hours ago</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
