<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '@iconify/vue'
import { useMatchStore } from '@/stores/match'
import MatchCard from '@/components/match/MatchCard.vue'

const matchStore = useMatchStore()
const currentAction = ref('')

const handleLike = () => {
  currentAction.value = 'like'
}

const handleDislike = () => {
  currentAction.value = 'dislike'
}

const handleAnimationComplete = () => {
  console.log('handleAnimationComplete')
  if (currentAction.value === 'like') {
    matchStore.likeUser()
  } else {
    matchStore.dislikeUser()
  }
  currentAction.value = ''
}
</script>

<template>
  <div class="container mx-auto px-4 py-6">
    <div class="max-w-md mx-auto">
      <!-- 配對卡片容器 -->
      <div class="relative h-[calc(100vh-12rem)]">
        <template v-if="matchStore.remainingUsers.length > 0">
          <MatchCard 
            v-for="(item, index) in matchStore.remainingUsers.slice(0, 3)"
            :key="item.id"
            :user="item"
            :is-active="index === 0"
            :z-index="3 - index"
            :action="index === 0 ? currentAction : null"
            @animation-complete="handleAnimationComplete"
          />
        </template>
        <div v-else class="h-full flex flex-col items-center justify-center text-center">
          <Icon icon="lucide:heart-off" class="text-6xl text-gray-400 mb-4" />
          <h2 class="text-2xl font-bold text-gray-700">沒有更多配對對象了！</h2>
          <p class="text-gray-500 mt-2">稍後再回來看看</p>
        </div>
      </div>

      <!-- 操作按鈕 -->
      <div v-if="matchStore.remainingUsers.length > 0" class="flex justify-center gap-4 mt-6">
        <button 
          @click="handleDislike" 
          class="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          :disabled="!!currentAction"
        >
          <Icon icon="lucide:x" class="text-3xl text-red-500" />
        </button>
        <button 
          @click="handleLike" 
          class="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          :disabled="!!currentAction"
        >
          <Icon icon="lucide:heart" class="text-3xl text-green-500" />
        </button>
      </div>
    </div>
  </div>
</template> 