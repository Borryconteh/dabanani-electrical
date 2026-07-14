// src/components/Team/DepartmentTabs.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { Department } from './types';

interface DepartmentTabsProps {
  departments: Department[];
  activeTab: Department;
  setActiveTab: (dept: Department) => void;
}

const DepartmentTabs: React.FC<DepartmentTabsProps> = ({ 
  departments, 
  activeTab, 
  setActiveTab 
}) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 my-8">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 p-2 bg-slate-50/80 backdrop-blur-md rounded-2xl border border-slate-200 shadow-inner">
        {departments.map((dept) => {
          const isActive = activeTab === dept;
          
          return (
            <button
              key={dept}
              onClick={() => setActiveTab(dept)}
              className={`relative px-5 py-3 rounded-xl text-sm md:text-base font-semibold transition-colors duration-300 outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 ${
                isActive 
                  ? 'text-white' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-selected={isActive}
              role="tab"
            >
              {isActive && (
                <motion.div
                  layoutId="activeTabIndicator"
                  className="absolute inset-0 bg-red-600 rounded-xl shadow-md"
                  initial={false}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 30 
                  }}
                />
              )}
              <span className="relative z-10">{dept}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default DepartmentTabs;