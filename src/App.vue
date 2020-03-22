<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@font-face {
    font-family: 'Glegoo';
    src: url('./assets/fonts/glegoo-regular.ttf') format('ttf'),
         url('./assets/fonts/glegoo-regular.woff') format('woff'),
         url('./assets/fonts/glegoo-regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
} 

@font-face {
    font-family: 'Glegoo Bold';
    src: url('./assets/fonts/glegoo-bold.ttf') format('ttf'),
         url('./assets/fonts/glegoo-bold.woff') format('woff'),
         url('./assets/fonts/glegoo-bold.woff2') format('woff2');
    font-weight: bold;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir';
    src: url('./assets/fonts/AvenirLTStd-Medium.otf') format('otf');
    font-weight: normal;
    font-style: normal;
}

/* Tabs */

.default-tabs {
  position: relative;
  margin: 0 auto;
  &__item {
    display: inline-block;
    margin: 0 5px;
    padding: 10px;
    padding-bottom: 8px;
    @apply text-sm text-gray-600 border-none bg-transparent;
    letter-spacing: 0.8px;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    transition: all 0.25s;
    &_active {
      @apply text-brand #{!important};
    }
    &:hover {
      border-bottom: 2px solid gray;
      color: black;
    }
    &:focus {
      outline: none;
      border-bottom: 2px solid gray;
      color: black;
    }
    &:first-child {
      margin-left: 0;
    }
    &:last-child {
      margin-right: 0;
    }
  }
  &__active-line {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    @apply bg-brand;
    transition: transform 0.4s ease, width 0.4s ease;
  }
}
</style>