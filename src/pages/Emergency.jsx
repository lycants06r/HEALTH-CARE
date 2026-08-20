import React, { useState } from 'react';
import { AlertTriangle, Phone, PhoneCall, MapPin, Download, HeartPulse } from 'lucide-react';

export const Emergency = () => {
  const [sosActive, setSosActive] = useState(false);

  const contacts = [
    { name: 'Dr. Smith', relation: 'Primary Doctor', phone: '555-0100' },
    { name: 'Uncle Jim', relation: 'Family', phone: '555-0102' },
    { name: 'Poison Control', relation: 'Service', phone: '800-222-1222' }
  ];

  const firstAid = [
    { title: 'CPR', desc: 'Cardiopulmonary Resuscitation steps' },
    { title: 'Choking', desc: 'Heimlich maneuver' },
    { title: 'Burns', desc: 'First-degree to severe' },
    { title: 'Allergic Reaction', desc: 'Anaphylaxis handling' },
  ];

  return (
    <div className="space-y-8">
      {/* Red accent top bar indicating emergency context */}
      <div className="absolute top-0 left-0 w-full h-1 bg-red-500 z-50 pointer-events-none"></div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-red-600 mb-2">Emergency Hub</h2>
        <p className="text-gray-600">Quick access to life-saving tools and contacts.</p>
      </div>

      {/* SOS Button Section */}
      <div className="flex justify-center py-8">
        <button 
          onClick={() => setSosActive(!sosActive)}
          className={`relative flex items-center justify-center w-48 h-48 sm:w-64 sm:h-64 rounded-full border-8 transition-all duration-300 shadow-2xl
            ${sosActive 
              ? 'bg-red-600 border-red-700 animate-pulse-red scale-105' 
              : 'bg-red-500 border-red-600 hover:bg-red-600'
            }
          `}
        >
          <div className="flex flex-col items-center text-white">
            <AlertTriangle className={`w-16 h-16 sm:w-24 sm:h-24 mb-2 ${sosActive ? 'animate-bounce' : ''}`} />
            <span className="font-black text-xl sm:text-3xl tracking-wider">
              {sosActive ? 'SOS ACTIVE' : 'PRESS SOS'}
            </span>
            {sosActive && <span className="text-sm font-medium mt-2">Notifying contacts...</span>}
          </div>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Emergency Contacts */}
        <div className="card border-red-100 shadow-red-100/50">
          <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
            <Phone className="text-red-500" /> Emergency Contacts
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex justify-between items-center">
              <div>
                <h4 className="font-bold text-red-900 text-lg">Ambulance / Police</h4>
                <p className="text-red-600">Emergency Services</p>
              </div>
              <button className="bg-red-600 text-white p-3 rounded-full hover:bg-red-700 transition-colors shadow-md shadow-red-500/30">
                <PhoneCall size={24} />
              </button>
            </div>
            
            {contacts.map((c, i) => (
              <div key={i} className="p-3 border border-gray-100 rounded-xl flex justify-between items-center hover:bg-gray-50">
                <div>
                  <h4 className="font-bold text-gray-900">{c.name}</h4>
                  <p className="text-sm text-gray-500">{c.relation} • {c.phone}</p>
                </div>
                <div className="flex gap-2">
                  <button className="bg-green-100 text-green-700 p-2.5 rounded-full hover:bg-green-200 transition-colors">
                    <PhoneCall size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          {/* Nearby Services */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="text-blue-500" /> Nearby Hospitals
            </h3>
            <div className="bg-gray-100 h-40 rounded-xl mb-4 flex items-center justify-center border border-gray-200">
              <span className="text-gray-400 font-medium">Map Placeholder</span>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <span className="font-bold">City General Hospital</span>
                <span className="text-green-600 font-medium">2.4 mi • Open 24/7</span>
              </div>
              <div className="flex justify-between items-center p-2 hover:bg-gray-50 rounded">
                <span className="font-bold">Urgent Care Center</span>
                <span className="text-orange-600 font-medium">0.8 mi • Closes 10PM</span>
              </div>
            </div>
          </div>

          {/* First Aid Guides */}
          <div className="card">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <HeartPulse className="text-green-500" /> First Aid Guides
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {firstAid.map((guide, i) => (
                <button key={i} className="p-3 border border-gray-200 rounded-lg text-left hover:border-red-300 hover:bg-red-50 transition-colors">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">{guide.title}</h4>
                  <p className="text-xs text-gray-500 line-clamp-1">{guide.desc}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
