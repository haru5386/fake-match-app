<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Icon } from '@iconify/vue'
import { useChatStore } from '@/stores/chat'
import { formatDistanceToNow } from 'date-fns'
import { zhTW } from 'date-fns/locale'

const chatStore = useChatStore()
const newMessage = ref('')

const formatTime = (date: Date) => {
  return formatDistanceToNow(date, { addSuffix: true, locale: zhTW })
}

const sendMessage = () => {
  if (!newMessage.value.trim()) return
  chatStore.sendMessage(newMessage.value.trim())
  newMessage.value = ''
}

onMounted(() => {
  chatStore.initializeChatData()
})
</script>

<template>
  <div class="container mx-auto px-4 py-6 h-[calc(100vh-4rem)]">
    <div class="flex h-full gap-4">
      <!-- 左側聊天列表 -->
      <div class="w-1/3 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
        <!-- 搜尋欄 -->
        <div class="p-4 border-b">
          <div class="relative">
            <Icon icon="lucide:search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="搜尋聊天" 
              class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
            />
          </div>
        </div>

        <!-- 聊天列表 -->
        <div class="flex-1 overflow-y-auto">
          <div 
            v-for="user in chatStore.chatUsers" 
            :key="user.id"
            @click="chatStore.selectUser(user.id)"
            class="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
            :class="{ 'bg-gray-50': chatStore.selectedUserId === user.id }"
          >
            <img :src="user.photo" class="w-12 h-12 rounded-full object-cover" :alt="user.name" />
            <div class="ml-3 flex-1 min-w-0">
              <div class="flex justify-between items-start">
                <h3 class="font-semibold">{{ user.name }}</h3>
                <span class="text-sm text-gray-500">{{ formatTime(user.lastMessageTime) }}</span>
              </div>
              <div class="flex justify-between items-center">
                <p class="text-sm text-gray-600 truncate">{{ user.lastMessage }}</p>
                <span 
                  v-if="user.unreadCount" 
                  class="ml-2 px-2 py-1 text-xs text-white bg-primary rounded-full"
                >
                  {{ user.unreadCount }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 右側聊天視窗 -->
      <div class="flex-1 bg-white rounded-lg shadow-sm overflow-hidden flex flex-col">
        <template v-if="chatStore.selectedUserId">
          <!-- 聊天標題 -->
          <div class="p-4 border-b">
            <h2 class="font-semibold">
              {{ chatStore.chatUsers.find(u => u.id === chatStore.selectedUserId)?.name }}
            </h2>
          </div>

          <!-- 聊天內容 -->
          <div class="flex-1 overflow-y-auto p-4 space-y-4">
            <div 
              v-for="message in chatStore.getConversation" 
              :key="message.id"
              class="flex"
              :class="message.senderId === 0 ? 'justify-end' : 'justify-start'"
            >
              <div 
                class="max-w-[70%] rounded-lg px-4 py-2"
                :class="message.senderId === 0 ? 'bg-primary text-white' : 'bg-gray-100'"
              >
                <p>{{ message.content }}</p>
                <p class="text-xs mt-1 opacity-75">
                  {{ formatTime(message.timestamp) }}
                </p>
              </div>
            </div>
          </div>

          <!-- 輸入框 -->
          <div class="p-4 border-t">
            <div class="flex gap-2">
              <input 
                v-model="newMessage"
                type="text" 
                placeholder="輸入訊息..." 
                class="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
                @keyup.enter="sendMessage"
              />
              <button 
                @click="sendMessage"
                class="px-6 py-2 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              >
                發送
              </button>
            </div>
          </div>
        </template>

        <!-- 未選擇聊天對象時的提示 -->
        <div v-else class="flex-1 flex items-center justify-center text-gray-500">
          <p>選擇一個聊天對象開始對話</p>
        </div>
      </div>
    </div>
  </div>
</template> 