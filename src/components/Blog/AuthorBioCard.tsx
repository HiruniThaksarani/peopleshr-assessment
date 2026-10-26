import React from "react";
import Image from "next/image";
import { Author } from "@/sanity/types";
import { LinkedinIcon, XIcon, ShieldCheckIcon } from "@/components/ui/icons";

interface AuthorBioCardProps {
  author: Author;
}

export function AuthorBioCard({ author }: AuthorBioCardProps) {
  if (!author) return null;

  return (
    <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50/30 border border-slate-200/90 p-6 sm:p-7 shadow-2xs">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5 text-center sm:text-left">
        {/* Avatar */}
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shrink-0 border-2 border-white shadow-md">
          <Image
            src={author.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80"}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
            <h4 className="font-extrabold text-base sm:text-lg text-slate-900">
              {author.name}
            </h4>
            <span className="inline-flex items-center gap-1 text-[10.5px] font-bold px-2 py-0.5 rounded-full bg-blue-100/90 text-primary">
              <ShieldCheckIcon className="w-3 h-3" />
              Verified Author
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-primary mb-2.5">
            {author.role}
          </p>

          {author.bio && (
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-xl">
              {author.bio}
            </p>
          )}

          {/* Socials */}
          {author.socials && (
            <div className="flex items-center justify-center sm:justify-start gap-2.5 mt-3.5 pt-3 border-t border-slate-200/60">
              {author.socials.linkedin && (
                <a
                  href={author.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white hover:bg-[#0077b5] text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={`${author.name} on LinkedIn`}
                >
                  <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                </a>
              )}
              {author.socials.twitter && (
                <a
                  href={author.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full bg-white hover:bg-black text-slate-600 hover:text-white border border-slate-200 flex items-center justify-center transition-all duration-200 hover:scale-105"
                  aria-label={`${author.name} on X`}
                >
                  <XIcon className="w-3 h-3 fill-current" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
