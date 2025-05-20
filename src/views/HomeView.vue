<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

const router = useRouter()

const handleStartMatching = () => {
  router.push('/match')
}
</script>

<template>
  <div class="relative h-screen w-full">
    <!-- 背景圖片 -->
    <div class="absolute inset-0">
      <img 
        src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=2070&auto=format&fit=crop" 
        alt="背景圖片"
        class="w-full h-full object-cover"
      />
      <!-- 漸層遮罩 -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
    </div>

    <!-- 內容 -->
    <div class="relative h-full flex flex-col items-center justify-center text-white">
      <h1 class="text-6xl font-bold mb-8 tracking-tight">Tinder</h1>
      <Button 
        size="lg"
        class="bg-[#FF5A5F] hover:bg-[#FF5A5F]/90 text-white px-8 py-6 text-lg"
        @click="handleStartMatching"
      >
        開始配對
      </Button>
    </div>
  </div>
</template>
