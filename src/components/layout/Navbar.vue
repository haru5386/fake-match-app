<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Icon } from '@iconify/vue'
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 bg-white border-b border-border z-50">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center h-16">
        <!-- 左側：首頁連結 -->
        <RouterLink to="/" class="flex items-center text-[#FF5A5F] hover:text-[#FF5A5F]/80 transition-colors">
          <Icon icon="lucide:home" class="text-2xl" />
        </RouterLink>

        <!-- 右側：配對和聊天連結 -->
        <div class="flex items-center space-x-6">
          <RouterLink to="/match" class="text-[#484848] hover:text-[#FF5A5F] transition-colors">
            <Icon icon="lucide:heart" class="text-2xl" />
          </RouterLink>
          <RouterLink to="/chat" class="text-[#484848] hover:text-[#FF5A5F] transition-colors">
            <Icon icon="lucide:message-circle" class="text-2xl" />
          </RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template> 