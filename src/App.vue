<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
</style>