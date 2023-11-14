<template>
  <div class="contacts-list">
    <contact-item v-for="contact in filteredContactsList" :key="contact.id" :contact-data="contact" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ContactItem from './ContactItem.vue'

export default {
  name: 'ContactsList',

  components: { ContactItem },

  computed: {
    ...mapGetters(['filteredContactsList']),
  },
}
</script>

<style lang="scss" scoped>
.contacts-list {
  display: inline-grid;
  justify-items: start;
  gap: 0.3125rem 0;
}
</style>
