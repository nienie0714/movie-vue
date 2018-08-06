<template>
  <div>
    <div class="content" :style="{background: 'url('+ dayforcast.img +')'}">
      <!-- <img :src="dayforcast.img" alt=""> -->
      <div class="location">{{location}}</div>
      <div class="tmp">
        <div>
          <span class="num">
            {{dayforcast.tmp_max}}°
          </span>
          <span class="text">
            {{dayforcast.cond_txt_d}}
          </span>
        </div>
        <div class="temrange">
          <span class="tmp_min">
            {{dayforcast.tmp_min}}℃
          </span>~<span class="tmp_max">
            {{dayforcast.tmp_max}}℃
            </span>
        </div>
      </div>
      <div class="date">{{dayforcast.date}}</div>
      <div class="forecast">

        <div class="itemforecast" v-for="(item, index) in daily_forecast" :key="index" @click="getdayforeast(item, index)">
          <div class="tmp_text">{{item.cond_txt_d}}</div>
          <span class="tmp_min">
            {{item.tmp_min}}℃
          </span>~<span class="tmp_max">
            {{item.tmp_max}}℃
            </span>
        </div>
        <div class="hr"></div>
      </div>
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
        location: '',
        daily_forecast: [],
        dayforcast: {}
      };
    },
    created() {
      this.getforecast();
      this.getHourly();
    },
    computed: {},
    watch: {},
    methods: {
      getforecast() {
        let data = {
          key: 'c827b4ed3a9445b480048b70f09ade74',
          location: 'beijing'
        };
        htp.get(url.forecast, data).then(res => {
          res = res.data.HeWeather6[0];
          if(res.status === "ok") {
            this.location = res.basic.location;
            this.daily_forecast = res.daily_forecast;
            this.getdayforeast(this.daily_forecast[0]);
          }
        });
      },
      getdayforeast(item) {
        this.dayforcast = item;
        let weather = item.cond_txt_d;
        switch(weather) {
          case "晴":
            this.dayforcast.img = require("../assets/sun1.jpg");
            break;
          case "雨":
            this.dayforcast.img = require("../assets/rain.jpg");
            break;
          case "阵雨":
          case "雷阵雨":
            this.dayforcast.img = require("../assets/zhenyu.jpg");
            break;
          case "多云":
            this.dayforcast.img = require("../assets/cloudy.jpg");
            break;
          case "雪":
            this.dayforcast.img = require("../assets/snow.jpg");
            break;
          default:
            this.dayforcast.img = require("../assets/sun.jpg");
        }
      },
      getHourly() {
        let data = {
          key: 'c827b4ed3a9445b480048b70f09ade74',
          location: 'beijing'
        };
        htp.get(url.hourly, data).then(res => {
          console.log(res);
        });
      }
    }
  };
</script>

<style lang="less" scoped>
  .content {
    padding: 15px 30px;
    color: #fff;
    // background: linear-gradient(#b5effa, #5d88c1);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
    text-align: left;
    .location {
      padding: 50px 0 0 0;
      font-size: 48px;
    }
    .tmp {
      padding: 30px 0 0 0;
      .num {
        font: bold 120px 'Minion Pro';
      }
      .text {
        font-size: 36px;
      }
      span {
        font-size: 30px;
      }
    }
    .date {
      font-size: 18px;
      padding: 30px 0 0 0;
    }
    .forecast {
      display: flex;
      flex-wrap: nowrap;
      background-color: rgba(0, 0, 0, 0.4);
      position: fixed;
      padding: 50px 0;
      width: 100%;
      bottom: 0;
      left: 0;
      .itemforecast {
        .tmp_text {
          font-size: 30px;
        }
        display: inline-block;
        width: 33.3%;
        text-align: center;
      }
      .hr {
        border: 2px;
      }
    }
  }
</style>
