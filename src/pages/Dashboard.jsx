import React from 'react';
import { 
  Users, Calendar, Pill, AlertTriangle, 
  ChevronRight, Activity, Clock
} from 'lucide-react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from 'recharts';

import { familyMembers, vitalsData, recentActivity, appointments, medications } from '../data/mockData';
import { MemberAvatar } from '../components/ui/MemberAvatar';
import { StatCard } from '../components/ui/StatCard';
import { MedicationCard } from '../components/ui/MedicationCard';
import { AppointmentCard } from '../components/ui/AppointmentCard';

export const Dashboard = () => {
  // Quick Stats
  const stats = [
    { label: 'Total Family Members', value: familyMembers.length, icon: Users, color: 'blue' },
    { label: 'Upcoming Appointments', value: appointments.length, icon: Calendar, color: 'green' },
    { label: 'Active Medications', value: medications.length, icon: Pill, color: 'yellow' },
    { label: 'Health Alerts', value: familyMembers.filter(m => m.status !== 'healthy').length, icon: AlertTriangle, color: 'red' },
  ];

  // Chart Data
  const chartData = vitalsData.history.slice(-7); // Last 7 days
  const pieData = [
    { name: 'Healthy', value: familyMembers.filter(m => m.status === 'healthy').length, color: '#10B981' },
    { name: 'Attention Needed', value: familyMembers.filter(m => m.status === 'warning').length, color: '#F59E0B' },
    { name: 'Critical', value: familyMembers.filter(m => m.status === 'critical').length, color: '#EF4444' },
  ];

  const getMemberName = (id) => familyMembers.find(m => m.id === id)?.name || 'Unknown';

  return (
    <div className="space-y-6">
      
      {/* Section A: Family Members Row */}
      <section>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-[#1E293B]">Family Overview</h2>
          <button className="text-[#2563EB] text-sm font-medium flex items-center hover:underline">
            View All <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
        <div className="flex overflow-x-auto gap-4 pb-4 hide-scrollbar">
          {familyMembers.map(member => (
            <div key={member.id} className="card min-w-[240px] flex-shrink-0 flex flex-col items-center text-center">
              <MemberAvatar member={member} size="lg" />
              <h3 className="mt-3 font-bold text-lg">{member.name}</h3>
              <p className="text-sm text-[#64748B] mb-3">{member.role}, {member.age}</p>
              
              <div className="w-full bg-gray-50 rounded-lg p-3 text-sm text-left mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-500">Meds:</span>
                  <span className="font-medium">{medications.filter(m => m.memberId === member.id).length} Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Status:</span>
                  <span className={`font-medium capitalize ${
                    member.status === 'healthy' ? 'text-green-600' : 
                    member.status === 'warning' ? 'text-yellow-600' : 'text-red-600'
                  }`}>
                    {member.status}
                  </span>
                </div>
              </div>
              
              <button className="btn-outline w-full text-sm mt-auto py-2">View Profile</button>
            </div>
          ))}
        </div>
      </section>

      {/* Section B: Quick Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <StatCard key={i} {...stat} />
        ))}
      </section>

      {/* Section C: Health Overview Charts */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card lg:col-span-2">
          <h3 className="text-lg font-bold mb-4">Family Health Score (Last 7 Days)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                <XAxis dataKey="date" tick={{fontSize: 12}} tickFormatter={(val) => new Date(val).getDate()} stroke="#64748B" />
                <YAxis domain={[0, 100]} tick={{fontSize: 12}} stroke="#64748B" />
                <Tooltip />
                <Line type="monotone" dataKey="m1_health" name="Dad" stroke="#2563EB" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="m2_health" name="Mom" stroke="#10B981" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="m3_health" name="Emma" stroke="#8B5CF6" strokeWidth={2} dot={{r: 4}} />
                <Line type="monotone" dataKey="m4_health" name="Grandpa" stroke="#EF4444" strokeWidth={2} dot={{r: 4}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-bold mb-4">Health Status</h3>
          <div className="h-48 flex justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData.filter(d => d.value > 0)}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex justify-center gap-4 mt-2">
            {pieData.filter(d => d.value > 0).map(d => (
              <div key={d.name} className="flex items-center text-sm">
                <span className="w-3 h-3 rounded-full mr-1.5" style={{backgroundColor: d.color}}></span>
                {d.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section D & E: Two Columns */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Recent Activity */}
        <div className="card flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Recent Activity</h3>
            <button className="text-[#2563EB] text-sm hover:underline">View All</button>
          </div>
          <div className="space-y-4 flex-1">
            {recentActivity.map((activity) => (
              <div key={activity.id} className="flex gap-3">
                <div className={`mt-1 p-2 rounded-full h-fit flex-shrink-0 ${
                  activity.color === 'green' ? 'bg-green-100 text-green-600' :
                  activity.color === 'yellow' ? 'bg-yellow-100 text-yellow-600' :
                  'bg-blue-100 text-blue-600'
                }`}>
                  {activity.icon === 'Pill' && <Pill size={16} />}
                  {activity.icon === 'Activity' && <Activity size={16} />}
                  {activity.icon === 'Calendar' && <Calendar size={16} />}
                </div>
                <div className="flex-1 pb-4 border-b border-gray-100">
                  <p className="text-[#1E293B] font-medium">{activity.description}</p>
                  <p className="text-xs text-[#64748B] flex items-center mt-1">
                    <Clock size={12} className="mr-1" /> {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reminders / Next Up */}
        <div className="card flex flex-col h-full">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold">Today's Schedule</h3>
          </div>
          <div className="space-y-3 flex-1 overflow-y-auto pr-2">
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Medications</h4>
            {medications.slice(0,2).map(med => (
              <MedicationCard key={med.id} medication={med} memberName={getMemberName(med.memberId)} />
            ))}
            
            <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mt-4 mb-2">Appointments</h4>
            {appointments.slice(0,1).map(apt => (
              <AppointmentCard key={apt.id} appointment={apt} memberName={getMemberName(apt.memberId)} />
            ))}
          </div>
        </div>

      </section>
      
    </div>
  );
};
