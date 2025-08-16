
export type PromptsJson = {
  tab: string
  sections: {
    section: string
    categories: { category: string, prompts: string[] }[]
  }[]
}[]


export type CustomPrompt = {
  id: string
  tab: string
  section: string
  category: string
  text: string
  createdAt: number
}
