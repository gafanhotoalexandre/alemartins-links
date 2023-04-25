'use client'

import * as Switch from '@radix-ui/react-switch'

export function Switcher() {
  function handleToggleTheme() {
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className="flex justify-center">
      <Switch.Root
        onClick={handleToggleTheme}
        className="w-16 h-6 relative rounded-full border dark:border-stroke border-stroke-light dark:bg-surface bg-surface-light"
      >
        <Switch.Thumb className="block w-8 h-8 bg-white dark:bg-moon-stars bg-sun bg-no-repeat bg-center rounded-full -translate-y-1/2 absolute data-[state=checked]:translate-x-full data-[state=unchecked]:translate-x-0 transition-transform" />
      </Switch.Root>
    </div>
  )
}
