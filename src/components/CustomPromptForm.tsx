import React, { useState } from 'react'
export function CustomPromptForm({ onSubmit }:{ onSubmit:(v:{tab:string,section:string,category:string,text:string})=>void }) {
  const [tab, setTab] = useState('Custom')
  const [section, setSection] = useState('My Ideas')
  const [category, setCategory] = useState('General')
  const [text, setText] = useState('')

  return (
    <form className="space-y-3" onSubmit={(e)=>{e.preventDefault(); onSubmit({ tab, section, category, text });}}>
      <div className="grid md:grid-cols-3 gap-3">
        <div>
          <label className="block text-sm mb-1">Fane</label>
          <input value={tab} onChange={e=>setTab(e.target.value)} className="w-full rounded-2xl border px-3 py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
        </div>
        <div>
          <label className="block text-sm mb-1">Sektion</label>
          <input value={section} onChange={e=>setSection(e.target.value)} className="w-full rounded-2xl border px-3 py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
        </div>
        <div>
          <label className="block text-sm mb-1">Kategori</label>
          <input value={category} onChange={e=>setCategory(e.target.value)} className="w-full rounded-2xl border px-3 py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800" />
        </div>
      </div>
      <div>
        <label className="block text-sm mb-1">Prompt</label>
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={6} className="w-full rounded-2xl border px-3 py-2 bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"></textarea>
      </div>
      <div className="flex justify-end gap-2">
        <button type="submit" className="px-4 py-2 rounded-2xl bg-amber-500 text-white">Gem</button>
      </div>
    </form>
  )
}
