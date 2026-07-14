import React from 'react';
import { motion } from 'framer-motion';
import type { OrganizationNode } from './types';

const TreeNode: React.FC<{ node: OrganizationNode; isRoot?: boolean }> = ({ node, isRoot = false }) => {
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="flex flex-col items-center">
      {/* Node Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.4 }}
        className={`relative z-10 px-6 py-4 rounded-xl border-2 shadow-sm bg-white min-w-40 flex flex-col items-center justify-center transition-shadow hover:shadow-lg
          ${isRoot ? 'border-red-600 shadow-red-100/50' : 'border-slate-200 hover:border-red-300'}
        `}
      >
        <h4 className={`font-bold text-center text-sm md:text-base ${isRoot ? 'text-red-600' : 'text-slate-900'}`}>
          {node.title}
        </h4>
        <p className="text-[10px] md:text-xs text-center text-slate-500 uppercase tracking-wider mt-1 font-medium">
          {node.department}
        </p>
        {node.department && (
          <p className="text-[10px] md:text-xs text-center text-slate-500 mt-1">
            {node.department}
          </p>
        )}
      </motion.div>

      {/* Children branches */}
      {hasChildren && (
        <div className="relative flex flex-col items-center">
          {/* Main vertical stem going down from parent */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: 32 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-px bg-slate-300"
          />
          
          <div className="flex relative pt-8">
            {/* Horizontal connector line for siblings */}
            {node.children!.length > 1 && (
              <motion.div 
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute top-0 left-0 right-0 h-px bg-slate-300 origin-center"
                style={{
                  width: `calc(100% - ${100 / node.children!.length}%)`,
                  left: `${50 / node.children!.length}%`
                }}
              />
            )}
            
            {/* Render children */}
            {node.children!.map((child, index) => (
              <div key={index} className="relative flex flex-col items-center flex-1 px-2 md:px-4">
                {/* Vertical stem going down to child */}
                <motion.div 
                  initial={{ height: 0 }}
                  whileInView={{ height: 32 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="absolute top-0 w-px bg-slate-300"
                  style={{ top: '-32px' }}
                />
                <TreeNode node={child} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface OrganizationTreeProps {
  data: OrganizationNode;
}

const OrganizationTree: React.FC<OrganizationTreeProps> = ({ data }) => {
  return (
    <div className="w-full overflow-x-auto py-12 px-4 custom-scrollbar">
      <div className="min-w-[800px] lg:min-w-full flex justify-center pb-8">
        <TreeNode node={data} isRoot={true} />
      </div>
    </div>
  );
};

export default OrganizationTree;