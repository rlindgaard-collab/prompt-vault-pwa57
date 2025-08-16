import React from 'react'
export function Modal({ open, onClose, children, title }:{ open:boolean, onClose:()=>void, children:React.ReactNode, title:string }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-soft w-[min(720px,92vw)] p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-semibold text-ink dark:text-white">{title}</h3>
          <button onClick={onClose} className="px-2 py-1 rounded-2xl border border-slate-200 dark:border-slate-800">Luk</button>
        </div>
        {children}
      </div>
    </div>
  )
}
