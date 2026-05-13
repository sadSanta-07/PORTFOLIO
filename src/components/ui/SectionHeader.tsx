import React from 'react';

interface SectionHeaderProps {
  title: string;
  count?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex items-baseline gap-4 mb-12 border-b-2 border-[var(--muted)] pb-4">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tighter uppercase text-[var(--charcoal)]">{title}</h2>
    </div>
  );
};
