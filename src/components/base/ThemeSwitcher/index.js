import React, { useState, useEffect } from 'react'

export default function ({ color }) {
  const [theme, setTheme] = useState()

  const isDark = theme === 'dark'

  useEffect(() => {
    setTheme(window.__theme)

    window.__onThemeChange = () => setTheme(window.__theme)
  }, [])

  function changeTheme() {
    window.__setPreferredTheme(isDark ? 'light' : 'dark')
  }

  return (
    <div>
      <button color={color} onClick={changeTheme}>
        {isDark ? 'dark' : 'light'}
      </button>
    </div>
  )
}
