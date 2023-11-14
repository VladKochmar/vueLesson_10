<template>
  <div class="contact" @click="onEdit(contact.id)">
    <div class="contact__icon">{{ iconLetter }}</div>
    <div class="contact__body">
      <h3 class="contact__title">{{ contact.name }}</h3>
      <p class="contact__email">{{ contact.email }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactItem',

  props: {
    contactData: {
      type: Object,
      default: () => ({}),
    },
  },

  computed: {
    contact() {
      return this.contactData
    },

    iconLetter() {
      return this.contact.name[0]
    },
  },

  methods: {
    onEdit(id) {
      this.$router.push({
        name: 'contact',
        params: { contact_id: id },
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.contact {
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0 0.625rem;
  // .contact__icon
  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-weight: 700;
    color: #fff;
    flex: 0 0 3rem;
    width: 3rem;
    height: 3rem;
    background-color: green;
    border-radius: 50%;
  }
  // .contact__body
  &__body {
    & > * {
      &:not(:last-child) {
        margin-bottom: 0.3125rem;
      }
    }
  }
  // .contact__title
  &__title {
    line-height: 1.25;
  }
  // .contact__email
  &__email {
    font-size: 0.875rem;
    color: #9c9c9c;
  }
}
</style>
