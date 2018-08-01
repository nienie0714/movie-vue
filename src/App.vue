<template>
  <div class="container-wrapper">
    <transition :name="transitionName">
      <router-view class="container"></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'vx-view',
    data() {
      return {
        transitionName: '',
        title: ''
      };
    },
    watch: {
      '$route'(to, from) {
        const toDepth = to.path.substr(1) ? to.path.substr(1).split('/').length : 0;
        const fromDepth = from.path.substr(1) ? from.path.substr(1).split('/').length : 0;
        this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';

      }
    }
  }
</script>

<style lang="less">
  @import './less/index.less';
  .slide-left-enter,
  .slide-right-leave-active {
    -webkit-transform: translate(100%, 0);
  }
  .slide-left-leave-active,
  .slide-right-enter {
    -webkit-transform: translate(-100%, 0);
  }
</style>
