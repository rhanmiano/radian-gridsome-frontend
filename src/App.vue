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
    src: url('./assets/fonts/AvenirLTStd-Book.otf') format('otf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir'; // light
    src: url('./assets/fonts/AvenirLTStd-Book.otf') format('otf');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir Roman'; // light
    src: url('./assets/fonts/AvenirLTStd-Roman.otf') format('otf');
    font-weight: bolder;
    font-style: normal;
}

@font-face {
    font-family: 'Avenir Medium'; // light
    src: url('./assets/fonts/AvenirLTStd-Medium.otf') format('otf');
    font-weight: bolder;
    font-style: normal;
}

/* Tabs */
.tab-content {
  min-height: 500px;
}
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

.msg-block {
    @apply text-layout-b1 leading-none z-50 #{!important};

    .msg-content {
      @apply py-2 #{!important};

      h3 {
        @apply m-0 my-2 text-sm #{!important};
      }

      p {
          @apply mb-2 #{!important};
      }
 
    }
}

@screen lg {
    .msg-block {
        @apply text-xs w-1/5;
    }
}

._vue-flash-msg-body_success,
._vue-flash-msg-body_warning,
._vue-flash-msg-body_info,
._vue-flash-msg-body_error {
    background-color: rgba(255,255,255, .8) !important;
    @apply border-none #{!important};
}

// Social Media Icons
.social-icons {
  @apply flex self-center rounded-full w-8 h-8 transition duration-300 ease-out bg-transparent mr-2 opacity-50;

  &:hover {
    @apply bg-brand-n2 opacity-100;
  }

  @screen md {
    @apply mx-auto mb-2;
  }
}

.wrap-animate {
  opacity: 0;
}
</style>