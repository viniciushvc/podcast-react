import localforage from 'localforage'

const _KEY = 'playerConfig'

export const setSettings = (settings) => localforage.setItem(_KEY, settings)

export const getSettings = () => localforage.getItem(_KEY, settings)
