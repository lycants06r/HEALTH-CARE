import React, { useState } from 'react';
import { appointments, familyMembers } from '../data/mockData';
import { AppointmentCard } from '../components/ui/AppointmentCard';
import { Calendar as CalendarIcon, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

export const Appointments = () => {
  const getMemberName = (id) => familyMembers.find(m => m.id === id)?.name;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Appointments</h2>
          <p className="text-gray-500 text-sm mt-1">Manage doctor visits and telemedicine calls.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={18} /> Book Appointment
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Appointments List */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="font-bold text-lg mb-2">Upcoming</h3>
          {appointments.map(apt => (
            <div key={apt.id} className="relative group">
              <AppointmentCard appointment={apt} memberName={getMemberName(apt.memberId)} />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                <button className="btn-outline bg-white py-1 px-3 text-sm shadow-sm">Reschedule</button>
                <button className="btn-danger py-1 px-3 text-sm shadow-sm">Cancel</button>
              </div>
            </div>
          ))}
        </div>

        {/* Mini Calendar / Summary */}
        <div className="lg:col-span-1">
          <div className="card h-fit">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-lg">August 2026</h3>
              <div className="flex gap-2 text-gray-500">
                <button className="hover:text-blue-600"><ChevronLeft size={20} /></button>
                <button className="hover:text-blue-600"><ChevronRight size={20} /></button>
              </div>
            </div>
            
            {/* Simple mock calendar grid */}
            <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(d => (
                <div key={d} className="font-medium text-gray-400 py-1">{d}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {Array.from({length: 31}).map((_, i) => {
                const day = i + 1;
                const hasApt = appointments.some(a => new Date(a.date).getDate() === day);
                return (
                  <div 
                    key={i} 
                    className={`py-2 rounded-lg ${
                      hasApt ? 'bg-blue-100 text-blue-700 font-bold border border-blue-200 cursor-pointer' : 
                      'hover:bg-gray-50 cursor-pointer'
                    }`}
                  >
                    {day}
                  </div>
                );
              })}
            </div>

            <hr className="my-6 border-gray-100" />
            
            <h4 className="font-bold text-sm text-gray-500 uppercase tracking-wider mb-3">Vaccination Schedule</h4>
            <div className="bg-orange-50 border border-orange-100 rounded-lg p-3 text-sm">
              <div className="flex justify-between font-bold text-orange-800 mb-1">
                <span>Flu Shot</span>
                <span>Due</span>
              </div>
              <p className="text-orange-600">Emma Johnson is due for an annual flu shot.</p>
              <button className="mt-2 text-orange-700 font-medium hover:underline">Schedule Now &rarr;</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
