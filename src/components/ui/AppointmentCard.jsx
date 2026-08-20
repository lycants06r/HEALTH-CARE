import React from 'react';
import { Calendar, MapPin, Video, User } from 'lucide-react';

export const AppointmentCard = ({ appointment, memberName }) => {
  const isVideo = appointment.type === 'Telemedicine';
  const dateObj = new Date(appointment.date);
  
  const month = dateObj.toLocaleString('default', { month: 'short' });
  const day = dateObj.getDate();
  const time = dateObj.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="card flex items-stretch gap-4 p-0 overflow-hidden">
      {/* Date Box */}
      <div className="bg-blue-50 w-24 flex flex-col items-center justify-center p-4 border-r border-blue-100">
        <span className="text-blue-600 font-bold text-sm uppercase">{month}</span>
        <span className="text-blue-700 font-extrabold text-2xl leading-none my-1">{day}</span>
        <span className="text-blue-500 font-medium text-xs whitespace-nowrap">{time}</span>
      </div>
      
      {/* Details */}
      <div className="flex-1 p-4 py-3">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h4 className="font-bold text-gray-900">{appointment.doctor}</h4>
            <p className="text-sm text-blue-600 font-medium">{appointment.specialty}</p>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
            appointment.status === 'confirmed' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
          }`}>
            {appointment.status}
          </span>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-gray-600 mt-3">
          <span className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-gray-400" />
            {memberName}
          </span>
          <span className="flex items-center gap-1.5">
            {isVideo ? <Video className="w-4 h-4 text-blue-500" /> : <MapPin className="w-4 h-4 text-gray-400" />}
            <span className="truncate max-w-[150px]">{appointment.location}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
