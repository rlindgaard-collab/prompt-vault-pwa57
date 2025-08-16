import type { PromptsJson } from '../types'

function hashId(input: string) {
  let h = 0
  for (let i = 0; i < input.length; i++) {
    h = ((h << 5) - h) + input.charCodeAt(i)
    h |= 0
  }
  return 'p' + Math.abs(h).toString(36)
}

export function flatten(data: PromptsJson) {
  const out: { id: string, text: string, tab: string, section: string, category: string }[] = []
  for (const t of data) {
    for (const sec of t.sections) {
      for (const cat of sec.categories) {
        for (const p of cat.prompts) {
          const key = `${t.tab}::${sec.section}::${cat.category}::${p}`
          out.push({ id: hashId(key), text: p, tab: t.tab, section: sec.section, category: cat.category })
        }
      }
    }
  }
  return out
}
