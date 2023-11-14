<template>
  <div class="contact-editor">
    <input type="text" placeholder="Ім'я" class="input" v-model="contact.name" />
    <input type="email" placeholder="Пошта" class="input" v-model="contact.email" />
    <button v-if="!contactId" type="button" @click="onAdd">Створити</button>
    <button v-else type="button" @click="onSave">Зберегти</button>
    <button type="button" @click="onCancel">Відмінити</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ContactEditor',

  data() {
    return {
      contact: {},
    }
  },

  computed: {
    ...mapGetters(['getContactById']),

    contactId() {
      return this.$route.params.contact_id
    },
  },

  methods: {
    ...mapActions(['addContact', 'updateContact']),

    onAdd() {
      this.contact.id = this.contactId || new Date().getTime()
      this.addContact(this.contact)
      console.log(this.contact)
      this.$router.push({ name: 'home' })
    },

    onSave() {
      this.updateContact(this.contact)
      this.$router.push({ name: 'home' })
    },

    onCancel() {
      this.$router.push({ name: 'home' })
    },
  },

  created() {
    this.contact = this.getContactById(this.contactId)
  },
}
</script>

<style lang="scss" scoped>
.contact-editor {
  display: inline-grid;
  gap: 1rem 0;
}
</style>
