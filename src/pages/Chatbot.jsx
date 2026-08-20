import React, { useState } from 'react';
import { Send, Bot, User, Paperclip, Mic, AlertCircle } from 'lucide-react';

export const Chatbot = () => {
  const [messages, setMessages] = useState([
    { id: 1, type: 'bot', text: 'Hello! I am your FamilyCare AI Assistant. How can I help you today?', time: '10:00 AM' },
    { id: 2, type: 'user', text: 'What are the side effects of Metformin?', time: '10:05 AM' },
    { id: 3, type: 'bot', text: 'Common side effects of Metformin (which Robert is currently taking) include nausea, vomiting, stomach upset, diarrhea, and a metallic taste in the mouth. Since Robert has Type 2 Diabetes, please ensure he takes it with meals to reduce stomach upset. If he experiences severe abdominal pain or difficulty breathing, seek immediate medical attention.', time: '10:06 AM' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const suggestions = [
    "Check my vitals",
    "Drug interaction?",
    "Symptom checker",
    "Find nearby hospital"
  ];

  const handleSend = () => {
    if (!inputValue.trim()) return;
    
    // Add user message
    const newMsg = {
      id: Date.now(),
      type: 'user',
      text: inputValue,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMsg]);
    setInputValue('');
    
    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        type: 'bot',
        text: 'This is a simulated AI response. As an AI assistant, I recommend discussing this further with your healthcare provider.',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-8rem)]">
      {/* Disclaimer */}
      <div className="bg-yellow-50 text-yellow-800 text-xs sm:text-sm px-4 py-2 flex items-center justify-center gap-2 rounded-t-xl border border-yellow-200">
        <AlertCircle size={16} className="flex-shrink-0" />
        <span className="font-medium text-center">AI suggestions are informational only. Always consult a healthcare professional.</span>
      </div>

      <div className="flex-1 bg-white border-x border-gray-200 flex flex-col overflow-hidden">
        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {messages.map(msg => (
            <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`flex max-w-[85%] sm:max-w-[70%] ${msg.type === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-3`}>
                
                {/* Avatar */}
                <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  msg.type === 'bot' ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                }`}>
                  {msg.type === 'bot' ? <Bot size={20} /> : <User size={20} />}
                </div>

                {/* Message Bubble */}
                <div className="flex flex-col gap-1">
                  <div className={`p-3 sm:p-4 rounded-2xl shadow-sm ${
                    msg.type === 'user' 
                      ? 'bg-blue-600 text-white rounded-tr-none' 
                      : 'bg-white border border-gray-200 border-l-4 border-l-blue-500 rounded-tl-none text-gray-800'
                  }`}>
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                  </div>
                  <span className={`text-xs text-gray-400 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {msg.time}
                  </span>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-gray-50 border-t border-gray-200">
          <div className="flex flex-wrap gap-2 mb-3 hide-scrollbar overflow-x-auto">
            {suggestions.map((sug, i) => (
              <button 
                key={i} 
                onClick={() => setInputValue(sug)}
                className="bg-white border border-gray-200 text-blue-600 hover:bg-blue-50 text-xs px-3 py-1.5 rounded-full transition-colors whitespace-nowrap"
              >
                {sug}
              </button>
            ))}
          </div>

          <div className="flex items-end gap-2">
            <div className="flex-1 bg-white border border-gray-300 rounded-xl flex items-center pr-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:border-blue-500 transition-all">
              <button className="p-3 text-gray-400 hover:text-blue-500 transition-colors">
                <Paperclip size={20} />
              </button>
              <textarea 
                rows="1"
                placeholder="Ask about symptoms, medications, or reports..." 
                className="flex-1 py-3 px-2 bg-transparent outline-none resize-none max-h-32 text-sm"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button className="p-3 text-gray-400 hover:text-blue-500 transition-colors">
                <Mic size={20} />
              </button>
            </div>
            <button 
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white p-3.5 rounded-xl shadow-md transition-colors flex-shrink-0"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
