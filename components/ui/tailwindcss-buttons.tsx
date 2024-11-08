import React from 'react';
import Link from 'next/link';

interface BorderButtonProps {
  label: string;
  href: string;
  external?: boolean;
}

export const BorderButton = ({
  label,
  href,
  external = false,
}: BorderButtonProps) => {
  const ButtonContent = () => (
    <div className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"></div>
      <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        {label}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <ButtonContent />
      </a>
    );
  }

  return (
    <Link href={href}>
      <ButtonContent />
    </Link>
  );
};
