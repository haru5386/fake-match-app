<script setup lang="ts">
import { computed, watch } from 'vue'
import type { User } from '@/assets/users'

defineOptions({
  name: 'MatchCard'
})

const props = defineProps<{
  user: User
  isActive: boolean
  action: string | null
  zIndex: number
}>()

const emit = defineEmits<{
  (e: 'animationComplete'): void
}>()

const cardStyle = computed(() => {
  const style = {
    transform: 'translateX(0) rotate(0)',
    opacity: 1,
    transition: 'none',
    zIndex: props.zIndex
  }

  if (props.action === 'like') {
    style.transform = 'translateX(120%) rotate(20deg)'
    style.opacity = 0
    style.transition = 'all 0.5s ease-out'
  } else if (props.action === 'dislike') {
    style.transform = 'translateX(-120%) rotate(-20deg)'
    style.opacity = 0
    style.transition = 'all 0.5s ease-out'
  }

  return style
})

watch(() => props.action, (newAction) => {
  if (newAction && props.isActive) {
    setTimeout(() => {
      emit('animationComplete')
    }, 500)
  }
})
</script>

<template>
  <div 
    class="absolute w-full h-full"
    :style="cardStyle"
  >
    <div class="bg-white rounded-lg shadow-lg overflow-hidden h-full">
      <div class="relative h-full">
        <img 
          :src="user.photo" 
          class="w-full h-full object-cover" 
          :alt="user.name" 
        />
        <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
          <h1 class="text-white text-2xl font-bold">
            {{ user.name }}, {{ user.age }}
          </h1>
          <p class="text-white/90">{{ user.location }}</p>
          <p class="text-white/90">{{ user.distance }} 公里</p>
          <p class="text-white/90 mt-2">{{ user.bio }}</p>
        </div>
        
        <!-- 興趣標籤 -->
        <div class="absolute bottom-32 left-4 right-4">
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="interest in user.interests" 
              :key="interest"
              class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
            >
              {{ interest }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 