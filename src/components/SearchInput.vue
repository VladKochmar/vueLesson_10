<template>
  <div class="container">
    <input type="text" placeholder="Search" class="input" v-model="currentSearchValue" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'SearchInput',

  computed: {
    ...mapGetters(['searchInputValue']),

    currentSearchValue: {
      get() {
        return this.searchInputValue
      },
      set(newValue) {
        this.updateSearchInputValue(newValue)
      },
    },
  },

  methods: {
    ...mapActions(['updateSearchInputValue']),
  },
}
</script>

<style lang="scss" scoped>
.container {
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
</style>
