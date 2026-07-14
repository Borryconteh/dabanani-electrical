// src/components/Team/TeamCard.tsx
import React from 'react';
import { motion } from 'framer-motion';
import type { TeamMember } from './types';
import Photo from './Photo';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl overflow-hidden border border-slate-100 transition-all duration-300"
    >
      <div className="relative h-72 overflow-hidden bg-slate-100">
        <Photo
          src={member.image}
          alt={member.name}
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {member.socials && (
          <div className="absolute bottom-4 left-0 w-full flex justify-center gap-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-10">
            {member.socials.linkedin && (
              <a href={member.socials.linkedin} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
            )}
            {member.socials.email && (
              <a href={`mailto:${member.socials.email}`} className="p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-red-600 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </a>
            )}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow relative bg-white">
        {/* Abstract design element */}
        <div className="absolute top-0 right-6 w-12 h-1 bg-red-600 rounded-b-md" />
        
        <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
        <p className="text-red-600 font-semibold text-sm mb-3 uppercase tracking-wider">{member.role}</p>
        
        {member.bio ? (
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mt-auto">
            {member.bio}
          </p>
        ) : (
          <div className="flex-grow" />
        )}
      </div>
    </motion.div>
  );
};

export default TeamCard;