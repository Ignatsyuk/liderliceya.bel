import { defineStore } from 'pinia'

const useLayoutStore = defineStore('layout', () => {
  return {
    isModalVisible: false,
  }
})

export default useLayoutStore