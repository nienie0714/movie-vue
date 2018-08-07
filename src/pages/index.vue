<template>
  <div>
    <div class="content" :class="'weather-' + weatherIndex" v-if="this.daily_forecast.length">
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
      <hr>
      <div class="date">{{dayforcast.date}}</div>
      <div class="forecast">

        <div data-sup="{a:1}" class="itemforecast" v-for="(item, index) in daily_forecast" :key="index" @click="switchWeather(item.cond_txt_d, index)">
          <div class="img" :class="'weather-logo-' + weathers.indexOf(item.cond_txt_d)"></div>
          <div class="tmp-text">{{item.cond_txt_d}}</div>
          <span class="tmp_min">
            {{item.tmp_min}}℃
          </span>~<span class="tmp_max">
            {{item.tmp_max}}℃
            </span>
        </div>
        <div class="bord"></div>
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
        weathers: ['晴', '小雨', '阵雨', '雷阵雨', '多云', '扬沙', '雪'],
        weatherIndex: 0,
        daylyIndex: 0
      };
    },
    created() {
      this.getforecast();
      this.getHourly();
    },
    computed: {
      dayforcast() {
        return this.daily_forecast.length && this.daily_forecast[this.daylyIndex];
      }
    },
    watch: {},
    methods: {
      getforecast() {
        let data = {
          key: 'c827b4ed3a9445b480048b70f09ade74',
          location: 'xian'
        };
        htp.get(url.forecast, data).then(res => {
          res = res.data.HeWeather6[0];
          if(res.status === "ok") {
            this.location = res.basic.location;
            this.daily_forecast = res.daily_forecast;
            this.switchWeather(this.daily_forecast[0].cond_txt_d);
          }
        });
      },
      switchWeather(name, index = 0) {
        this.weatherIndex = this.weathers.indexOf(name);
        this.daylyIndex = index;
      },
      // getdayforeast(item) {
      //   this.dayforcast = item;
      //   let weather = item.cond_txt_d;
      //   switch(weather) {
      //     case "晴":
      //       this.dayforcast.img = require("../assets/sun1.jpg");
      //       this.dayforcast.simg = require("../assets/ssun.png");
      //       break;
      //     case "雨":
      //       this.dayforcast.img = require("../assets/rain.jpg");
      //       this.dayforcast.simg = require("../assets/srain.png");
      //       break;
      //     case "阵雨":
      //     case "雷阵雨":
      //       this.dayforcast.img = require("../assets/zhenyu.jpg");
      //       this.dayforcast.simg = require("../assets/szhen.png");
      //       break;
      //     case "多云":
      //       this.dayforcast.img = require("../assets/cloudy.jpg");
      //       this.dayforcast.simg = require("../assets/scloudy.png");
      //       break;
      //     case "扬沙":
      //       this.dayforcast.img = require("../assets/sand.jpg");
      //       this.dayforcast.simg = require("../assets/ssha.png");
      //       break;
      //     case "雪":
      //       this.dayforcast.img = require("../assets/snow.jpg");
      //       this.dayforcast.simg = require("../assets/ssnow.png");
      //       break;
      //     default:
      //       this.dayforcast.img = require("../assets/sun.jpg");
      //   }
      // },
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
    background: ~'no-repeat 0 0 / 100% 100%';
    .location {
      padding-top: 50px;
      font-size: 48px;
    }

    &.weather-0 {
      background-image: url('../assets/sun.jpg');
    }
    &.weather-1 {
      background-image: url('../assets/rain.jpg');
    }
    &.weather-2,
    &.weather-3 {
      background-image: url('../assets/zhenyu.jpg');
    }
    &.weather-4 {
      background-image: url('../assets/cloudy.jpg');
    }
    &.weather-5 {
      background-image: url('../assets/sand.jpg');
    }
    &.weather-6 {
      background-image: url('../assets/snow.jpg');
    }
    .tmp {
      padding-top: 30px;
      .num {
        font: bold 120px 'Minion Pro';
      }
      .text {
        font-size: 36px;
      }
      .temrange {
        // width: 250px;
        // border-bottom: 4px solid rgba(255, 255, 255, 0.6);
        padding-bottom: 15px;
      }
      span {
        font-size: 30px;
      }
    }
    hr {
      width: 40%;
      opacity: 0.6;
    }
    .date {
      font-size: 18px;
      padding-top: 30px;
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
        .img {
          width: 96px;
          height: 96px;
          background: ~'no-repeat 0 0 / 100% 100%';
          margin: 0 auto;
          &.weather-logo-0 {
            background-image: url('../assets/ssun.png');
          }
          &.weather-logo-1 {
            background-image: url('../assets/srain.png');
          }
          &.weather-logo-2,
          &.weather-logo-3 {
            background-image: url('../assets/szhen.png');
          }
          &.weather-logo-4 {
            background-image: url('../assets/scloudy.png');
          }
          &.weather-logo-5 {
            background-image: url('../assets/ssnow.png');
          }
          &.weather-logo-6 {
            background-image: url('../assets/sun.jpg');
          }
        }
        .tmp-text {
          font-size: 30px;
        }
        width: 33.3%;
        text-align: center;
      }
    }
  }
</style>
