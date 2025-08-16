import { Star } from 'lucide-react'
import React, { useState } from 'react'

export function PromptCard({
  id,
  text,
  onCopy,
  onToggleFav,
  fav
}: {
  id: string,
  text: string,
  onCopy: () => void,
  onToggleFav: (id: string) => void,
  fav: boolean
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 1200)
  }

  return (
    <button
      onClick={handleCopy}
      className={
        "text-left w-full rounded-2xl border p-4 transition " +
        (copied ? "border-amber-500 ring-2 ring-amber-400/60 " : "border-slate-200 dark:border-slate-800 ") +
        "bg-white dark:bg-slate-900 hover:shadow-soft active:scale-[0.99]"
      }
    >
      <div className="flex items-start justify-between gap-2">
        <div className="text-sm text-slate-600 dark:text-slate-300 whitespace-pre-wrap">{text}</div>
        <div className="flex items-center gap-2">
          {copied && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-accent text-white">Kopieret!</span>
          )}
          <button
            type="button"
            aria-label={fav ? 'Fjern fra favoritter' : 'Tilføj til favoritter'}
            onClick={(e) => { e.stopPropagation(); onToggleFav(id) }}
            className={"ml-2 shrink-0 rounded-full p-1 border " + (fav ? "border-amber-500" : "border-slate-200 dark:border-slate-800") }
            title={fav ? 'Fjern fra favoritter' : 'Tilføj til favoritter'}
          >
            {fav ? <Star className="w-5 h-5 fill-amber-500 text-amber-500" /> : <Star className="w-5 h-5 text-slate-400" />}
          </button>
        </div>
      </div>
      </button>
  )
}
