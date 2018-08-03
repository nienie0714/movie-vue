<template>
  <div>
    <v-header :ishome="1" :title="title" :showrrefresh="1"></v-header>
    <div class="content pt pb">
    </div>
    <div class="footer">
      <mt-button type="primary">固定在底部</mt-button>
    </div>
  </div>
</template>

<script>
  import MintUI from 'mint-ui';
  import htp from "../api/index";
  import url from "../api/api";

  export default {
    mixins: [],
    props: [],
    data() {
      return {
        title: ''
      };
    },
    created() {
      this.title = 'Mark Movie';
      this.getforecast3();
    },
    computed: {},
    watch: {},
    methods: {
      getforecast3() {
        let data = {
          key: `c827b4ed3a9445b480048b70f09ade74`,
          location: `beijing`
        };
        htp.get(url.forecast, data).then(res => {
          console.log(res);
          console.log(1111111111111);
        });
      }
    }
  };
</script>

<style lang="less" scoped>
</style>
