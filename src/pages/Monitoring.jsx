import React, { useState } from 'react';
import { familyMembers, vitalsData } from '../data/mockData';
import { Activity, Heart, Thermometer, Droplet, Wind, Watch, AlertCircle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

export const Monitoring = () => {
  const [activeTab, setActiveTab] = useState('vitals');
  const [selectedMember, setSelectedMember] = useState(familyMembers[0].id);

  const tabs = [
    { id: 'vitals', label: 'Vital Signs', icon: Activity },
    { id: 'symptoms', label: 'Symptoms', icon: AlertCircle },
    { id: 'wearables', label: 'Wearables', icon: Watch },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-bold text-gray-900">Health Monitoring</h2>
        <select 
          className="input-field max-w-[250px] bg-white font-medium"
          value={selectedMember}
          onChange={(e) => setSelectedMember(e.target.value)}
        >
          {familyMembers.map(m => (
            <option key={m.id} value={m.id}>{m.name} ({m.role})</option>
          ))}
        </select>
      </div>

      {/* Custom Tabs */}
      <div className="flex space-x-1 bg-white p-1 rounded-xl shadow-sm border border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg font-medium text-sm transition-all
              ${activeTab === tab.id 
                ? 'bg-blue-50 text-blue-600 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}`}
          >
            <tab.icon size={18} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === 'vitals' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="card h-fit">
            <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
              <Activity className="text-blue-500" /> Log Vitals
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Blood Pressure</label>
                  <input type="text" placeholder="120/80" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Heart Rate</label>
                  <input type="number" placeholder="72" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Temperature (°F)</label>
                  <input type="number" placeholder="98.6" step="0.1" className="input-field" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">SpO2 (%)</label>
                  <input type="number" placeholder="98" className="input-field" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                <textarea rows="2" className="input-field resize-none" placeholder="Feeling normal..."></textarea>
              </div>
              <button type="button" className="btn-primary w-full">Save Vitals</button>
            </form>
          </div>

          {/* Charts */}
          <div className="card lg:col-span-2">
            <h3 className="font-bold text-lg mb-4">Blood Pressure Trends</h3>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={vitalsData.history.slice(-14)} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                  <XAxis dataKey="date" tick={{fontSize: 12}} tickFormatter={(val) => new Date(val).getDate()} stroke="#64748B" />
                  <YAxis domain={[80, 180]} tick={{fontSize: 12}} stroke="#64748B" />
                  <Tooltip />
                  <ReferenceLine y={120} stroke="#10B981" strokeDasharray="3 3" label="Normal Systolic" />
                  <ReferenceLine y={140} stroke="#EF4444" strokeDasharray="3 3" label="High" />
                  <Line type="monotone" dataKey="m4_bp" name="Systolic" stroke="#EF4444" strokeWidth={2} dot={{r: 4}} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex gap-4 text-sm text-gray-500 justify-center">
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500 rounded-full"></span> Systolic (simulated)</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 bg-green-500 rounded-full"></span> Normal range: &lt;120</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'symptoms' && (
        <div className="card text-center py-12">
          <AlertCircle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Symptom Checker</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">Describe your symptoms to our AI assistant or log them for your next doctor's visit.</p>
          <button className="btn-primary">Start AI Analysis</button>
        </div>
      )}

      {activeTab === 'wearables' && (
        <div className="card text-center py-12">
          <Watch className="w-16 h-16 text-blue-400 mx-auto mb-4" />
          <h3 className="text-xl font-bold mb-2">Connected Devices</h3>
          <p className="text-gray-500 max-w-md mx-auto mb-6">No devices connected. Connect your Apple Watch or Fitbit to automatically sync health data.</p>
          <button className="btn-outline border-blue-200 text-blue-600 bg-blue-50">Connect Device</button>
        </div>
      )}

    </div>
  );
};
