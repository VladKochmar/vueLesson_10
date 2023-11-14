<template>
  <div class="home">
    <chats-manager />
  </div>
</template>

<script>
import ChatsManager from '@/components/ChatsManager.vue'

// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { ChatsManager },
}
</script>
