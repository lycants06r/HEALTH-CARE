import React from 'react';
import { familyMembers } from '../data/mockData';
import { BarChart as BarChartIcon, Download, Share2, Award, Target, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export const Reports = () => {
  const adherenceData = [
    { name: 'Dad', rate: 85 },
    { name: 'Mom', rate: 100 },
    { name: 'Emma', rate: 95 },
    { name: 'Grandpa', rate: 70 },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reports & Analytics</h2>
          <p className="text-gray-500 text-sm mt-1">Generate insights and track family health goals.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Report Generator */}
        <div className="card lg:col-span-1 border-t-4 border-t-blue-500">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <BarChartIcon className="text-blue-500" /> Generate Report
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Select Member</label>
              <select className="input-field bg-white">
                <option>Entire Family</option>
                {familyMembers.map(m => <option key={m.id}>{m.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date Range</label>
              <select className="input-field bg-white">
                <option>Last 30 Days</option>
                <option>Last 3 Months</option>
                <option>Year to Date</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Report Type</label>
              <select className="input-field bg-white">
                <option>Comprehensive Summary</option>
                <option>Vitals History</option>
                <option>Medication Adherence</option>
              </select>
            </div>
            <div className="pt-2 flex gap-2">
              <button type="button" className="btn-primary flex-1 flex items-center justify-center gap-2">
                <Download size={18} /> PDF
              </button>
              <button type="button" className="btn-outline flex-1 flex items-center justify-center gap-2">
                <Share2 size={18} /> Share
              </button>
            </div>
          </form>
        </div>

        {/* Analytics & Insights */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Chart */}
          <div className="card h-fit">
            <h3 className="font-bold text-lg mb-4">Medication Adherence (%)</h3>
            <div className="h-60">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={adherenceData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip cursor={{fill: '#F0F4FF'}} />
                  <Bar dataKey="rate" fill="#3B82F6" radius={[4, 4, 0, 0]} barSize={40} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* AI Insights */}
          <div className="card bg-gradient-to-br from-blue-50 to-indigo-50 border-none">
            <h3 className="font-bold text-lg mb-4 text-indigo-900 flex items-center gap-2">
              <Zap className="text-yellow-500 fill-yellow-500" /> AI Health Insights
            </h3>
            <div className="space-y-3">
              <div className="bg-white/60 p-3 rounded-lg border border-white/40">
                <p className="text-sm text-gray-800"><span className="font-bold text-red-600">Alert:</span> Grandpa's medication adherence has dropped to 70% this week. Consider setting up phone reminders.</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg border border-white/40">
                <p className="text-sm text-gray-800"><span className="font-bold text-yellow-600">Warning:</span> Dad's blood pressure averages 135/85 over the last 14 days, slightly above normal range.</p>
              </div>
              <div className="bg-white/60 p-3 rounded-lg border border-white/40">
                <p className="text-sm text-gray-800"><span className="font-bold text-green-600">Positive:</span> Emma's asthma symptoms have decreased by 40% compared to last month.</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Gamification */}
      <div className="card">
        <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
          <Target className="text-purple-500" /> Family Health Goals
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900">Hydration Champions</h4>
            <p className="text-sm text-gray-500 mt-1 mb-3">Log 8 glasses of water daily</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-yellow-400 h-2 rounded-full w-[80%]"></div>
            </div>
            <span className="text-xs font-bold text-gray-600">80% Complete</span>
          </div>
          
          <div className="text-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
            <Award className="w-12 h-12 text-green-400 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900">Step Warriors</h4>
            <p className="text-sm text-gray-500 mt-1 mb-3">10k steps for all members</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-green-400 h-2 rounded-full w-[45%]"></div>
            </div>
            <span className="text-xs font-bold text-gray-600">45% Complete</span>
          </div>

          <div className="text-center p-4 border border-gray-100 rounded-xl hover:shadow-md transition-shadow">
            <Award className="w-12 h-12 text-blue-400 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900">Perfect Adherence</h4>
            <p className="text-sm text-gray-500 mt-1 mb-3">No missed meds for 7 days</p>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
              <div className="bg-blue-400 h-2 rounded-full w-[60%]"></div>
            </div>
            <span className="text-xs font-bold text-gray-600">4/7 Days</span>
          </div>
        </div>
      </div>
    </div>
  );
};
