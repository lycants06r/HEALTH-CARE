import React, { useState } from 'react';
import { documents, familyMembers } from '../data/mockData';
import { UploadCloud, FileText, Download, Share2, Search, Filter } from 'lucide-react';

export const Records = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const getMemberName = (id) => familyMembers.find(m => m.id === id)?.name;

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Health Records</h2>
          <p className="text-gray-500 text-sm mt-1">Securely store and share medical documents.</p>
        </div>
        <button className="btn-primary flex items-center gap-2">
          <UploadCloud size={18} /> Upload Document
        </button>
      </div>

      <div className="card border-dashed border-2 border-blue-300 bg-blue-50/50 hover:bg-blue-50 transition-colors cursor-pointer flex flex-col items-center justify-center py-10">
        <UploadCloud className="w-12 h-12 text-blue-500 mb-3" />
        <h3 className="font-bold text-lg text-blue-900 mb-1">Drag & Drop Files Here</h3>
        <p className="text-sm text-blue-600">or click to browse from your computer</p>
        <p className="text-xs text-gray-400 mt-4">Supported formats: PDF, JPG, PNG (Max 10MB)</p>
      </div>

      <div className="flex justify-between items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input 
            type="text" 
            placeholder="Search records by name, doctor, or type..." 
            className="input-field pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <button className="btn-outline flex items-center gap-2">
          <Filter size={18} /> Filter
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map(doc => (
          <div key={doc.id} className="card hover:border-blue-300 group">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-red-50 rounded-lg text-red-500">
                <FileText size={24} />
              </div>
              <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
                  <Download size={16} />
                </button>
                <button className="p-1.5 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-md">
                  <Share2 size={16} />
                </button>
              </div>
            </div>
            
            <h4 className="font-bold text-gray-900 truncate" title={doc.name}>{doc.name}</h4>
            <div className="flex items-center gap-2 mt-1 mb-3">
              <span className="text-xs font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-600">{doc.type}</span>
              <span className="text-xs text-gray-400">{doc.size}</span>
            </div>
            
            <div className="pt-3 border-t border-gray-100 text-sm text-gray-500 grid grid-cols-2 gap-y-2">
              <div>
                <span className="block text-xs text-gray-400">Date</span>
                <span className="font-medium text-gray-700">{doc.date}</span>
              </div>
              <div>
                <span className="block text-xs text-gray-400">Member</span>
                <span className="font-medium text-gray-700 truncate">{getMemberName(doc.memberId)}</span>
              </div>
              <div className="col-span-2">
                <span className="block text-xs text-gray-400">Doctor</span>
                <span className="font-medium text-gray-700">{doc.doctor}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
