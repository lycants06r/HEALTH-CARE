import React from 'react';
import { familyMembers } from '../data/mockData';
import { MemberAvatar } from '../components/ui/MemberAvatar';
import { Plus, Edit2, Activity } from 'lucide-react';
import { HealthStatusBadge } from '../components/ui/HealthStatusBadge';

export const Profiles = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Family Profiles</h2>
          <p className="text-gray-500 text-sm mt-1">Manage health information for all family members.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <Plus size={18} /> Add Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {familyMembers.map((member) => (
          <div key={member.id} className="card relative">
            <div className="absolute top-4 right-4">
              <HealthStatusBadge status={member.status} />
            </div>
            
            <div className="flex items-center gap-4 mb-6">
              <MemberAvatar member={member} size="xl" />
              <div>
                <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                <p className="text-blue-600 font-medium">{member.role}, {member.age} yrs</p>
                <div className="flex gap-2 mt-2">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded font-medium">Blood: {member.bloodType}</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Conditions</h4>
                {member.conditions.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {member.conditions.map((condition, i) => (
                      <span key={i} className="bg-red-50 text-red-700 border border-red-100 text-xs px-2.5 py-1 rounded-full font-medium">
                        {condition}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm text-gray-500 italic">None reported</span>
                )}
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">Allergies</h4>
                {member.allergies.length > 0 && member.allergies[0] !== "None" ? (
                  <div className="flex flex-wrap gap-2">
                    {member.allergies.map((allergy, i) => (
                      <span key={i} className="bg-orange-50 text-orange-700 border border-orange-100 text-xs px-2.5 py-1 rounded-full font-medium">
                        {allergy}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-sm text-gray-500 italic">No known allergies</span>
                )}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-100">
              <button className="btn-outline flex items-center justify-center gap-2 py-2">
                <Edit2 size={16} /> Edit
              </button>
              <button className="bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg transition-colors flex items-center justify-center gap-2 py-2">
                <Activity size={16} /> Vitals
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
