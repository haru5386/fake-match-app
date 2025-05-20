import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { User } from '@/assets/users'
import { users } from '@/assets/users'

export const useMatchStore = defineStore('match', () => {
  const likedUsers = ref<User[]>([])
  const remainingUsers = ref<User[]>([...users])

  const likeUser = () => {
    if (remainingUsers.value.length > 0) {
      likedUsers.value.push(remainingUsers.value[0])
      nextUser()
    }
  }

  const dislikeUser = () => {
    nextUser()
  }

  const nextUser = () => {
    if (remainingUsers.value.length > 0) {
      remainingUsers.value.shift()
    }
  }

  return {
    remainingUsers,
    likedUsers,
    likeUser,
    dislikeUser
  }
}) 