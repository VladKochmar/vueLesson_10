<template>
  <div>
    <button type="button" class="add-button" @click="onAdd"><span class="circle">+</span>Новий контакт</button>
  </div>
</template>

<script>
export default {
  name: 'AddContact',

  methods: {
    onAdd() {
      this.$router.push({
        name: 'contact',
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.add-button {
  cursor: pointer;
  color: green;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
  font-size: 1.25rem;
  font-weight: 500;
  width: 100%;
  max-width: 13.75rem;
  background: none;
  border: none;
  .circle {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    font-size: 1.75rem;
    flex: 0 0 3rem;
    widows: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid green;
  }
}
</style>
