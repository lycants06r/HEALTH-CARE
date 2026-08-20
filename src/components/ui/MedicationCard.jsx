import React from 'react';
import { Pill, Clock, Calendar } from 'lucide-react';

export const MedicationCard = ({ medication, memberName, onMarkTaken }) => {
  const isTaken = medication.status === 'taken';
  const isMissed = medication.status === 'missed';
  
  return (
    <div className={`card relative overflow-hidden ${isTaken ? 'opacity-75' : ''}`}>
      {/* Side color accent based on status */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${
        isTaken ? 'bg-green-500' : isMissed ? 'bg-red-500' : 'bg-yellow-500'
      }`} />
      
      <div className="pl-2 flex justify-between items-start">
        <div className="flex items-start gap-3">
          <div className={`p-2 rounded-lg ${isTaken ? 'bg-green-100 text-green-600' : isMissed ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
            <Pill className="h-6 w-6" />
          </div>
          <div>
            <h4 className={`font-bold text-lg ${isTaken ? 'line-through text-gray-500' : 'text-gray-900'}`}>
              {medication.name} <span className="text-sm font-normal text-gray-500">{medication.dosage}</span>
            </h4>
            <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {medication.time}</span>
              <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded-full">{memberName}</span>
            </div>
          </div>
        </div>
        
        {onMarkTaken && !isTaken && (
          <button 
            onClick={() => onMarkTaken(medication.id)}
            className="btn-outline text-sm py-1.5 px-3 whitespace-nowrap"
          >
            Mark Taken
          </button>
        )}
        {isTaken && (
          <span className="text-sm font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">
            Taken
          </span>
        )}
      </div>
    </div>
  );
};
