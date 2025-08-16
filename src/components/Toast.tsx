
import React from 'react'
export function Toast({ message, show }: { message: string, show: boolean }) {
  return (
    <div className={'fixed bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-2xl shadow-soft bg-ink text-white transition ' +
      (show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none')}>{message}</div>
  )
}
