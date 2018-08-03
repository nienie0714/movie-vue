<template>
  <div class="v-header">
    <mt-header>
      <!-- Home键 -->
      <mt-button slot="left" class="left-btn" v-if="showhome" @click="$emit('home')">
        <img src="../assets/common/back.png" slot="icon">
      </mt-button>
      <!-- 返回上一路由 -->
      <mt-button slot="left" class="left-btn" v-if="showback" @click="back">
        <img src="../assets/common/back.png" slot="icon">
      </mt-button>
      <!-- 刷新右-->
      <mt-button slot="right" class="right-btn" v-if="showrrefresh" @click="refresh">
        <img src="../assets/common/refresh.png" slot="icon">
      </mt-button>
    </mt-header>
    <div class="v-header_title" v-html="title"></div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    props: [
      'showhome',       // 控制home键是否显示
      'showback',       //控制返回上一路由键（<）是否显示
      'showrrefresh',   //控制刷新右按钮是否显示
      'title'           //标题
    ],
    methods: {
      back() {
        this.$emit('back');
        if(this.ishome) {
          window.location.reload();
        } else {
          this.$router.go(-1);
        }
      },
      refresh() {
        window.location.reload();
      }
    }
  };
</script>

<style scoped lang="less">
  .v-header {
    position: absolute;
    width: 100%;
    z-index: 2;
    left: 0;
    top: 0;
    .mint-header {
      padding: 0;
      background-color: #1fbb30;
      height: 80px;
      font-size: 16px; /*no*/
    }
    .mint-button {
      width: 88px;
      .mint-button-icon {
      }
      &:hover {
        background-color: #1f9930;
      }
    }
    &_title {
      position: absolute;
      top: 0;
      left: 20%;
      width: 60%;
      height: 80px;
      line-height: 80px;
      text-align: center;
      background-color: #1fbb30;
      font-size: 19px; /* no */
      color: #fff;
      z-index: 2;
    }
    img {
      width: 36px;
      height: 36px;
    }
    .mint-button-text {
      font-size: 28px;
    }
  }
</style>


