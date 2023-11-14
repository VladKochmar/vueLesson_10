<template>
  <div>
    <search-input />
    <add-contact />
    <contacts-list />
  </div>
</template>

<script>
import AddContact from './AddContact.vue'
import ContactsList from './ContactsList.vue'
import SearchInput from './SearchInput.vue'

export default {
  name: 'ChatsManager',
  components: { ContactsList, SearchInput, AddContact },
}
</script>

<style lang="scss" scoped></style>
