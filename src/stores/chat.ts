import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useMatchStore } from './match'
import type { User } from '@/assets/users'

export interface Message {
  id: number
  senderId: number
  receiverId: number
  content: string
  timestamp: Date
  isRead: boolean
}

export interface ChatUser extends User {
  lastMessage: string
  lastMessageTime: Date
  unreadCount: number
}

export const useChatStore = defineStore('chat', () => {
  const matchStore = useMatchStore()
  const messages = ref<Message[]>([])
  const selectedUserId = ref<number | null>(null)

  // 生成隨機訊息
  const generateRandomMessage = (senderId: number, receiverId: number): Message => {
    const messageTemplates = [
      '嗨！最近過得如何？',
      '週末要一起出去玩嗎？',
      '你喜歡什麼類型的電影？',
      '推薦一家不錯的餐廳給你！',
      '今天天氣真好呢！',
      '你平常都喜歡做什麼運動？',
      '要不要找時間一起去看展覽？',
      '聽說最近有個不錯的音樂節',
      '你對寵物感興趣嗎？',
      '分享一下你最近看的好書吧'
    ]
    
    return {
      id: Math.floor(Math.random() * 10000),
      senderId,
      receiverId,
      content: messageTemplates[Math.floor(Math.random() * messageTemplates.length)],
      timestamp: new Date(Date.now() - Math.random() * 7 * 24 * 60 * 60 * 1000),
      isRead: Math.random() > 0.3
    }
  }

  // 初始化聊天數據
  const initializeChatData = () => {
    const myId = 0 // 當前用戶 ID
    matchStore.likedUsers.forEach(user => {
      // 為每個配對用戶生成 3-7 條隨機訊息
      const messageCount = Math.floor(Math.random() * 5) + 3
      for (let i = 0; i < messageCount; i++) {
        const sender = Math.random() > 0.5 ? myId : user.id
        const receiver = sender === myId ? user.id : myId
        messages.value.push(generateRandomMessage(sender, receiver))
      }
    })
  }

  // 獲取聊天用戶列表
  const chatUsers = computed(() => {
    return matchStore.likedUsers.map(user => {
      const userMessages = messages.value.filter(
        msg => msg.senderId === user.id || msg.receiverId === user.id
      ).sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime())

      const lastMessage = userMessages[0]
      const unreadCount = userMessages.filter(
        msg => msg.senderId === user.id && !msg.isRead
      ).length

      return {
        ...user,
        lastMessage: lastMessage?.content || '',
        lastMessageTime: lastMessage?.timestamp || new Date(),
        unreadCount
      }
    }).sort((a, b) => b.lastMessageTime.getTime() - a.lastMessageTime.getTime())
  })

  // 獲取與特定用戶的對話
  const getConversation = computed(() => {
    if (!selectedUserId.value) return []
    return messages.value
      .filter(msg => 
        msg.senderId === selectedUserId.value || 
        msg.receiverId === selectedUserId.value
      )
      .sort((a, b) => a.timestamp.getTime() - b.timestamp.getTime())
  })

  // 發送新訊息
  const sendMessage = (content: string) => {
    if (!selectedUserId.value) return
    
    messages.value.push({
      id: Math.floor(Math.random() * 10000),
      senderId: 0, // 當前用戶 ID
      receiverId: selectedUserId.value,
      content,
      timestamp: new Date(),
      isRead: true
    })
  }

  // 標記訊息為已讀
  const markAsRead = (userId: number) => {
    messages.value = messages.value.map(msg => {
      if (msg.senderId === userId && !msg.isRead) {
        return { ...msg, isRead: true }
      }
      return msg
    })
  }

  // 選擇聊天對象
  const selectUser = (userId: number) => {
    selectedUserId.value = userId
    markAsRead(userId)
  }

  return {
    messages,
    selectedUserId,
    chatUsers,
    getConversation,
    sendMessage,
    selectUser,
    initializeChatData
  }
}) 