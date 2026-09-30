import React, { useState } from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'icon-only' | 'footer';
  className?: string;
  imgClassName?: string;
  showTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'compact',
  className = '',
  imgClassName = '',
  showTagline = true,
}) => {
  const [imgError, setImgError] = useState(false);

  // If image fails for any unexpected environment reason, render an ultra-precise SVG fallback
  if (imgError) {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        {/* Stylized Eye Symbol matching the uploaded logo */}
        <div className="relative w-11 h-11 shrink-0 flex items-center justify-center">
          <svg viewBox="0 0 120 80" className="w-full h-full">
            {/* Upper eyelid - Deep Royal Blue */}
            <path
              d="M10,48 C35,12 85,12 110,48 C90,26 40,26 10,48 Z"
              fill="#0F3B82"
            />
            {/* Lower eyelid - Vibrant Teal */}
            <path
              d="M15,48 C40,76 90,72 115,35 C95,60 45,64 15,48 Z"
              fill="#009688"
            />
            {/* Outer Iris - Gradient Cyan to Deep Blue */}
            <defs>
              <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#001845" />
                <stop offset="45%" stopColor="#0077B6" />
                <stop offset="85%" stopColor="#00B4D8" />
                <stop offset="100%" stopColor="#48CAE4" />
              </radialGradient>
            </defs>
            <circle cx="60" cy="45" r="19" fill="url(#irisGrad)" />
            {/* Pupil */}
            <circle cx="60" cy="45" r="9" fill="#03071E" />
            {/* Reflection Glint */}
            <circle cx="64" cy="41" r="3" fill="#FFFFFF" opacity="0.9" />
          </svg>
        </div>

        {variant !== 'icon-only' && (
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold tracking-wider text-xl text-[#0B2545] leading-none">
                NAZEER
              </span>
              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#009688] bg-teal-50 px-1.5 py-0.5 rounded border border-teal-200">
                Hospital
              </span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <span className="h-[1px] w-3 bg-[#009688]"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#009688]">
                EYE CARE
              </span>
              <span className="h-[1px] w-3 bg-[#009688]"></span>
            </div>
            {showTagline && variant === 'full' && (
              <span className="text-[9px] font-medium tracking-wider text-slate-500 uppercase mt-0.5">
                Clearer Vision • Brighter Tomorrows
              </span>
            )}
          </div>
        )}
      </div>
    );
  }

  if (variant === 'icon-only') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <img
          src="/logo.png"
          alt="Nazeer Eye Care Emblem"
          className={`object-contain ${imgClassName || 'w-18 h-18 sm:w-22 sm:h-22'}`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      </div>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        <div className="p-2.5 rounded-2xl bg-white shadow-xl border border-slate-700/60 shrink-0">
          <img
            src="/logo.png"
            alt="Nazeer Eye Care Official Logo"
            className={`object-contain ${imgClassName || 'h-24 sm:h-28 md:h-32 w-auto max-w-[220px]'}`}
            onError={() => setImgError(true)}
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl text-white tracking-tight">
            NAZEER EYE CARE
          </span>
          <span className="text-xs sm:text-sm text-teal-400 tracking-wider uppercase font-semibold mt-1">
            Clearer Vision • Brighter Tomorrows
          </span>
          <span className="text-xs text-slate-400 mt-1">
            PMC Certified Ophthalmic Hospital • Lions Complex
          </span>
        </div>
      </div>
    );
  }

  // Full / compact presentation
  return (
    <div className={`inline-flex items-center gap-3.5 ${className}`}>
      <div className="relative flex items-center justify-center">
        <img
          src="/logo.png"
          alt="Nazeer Eye Care - Clearer Vision, Brighter Tomorrows"
          className={`object-contain transition-transform duration-300 hover:scale-[1.02] ${
            imgClassName || 'h-20 sm:h-24 md:h-28 lg:h-32 w-auto max-w-[260px] sm:max-w-[320px]'
          }`}
          onError={() => setImgError(true)}
          referrerPolicy="no-referrer"
        />
      </div>

      {variant === 'compact' && (
        <div className="hidden sm:flex flex-col justify-center border-l-2 border-slate-200 pl-3.5 py-1">
          <span className="text-xs uppercase font-bold tracking-wider text-teal-700 bg-teal-50/90 px-2.5 py-0.5 rounded border border-teal-200 inline-block w-fit">
            Tertiary Institute
          </span>
          <span className="text-xs text-slate-700 font-semibold tracking-tight mt-1">
            Lions Medical Complex Campus
          </span>
        </div>
      )}
    </div>
  );
};
