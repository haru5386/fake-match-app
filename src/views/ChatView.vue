<script setup lang="ts">
import { ref } from 'vue'

const chats = ref([
  {
    id: 1,
    name: '小美',
    lastMessage: '嗨！最近過得如何？',
    time: '10:30',
    unread: 2,
    avatar: 'https://picsum.photos/100/100'
  },
  {
    id: 2,
    name: '小華',
    lastMessage: '週末要一起去看電影嗎？',
    time: '昨天',
    unread: 0,
    avatar: 'https://picsum.photos/100/101'
  }
])

const searchQuery = ref('')
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <!-- 搜尋欄 -->
    <div class="mb-4">
      <div class="relative">
        <Icon icon="lucide:search" class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input 
          v-model="searchQuery"
          type="text" 
          placeholder="搜尋聊天" 
          class="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-primary"
        />
      </div>
    </div>

    <!-- 聊天列表 -->
    <div class="space-y-2">
      <div v-for="chat in chats" 
           :key="chat.id"
           class="flex items-center p-3 bg-white rounded-lg shadow-sm hover:bg-gray-50 cursor-pointer">
        <img :src="chat.avatar" class="w-12 h-12 rounded-full object-cover" alt="頭像" />
        <div class="ml-3 flex-1">
          <div class="flex justify-between items-start">
            <h3 class="font-semibold">{{ chat.name }}</h3>
            <span class="text-sm text-gray-500">{{ chat.time }}</span>
          </div>
          <div class="flex justify-between items-center">
            <p class="text-sm text-gray-600 truncate">{{ chat.lastMessage }}</p>
            <span v-if="chat.unread" 
                  class="ml-2 px-2 py-1 text-xs text-white bg-primary rounded-full">
              {{ chat.unread }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 