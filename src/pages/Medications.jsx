import React, { useState } from 'react';
import { medications, familyMembers } from '../data/mockData';
import { MedicationCard } from '../components/ui/MedicationCard';
import { AlertBanner } from '../components/ui/AlertBanner';
import { Plus, Filter, AlertTriangle } from 'lucide-react';

export const Medications = () => {
  const [filterMember, setFilterMember] = useState('all');

  const filteredMeds = filterMember === 'all' 
    ? medications 
    : medications.filter(m => m.memberId === filterMember);

  const getMemberName = (id) => familyMembers.find(m => m.id === id)?.name;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Medication Tracker</h2>
          <p className="text-gray-500 text-sm mt-1">Manage prescriptions and daily schedules.</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline flex items-center gap-2">
            <Filter size={18} /> Filter
          </button>
          <button className="btn-primary flex items-center gap-2">
            <Plus size={18} /> Add Med
          </button>
        </div>
      </div>

      <AlertBanner 
        type="warning" 
        message="Grandpa's Aspirin needs a refill in 5 days. Contact pharmacy." 
        className="animate-pulse"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Today's Schedule */}
        <div className="card lg:col-span-1 border-blue-100 shadow-blue-100/50">
          <h3 className="font-bold text-lg mb-4 text-blue-900">Today's Schedule</h3>
          
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
            {['Morning', 'Afternoon', 'Evening', 'Bedtime'].map((timeSlot) => {
              const slotMeds = medications.filter(m => m.time.includes(timeSlot));
              if (slotMeds.length === 0) return null;
              
              return (
                <div key={timeSlot} className="relative z-10">
                  <span className="inline-block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                    {timeSlot}
                  </span>
                  <div className="space-y-3">
                    {slotMeds.map(med => (
                      <MedicationCard key={med.id} medication={med} memberName={getMemberName(med.memberId)} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* All Medications List */}
        <div className="lg:col-span-2">
          <div className="card h-full">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">All Active Medications</h3>
              <select 
                className="input-field max-w-[200px] text-sm py-1.5"
                value={filterMember}
                onChange={(e) => setFilterMember(e.target.value)}
              >
                <option value="all">All Members</option>
                {familyMembers.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-500 text-sm uppercase tracking-wider">
                    <th className="pb-3 font-semibold">Medication</th>
                    <th className="pb-3 font-semibold">Member</th>
                    <th className="pb-3 font-semibold">Frequency</th>
                    <th className="pb-3 font-semibold">Refill In</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredMeds.map(med => (
                    <tr key={med.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-4">
                        <p className="font-bold text-gray-900">{med.name}</p>
                        <p className="text-sm text-gray-500">{med.dosage}</p>
                      </td>
                      <td className="py-4">
                        <span className="bg-gray-100 px-2 py-1 rounded-md text-sm font-medium text-gray-700">
                          {getMemberName(med.memberId)}
                        </span>
                      </td>
                      <td className="py-4">
                        <p className="text-sm font-medium">{med.frequency}</p>
                        <p className="text-xs text-gray-500">{med.time}</p>
                      </td>
                      <td className="py-4">
                        {med.refillDays ? (
                          <div className="flex items-center gap-2">
                            <span className={`font-bold ${med.refillDays <= 5 ? 'text-red-500' : 'text-green-600'}`}>
                              {med.refillDays} days
                            </span>
                            {med.refillDays <= 5 && <AlertTriangle className="w-4 h-4 text-red-500" />}
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">N/A</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
