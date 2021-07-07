<template>
  <div class="h-screen overflow-y-auto md:ml-auto md:w-9/12 relative">
    <header class="w-full bg-transparent p-5 text-xs">
      <nav class="font-avenir" :class="navInfo.linkColor">
        <g-link
          v-if="navInfo.prev.hasPrev"
          class="flex content-baseline float-left"
          :to="navInfo.prev.linksTo"
        >
          <unicon
            class="mr-1 self-center"
            name="arrow-left"
            :fill="navInfo.iconColor"
          ></unicon>
          <span class="text-right"> {{ navInfo.prev.linkText }} </span>
        </g-link>
        <g-link
          v-if="navInfo.next.hasNext"
          class="flex content-baseline float-right"
          :to="navInfo.next.linksTo"
        >
          <span class="text-right"> {{ navInfo.next.linkText }} </span>
          <unicon
            class="ml-1 self-center"
            name="arrow-right"
            :fill="navInfo.iconColor"
          ></unicon>
        </g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NavLayout',
  props: ['navInfo'],
  data() {
    return {
      today: new Date().getFullYear(),
    }
  },
}
</script>

<style lang="scss"></style>
