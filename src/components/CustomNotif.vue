<template>
  <div class="w-8 h-1 px-4 py-2">
    <h2>{{ flashMessage.title }}</h2>
    <p>{{ flashMessage.message}}</p>
  </div>
</template>

<script>
export default {
  name: 'CustomNotif',
  props: {
    messageId: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>

</style>