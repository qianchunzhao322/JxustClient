<template>
  <div class="app">
    <div  :class="['fristshow', toPageValue? 'fristShowAfter': 'fristShowBefore']">
      <!-- 这个是iframe的结构 -->
      <div v-if="selectBigShow"
           class="bigMask">
        <div class="close"
             @click="closeBigMask"><i class="el-icon-close"></i></div>
        <div class="ifram">
          <!-- <a href="http://baidu.com">fadadf</a> -->
          <iframe id="mainIframe"
                  name="mainIframe"
                  :src="iframeUrl"
                  frameborder="0"
                  width="100%"
                  height="100%"
                  scrolling="auto"></iframe>
        </div>
      </div>
      <!-- 这个是大屏结构 -->
      <div class="fristPage">
        <!-- 大屏首部标题结构 -->
        <div class="header">
        <div class="title lefter"></div>
        <div class="title left"><img src="@/assets/headLeft.png"
               style="padding-top: .1748rem; width:100%"
               alt=""></div>
        <div class="title middle">
          <img src="@/assets/headMiddle.png"
               style="padding-top: 0.0458rem; width:100%"
               alt="">
          <div class="txt">江西理工大学信息工程学院</div>
        </div>
        <div class="title right">
          <img src="@/assets/headRight.png"
               style="padding-top: .1748rem; width:100%"
               alt="">
        </div>
        <div class="title righter"></div>
      </div>
      <!-- 大屏内容结构 -->
      <div class="body">
        <div class="topper">
          <div class="left">
            <div class="inner">
              <!-- <div class="rot">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div> -->
              <div class="show">
                <div v-if="selectShow"
                     class="mask">
                  <div v-if="selectSchool"
                       class="box school">
                    <div class="innerbox">
                      <div class="title">
                        <div class="leftTxt">校院忆</div>
                        <div class="rightTxt"
                             @click="toStudent">校友忆</div>
                      </div>
                      <div class="input">
                        <select v-model="schoolXqValue"
                                style="height:100%;weight:100%"
                                clearable
                                placeholder="校区">
                          <option value="校区"
                                  disabled
                                  selected>校区</option>
                          <option v-for="item in schoolXqOptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </option>
                        </select>
                      </div>
                      <div class="input">
                        <select v-model="schoolImgValue"
                                style="height:100%;weight:100%"
                                clearable
                                placeholder="图片类型">
                          <option value="图片类型"
                                  disabled
                                  selected>图片类型</option>
                          <option v-for="item in schoolImgOptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </option>
                        </select>
                      </div>
                      <div class="btn"
                           @click="schoolSearch">搜索</div>
                      <div class="btn close"
                           @click="closeShow">关闭</div>
                    </div>
                  </div>
                  <div v-if="selectStudent"
                       class="box student">
                    <div class="innerbox">
                      <div class="title">
                        <div class="rightTxt"
                             @click="toSchool">校院忆</div>
                        <div class="leftTxt">校友忆</div>
                      </div>
                      <div class="input">
                        <select v-model="studentYearValue"
                                style="height:100%;weight:100%"
                                clearable
                                @change="yearChangeToMajor($event)"
                                placeholder="毕业年份">
                          <option value="毕业年份"
                                  disabled
                                  selected>毕业年份</option>
                          <option v-for="item in studentYearOptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </option>
                        </select>
                      </div>
                      <!-- <div class="input">
                      <select v-model="studentTypeValue" style="height:100%;weight:100%"
                               clearable
                               placeholder="学生类型">
                      <option value="学生类型" disabled selected>学生类型</option>
                      <option v-for="item in studentTypeOptions"
                                 :key="item.value"
                                 :label="item.label"
                                 :value="item.value">
                      </option>
                    </select>
                    </div> -->
                      <div class="input">
                        <select v-model="studentZyValue"
                                style="height:100%;weight:100%"
                                clearable
                                placeholder="专业"
                                @click="majorChangeToClass($event)">
                          <option value="专业"
                                  disabled
                                  selected>专业</option>
                          <option v-for="item in studentZyOptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </option>
                        </select>
                      </div>
                      <div class="input">
                        <select v-model="studentClassValue"
                                style="height:100%;weight:100%"
                                clearable
                                placeholder="班级">
                          <option value="班级"
                                  disabled
                                  selected>班级</option>
                          <option v-for="item in studentClassOptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </option>
                        </select>
                      </div>
                      <div class="input">
                        <select v-model="studentImgValue"
                                style="height:100%;weight:100%"
                                clearable
                                placeholder="图片类型">
                          <option value="图片类型"
                                  disabled
                                  selected>图片类型</option>
                          <option v-for="item in studentImgOptions"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value">
                          </option>
                        </select>
                      </div>
                      <div class="btn"
                           @click="studentSearch">搜索</div>
                      <div class="btn close"
                           @click="closeShow">关闭</div>
                    </div>
                  </div>
                </div>
                <img :src="bigPhotoUrl"
                     style="width: 100%; height:100%"
                     alt="">
              </div>
            </div>
            <div class="txt"
                 @click="outerStudentClick">校友忆<i class="el-icon-search"></i></div>
            <div class="txt"
                 id="bottom"
                 @click="outerSchoolClick">校院忆</div>
          </div>
          <div class="middle">
            <div class="innerbox">
              <div class="font top"
                   @click="preFour"
                   :style="showStyleTop"><i class="el-icon-arrow-up"></i></div>
              <div class="photo"
                   v-for="items in photoShow"
                   :key="items.index">
                <img :src="items.url"
                     @click="showToBig($event)"
                     style="width:100%;height: 100%;"
                     alt="">
                <div class="shadow">{{ items.title }}</div>
                <div class="triangle"></div>
              </div>
              <div class="font bottom"
                   @click="nextFour"
                   :style="showStyleBottom"><i class="el-icon-arrow-down"></i></div>
            </div>
          </div>
          <div class="right">
            <div class="top">
              <div class="info">
                <div class="title"><i class="toutiao">&#xe637;</i><i style="margin-left:10px">在职教师</i><i class="num">{{teacherSum}}</i></div>
                <div class="main">
                  <div class="infos">
                    <i>教授</i>
                    <div class="progress">
                      <div class="inner"
                           :style="{width: teacherProfessor}"></div>
                    </div>
                    <div class="gdp">{{teacherProfessor}}</div>
                  </div>
                  <div class="infos">
                    <i>副教授</i>
                    <div class="progress"
                         style="margin-left:10%">
                      <div class="inner"
                           :style="{width: teacherSsociateProfessor}"></div>
                    </div>
                    <div class="gdp">{{teacherSsociateProfessor}}</div>
                  </div>
                  <div class="infos">
                    <i>讲师</i>
                    <div class="progress">
                      <div class="inner"
                           :style="{width: teacherLecturer}"></div>
                    </div>
                    <div class="gdp">{{teacherLecturer}}</div>
                  </div>
                </div>
              </div>
              <div class="info infoNext">
                <div class="title"><i class="toutiao">&#xe63a;</i><i style="margin-left:10px">在校学生</i><i class="num">{{studentSum}}</i></div>
                <div class="main">
                  <div class="infos">
                    <i>本科生</i>
                    <div class="progress">
                      <div class="inner"
                           :style="{width: studentUndergrad}"></div>
                    </div>
                    <div class="gdp">{{studentUndergrad}}</div>
                  </div>
                  <div class="infos">
                    <i>研究生</i>
                    <div class="progress">
                      <div class="inner"
                           :style="{width: studentPostgraduate}"></div>
                    </div>
                    <div class="gdp">{{studentPostgraduate}}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom">
              <div class="title">
                <div class="txt">竞赛获奖</div>
              </div>
              <div class="main">
                <div class="echart"
                     id="echarts1"
                     style="width:100%; height:100%"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="bottomer">
          <div class="left">
            <div class="inner">
              <div class="all lefter">
                <div class="title">
                  <div class="txt">院徽介绍</div>
                </div>
                <div class="echarts echartsToText"
                     id="echarts2">
                     <img src="./assets/yuanhui.png" align="right" width="34%" height="53%" hspace="5" vspace="5" alt="">
                     圆圈内部图案上半部分的符号分别表示AI(Artificial Intelligence)，同时也是帆和桅杆的抽象表示，圆圈内部图案下半部分的两条波浪线表示章江和贡江。圆圈内部图案整体的寓意为信息工程学院（人工智能学院）扬帆起航，奔向未来。
                </div>
              </div>
              <div class="all righter">
                <div class="title">
                  <div class="txt">毕业去向</div>
                  <div class="txt littleClick" @click="toNextPage">查看生源详情</div>
                </div>
                <div class="echarts"
                     id="echarts3"></div>
              </div>
            </div>
          </div>
          <div class="right left">
            <div class="inner">
              <div class="all lefter">
                <div class="title"
                     style="background-size: 45% 100%;">
                  <div class="txt">男女比例</div>
                </div>
                <div class="echarts"
                     id="echarts4"></div>
              </div>
              <div class="all righter">
                <div class="title"
                     style="background-size: 96% 30%;">
                  <div class="txt"
                       style="left: 10%">最新动态</div>
                </div>
                <div class="main">
                  <div class="new"
                       v-for="item in news"
                       :key="item.index">
                    <div class="infos"
                         :data-url="item.url"
                         @click="open($event)">{{item.title}}</div>
                    <div class="time">{{item.time}}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      <!-- 这个是大屏滚动后的地图结构 -->
      <div class="bgmap"
           style="width:100%; height:100%; background-color: #081D43;">
           <div class="btn" @click="toNextPage"><i class="el-icon-back"></i>返回</div>
        <!-- <div class="step">
          <el-steps direction="vertical"
                    process-status="finish"
                    finish-status="wait"
                    @click="changeMap($event)"
                    :active="active">
            <el-step title="2019" style="cursor: pointer;"></el-step>
            <el-step title="2020"></el-step>
            <el-step title="2021"></el-step>
            <el-step title="2022"></el-step>
          </el-steps>
        </div> -->
        <div class="map"
             id="echarts5"></div>
      </div>
    </div>
  </div>
</template>
<script>
import '@/utils/flexible.js'
import * as echarts from 'echarts'
import { debounce } from 'lodash'
import importJson from './utils/china.json'
export default {
  data () {
    return {
      active: 0,
      toPageValue: false,
      // 全屏与否
      fullscreen: false,

      // 图表实例未初始化
      myChartsFrist: null,
      myChartsSecond: null,
      myChartsThird: null,
      myChartsFourth: null,
      myChartsFifth: null,
      resize: null, // 防抖函数

      // 显示隐藏控制
      selectShow: false,
      selectSchool: false,
      selectStudent: false,
      selectBigShow: false,

      // 师生模块
      teacherSum: '',
      studentSum: '',
      teacherProfessor: '',
      teacherSsociateProfessor: '',
      teacherLecturer: '',
      studentUndergrad: '',
      studentPostgraduate: '',

      // 原始数据
      eFristYear: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'],
      eFristPro: [400, 400, 300, 300, 300, 400, 400, 400, 300],
      eFristCon: [400, 500, 500, 500, 500, 400, 400, 500, 500],
      eFristSum: [400, 600, 700, 700, 1000, 400, 400, 600, 700],
      // eSecondData: [
      //   { value: 176, name: '广东' },
      //   { value: 143, name: '江苏' },
      //   { value: 114, name: '浙江' },
      //   { value: 74, name: '北京' },
      //   { value: 72, name: '河南' },
      //   { value: 69, name: '陕西' },
      //   { value: 69, name: '上海' },
      //   { value: 67, name: '山东' },
      //   { value: 64, name: '湖北' },
      //   { value: 57, name: '福建' },
      //   { value: 46, name: '安徽' },
      //   { value: 46, name: '河北' },
      //   { value: 42, name: '湖南' },
      //   { value: 40, name: '四川' },
      //   { value: 29, name: '天津' },
      //   { value: 24, name: '广西' },
      //   { value: 24, name: '江西' },
      //   { value: 22, name: '辽宁' },
      //   { value: 18, name: '山西' },
      //   { value: 15, name: '云南' },
      //   { value: 14, name: '甘肃' },
      //   { value: 14, name: '吉林' },
      //   { value: 14, name: '重庆' },
      //   { value: 12, name: '内蒙' },
      //   { value: 11, name: '贵州' },
      //   { value: 10, name: '黑龙江' },
      //   { value: 9, name: '海南' },
      //   { value: 8, name: '宁夏' },
      //   { value: 3, name: '青海' }
      // ],
      eThirdTo: ['升学', '就业', '其他'],
      eThirdPG: [37, 71, 4],
      eThirdStuType: ['升学', '就业', '其他'],
      eThirdUG: [37, 71, 4],
      eFourthType: ['电信大类', '计算机大类'],
      eFourthData1: [23, 84],
      eFourthData2: [13, 54],

      // iframe
      iframeUrl: 'https://xiaoyuan.cycnet.com.cn/s?uid=4882924&app_version=1.3.5&sid=1355875&time=1660292707&signature=xKb8LA9nmqlJRV56zE31ygzggIMR8yN7ZDNjYOMGgyPBWwreQ0&sign=59a1645643fe9ff796b25f92b4b9f7a4#',
      news: [],

      // 默认值
      schoolXqValue: '校区',
      schoolImgValue: '图片类型',
      studentYearValue: '毕业年份',
      studentTypeValue: '学生类型',
      studentZyValue: '专业',
      studentClassValue: '班级',
      studentImgValue: '图片类型',

      // 图片控制
      default: 0,
      bigPhotoUrl: 'http://10.21.63.25:18082/img/showGif.gif',
      showStyleTop: { opacity: 1 },
      showStyleBottom: { opacity: 1 },
      photoShow: [],
      photoMini: [{
        index: 1,
        url: 'http://10.21.63.25:18082/img/middlePhotoFrist.jpg',
        title: '打卡点1'
      }, {
        index: 2,
        url: 'http://10.21.63.25:18082/img/middlePhotoSecond.jpg',
        title: '打卡点2'
      }, {
        index: 3,
        url: 'http://10.21.63.25:18082/img/middlePhotoThird.jpg',
        title: '打卡点3'
      }, {
        index: 4,
        url: 'http://10.21.63.25:18082/img/middlePhotoFourth.jpg',
        title: '打卡点4'
      }, {
        index: 5,
        url: 'http://10.21.63.25:18082/img/middlePhotoFifth.jpg',
        title: '打卡点5'
      }],

      // 级联
      schoolXqOptions: [],
      schoolImgOptions: [],
      studentYearOptions: [],
      studentTypeOptions: [],
      studentZyOptions: [],
      studentClassOptions: [],
      studentImgOptions: []
    }
  },
  mounted () {
    this.init()
    this.initPhoto()
    this.initItems()
    // this.handleFullScreen()
    this.testJson = require('./utils/china.json')
    window.addEventListener('resize', this.resize)
  },
  created () {
    this.resize = this.addResize()
    this.selectPhoto(this.default)
    // setInterval(() => {
    //   this.handleFullScreen()
    // }, 1000)
  },
  beforeDestoryed () {
    // 组件销毁前移除监听,释放echarts实例,防止内存泄露
    this.myChartsFrist.dispose()
    this.myChartsSecond.dispose()
    this.myChartsThird.dispose()
    this.myChartsFourth.dispose()
    window.removeEventListener('resize', this.resize)
  },
  methods: {
    changeMap (event) {
      console.log(event)
    },
    // 初始化数据信息
    initItems () {
      this.getItemsCampus()
      this.getItemsCampusImgType()
      this.getItemsYears()
      this.getItemsStudentImgType()
      this.getTeachersAndStudent()
      this.getChartFristData()
      this.getChartSecondData()
      this.getChartThirdData()
      this.getChartFourthData()
      this.getNewsData()
    },
    // 获取校区数据
    async getItemsCampus () {
      await this.$axios.get('/jlclient/getItems/getCampus').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.schoolXqOptions = res.data.data.campus
        }
      })
    },
    // 获取校区图片类型
    async getItemsCampusImgType () {
      await this.$axios.get('/jlclient/getItems/getCampusImgType').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.schoolImgOptions = res.data.data.imgType
        }
      })
    },
    // 获取年份
    async getItemsYears () {
      await this.$axios.get('/jlclient/getItems/getYear').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.studentYearOptions = res.data.data.year
        }
      })
    },
    // 年份联动 专业
    yearChangeToMajor (event) {
      console.log(event.target.value)
      this.$axios.get('/jlclient/getItems/getMajor', { params: { graduateYear: event.target.value } }).then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.studentZyOptions = res.data.data.major
        }
      })
    },
    // 专业联动班级
    majorChangeToClass (event) {
      console.log(event.target.value)
      console.log(this.studentYearValue)
      console.log(this.studentZyValue)
      this.$axios.get('/jlclient/getItems/getClsss', { params: { graduateYear: this.studentYearValue, majorName: this.studentZyValue } }).then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.studentClassOptions = res.data.data.class
        }
      })
    },
    // 获取学生照片类型
    async getItemsStudentImgType () {
      await this.$axios.get('/jlclient/getItems/getClassImgType').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.studentImgOptions = res.data.data.imgType
        }
      })
    },
    // 获取师生信息
    async getTeachersAndStudent () {
      await this.$axios.get('/jlclient/teacherAndStudent').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.teacherProfessor = res.data.data.teacher.professor
          this.teacherSsociateProfessor = res.data.data.teacher.ssociateProfessor
          this.teacherLecturer = res.data.data.teacher.lecturer
          this.studentUndergrad = res.data.data.student.undergrad
          this.studentPostgraduate = res.data.data.student.postgraduate
          this.teacherSum = res.data.data.teacher.num
          this.studentSum = res.data.data.student.num
        }
      })
    },
    // 获取第一个图表数据
    async getChartFristData () {
      await this.$axios.get('/jlclient/awards').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.eFristYear = res.data.data.year
          this.eFristPro = res.data.data.province
          this.eFristCon = res.data.data.country
          this.eFristSum = res.data.data.rewardSum
          this.drawFrist(this.eFristYear, this.eFristPro, this.eFristCon, this.eFristSum)
        } else {
          this.$message({ type: 'danger', message: '图表数据获取失败，请刷新' })
        }
      })
    },
    // 获取第二个图表数据(生源地图)
    async getChartSecondData () {
      await this.$axios.get('/jlclient/studentsFrom').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.eSecondData = res.data.data
          this.drawFifth(this.eSecondData)
        } else {
          this.$message({ type: 'danger', message: '图表数据获取失败，请刷新' })
        }
      })
    },
    // 获取第三个图表数据
    async getChartThirdData () {
      await this.$axios.get('/jlclient/studentsTo').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.eThirdTo = res.data.data.toType
          this.eThirdStuType = res.data.data.stuType
          this.eThirdPG = res.data.data.postGrad
          this.eThirdUG = res.data.data.underGrad
          this.drawThird(this.eThirdTo, this.eThirdStuType, this.eThirdPG, this.eThirdUG)
        } else {
          this.$message({ type: 'danger', message: '图表数据获取失败，请刷新' })
        }
      })
    },
    // 获取第四个图表数据
    async getChartFourthData () {
      await this.$axios.get('/jlclient/sex').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.eFourthType = res.data.data.major
          this.eFourthData1 = res.data.data.woman
          this.eFourthData2 = res.data.data.man
          this.drawFourth(this.eFourthType, this.eFourthData1, this.eFourthData2)
        } else {
          this.$message({ type: 'danger', message: '图表数据获取失败，请刷新' })
        }
      })
    },
    // 获取资讯信息
    async getNewsData () {
      await this.$axios.get('/jlclient/news').then((res) => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.news = res.data.data.news
        } else {
          this.$message({ type: 'danger', message: '最新资讯数据获取失败，请刷新' })
        }
      })
    },
    // 初始化图片样式
    initPhoto () {
      if (this.photoMini.length <= 4) {
        this.showStyleTop = { opacity: 0, cursor: 'default' }
        this.showStyleBottom = { opacity: 0, cursor: 'default' }
      } else {
        this.showStyleTop = { opacity: 1 }
        this.showStyleBottom = { opacity: 1 }
        if (this.default === 0) {
          this.showStyleTop = { opacity: 0, cursor: 'default' }
        }
      }
    },
    // 前一页功能
    preFour () {
      if (this.default === 0) {
        this.showStyleTop = { opacity: 0, cursor: 'default' }
      } else {
        this.showStyleTop = { opacity: 1, cursor: 'pointer' }
        this.showStyleBottom = { opacity: 1, cursor: 'pointer' }
        this.default--
        this.selectPhoto(this.default)
        if (this.default === 0) {
          this.showStyleTop = { opacity: 0, cursor: 'default' }
        }
      }
    },
    // 后一页功能
    nextFour () {
      if (this.default === Math.floor(this.photoMini.length / 4)) {
        this.showStyleBottom = { opacity: 0, cursor: 'default' }
      } else {
        this.showStyleTop = { opacity: 1, cursor: 'pointer' }
        this.showStyleBottom = { opacity: 1, cursor: 'pointer' }
        this.default++
        this.selectPhoto(this.default)
        if (this.default === Math.floor(this.photoMini.length / 4)) {
          this.showStyleBottom = { opacity: 0, cursor: 'default' }
        }
      }
    },
    // 割取照片
    selectPhoto (n) {
      // this.photoShow.push(this.photoMini.slice((4 * n), (4 * (n + 1))))
      this.photoShow = []
      this.photoMini.slice((4 * n), (4 * (n + 1))).forEach(item => {
        this.photoShow.push(item)
      })
    },
    // 投影到左侧屏
    showToBig (e) {
      this.bigPhotoUrl = e.srcElement.currentSrc
    },
    // 校友回忆和校园回忆的切换
    outerSchoolClick () {
      this.selectShow = false
      this.selectSchool = false
      this.selectStudent = false
      this.selectShow = true
      this.selectSchool = true
    },
    outerStudentClick () {
      this.selectShow = false
      this.selectSchool = false
      this.selectStudent = false
      this.selectShow = true
      this.selectStudent = true
    },
    closeShow () {
      this.selectShow = false
      this.selectSchool = false
      this.selectStudent = false
    },
    toStudent () {
      this.selectSchool = false
      this.selectStudent = true
    },
    toSchool () {
      this.selectStudent = false
      this.selectSchool = true
    },
    open (event) {
      this.selectBigShow = true
      this.iframeUrl = event.target.dataset.url
      // console.log(event.target.dataset.url)
    },
    closeBigMask () {
      this.selectBigShow = false
    },
    // 检索校园忆
    async schoolSearch () {
      const formData = new FormData()
      formData.append('campus', '' + this.schoolXqValue)
      formData.append('type', '' + this.schoolImgValue)
      await this.$axios.post('/jlclient/selectSchool', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '查询成功') {
          this.$message({ type: 'success', message: '查询成功' })
          console.log(res.data.data)
          this.photoMini = res.data.data
          this.initPhoto()
          this.selectPhoto(this.default)
          this.closeShow()
        } else {
          this.$message({ type: 'alert', message: res.data.msg })
        }
      })
    },
    // 检索校友忆
    studentSearch () {
      const formData = new FormData()
      formData.append('year', +this.studentYearValue)
      formData.append('major', '' + this.studentZyValue)
      formData.append('class1', '' + this.studentClassValue)
      formData.append('type', '' + this.studentImgValue)
      this.$axios.post('/jlclient/selectStudent', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => {
        if (res.data.status === 200 && res.data.msg === '请求成功') {
          this.$message({ type: 'success', message: '查询成功' })
          this.photoMini = res.data.data
          this.initPhoto()
          this.selectPhoto(this.default)
          this.closeShow()
        }
        if (res.data.status === 500 && res.data.msg === '未查询到该信息') {
          this.$message({ type: 'alert', message: '暂无相应数据' })
        }
      })
    },
    // 图表重置
    addResize () {
      return debounce(() => {
        this.myChartsFrist.resize()
        // this.myChartsSecond.resize()
        this.myChartsThird.resize()
        this.myChartsFourth.resize()
        this.myChartsFifth.resize()
      }, 500)
    },
    // 图表实例化初始化
    init () {
      // var that = this
      this.myChartsFrist = echarts.init(document.getElementById('echarts1'))
      // this.myChartsSecond = echarts.init(document.getElementById('echarts2'))
      this.myChartsThird = echarts.init(document.getElementById('echarts3'))
      this.myChartsFourth = echarts.init(document.getElementById('echarts4'))
      this.myChartsFifth = echarts.init(document.getElementById('echarts5'))
      this.drawFrist(this.eFristYear, this.eFristPro, this.eFristCon, this.eFristSum)
      // this.drawSecond(this.eSecondData)
      this.drawThird(this.eThirdTo, this.eThirdStuType, this.eThirdPG, this.eThirdUG)
      this.drawFourth(this.eFourthType, this.eFourthData1, this.eFourthData2)
      this.drawFifth(this.eSecondData)
    },
    // 项目全屏展示（未使用）
    handleFullScreen () {
      const element = document.documentElement
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen()
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen()
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen()
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen()
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen()
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen()
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen()
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen()
        }
      }
      this.fullscreen = !this.fullscreen
    },
    // 图一
    drawFrist (fyear, fpro, fcon, fsum) {
      var year = fyear
      var pro = fpro
      var con = fcon
      var sum = fsum
      if (!this.myChartsFrist) return
      // 绘制图表
      const option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '0%',
          right: '13%',
          bottom: '26%',
          top: '7%',
          containLabel: true
        },
        legend: {
          data: ['1', '2', '3'],
          right: '16%',
          top: '-2%',
          textStyle: {
            color: '#fff'
          },
          itemWidth: 14,
          itemHeight: 12
          // itemGap: 35
        },
        xAxis: {
          type: 'category',
          data: year,
          axisLine: {
            lineStyle: {
              color: 'white'

            }
          },
          axisLabel: {
            // interval: 0,
            // rotate: 40,
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '0.105rem'
            }
          }
        },

        yAxis: {
          type: 'value',
          // max: '1200',
          axisLine: {
            show: false,
            lineStyle: {
              color: 'white'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: 'rgba(255,255,255,0.3)'
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: 'Microsoft YaHei',
              fontSize: '0.075rem'
            }
          }
        },
        dataZoom: [{
          show: true,
          height: '12rem',
          xAxisIndex: [
            0
          ],
          bottom: '20%',
          start: 10,
          end: 90,
          handleIcon: 'path://M306.1,413c0,2.2-1.8,4-4,4h-59.8c-2.2,0-4-1.8-4-4V200.8c0-2.2,1.8-4,4-4h59.8c2.2,0,4,1.8,4,4V413z',
          handleSize: '100%',
          handleStyle: {
            color: '#d3dee5'

          },
          textStyle: { color: '#fff' },
          borderColor: '#90979c'
        }, {
          type: 'inside',
          show: true,
          height: 15,
          start: 1,
          end: 35
        }],
        series: [{
          name: '省级',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#fccb05'
              }, {
                offset: 1,
                color: '#f5804d'
              }]),
              barBorderRadius: 12
            }
          },
          data: pro
        },
        {
          name: '国级',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#8bd46e'
              }, {
                offset: 1,
                color: '#09bcb7'
              }]),
              barBorderRadius: 11
            }

          },
          data: con
        },
        {
          name: '总',
          type: 'bar',
          barWidth: '15%',
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#248ff7'
              }, {
                offset: 1,
                color: '#6851f1'
              }]),
              barBorderRadius: 11
            }
          },
          data: sum
        }]
      }
      option && this.myChartsFrist.setOption(option)
    },
    // 图二（未使用）
    drawSecond (sdata) {
      var data = sdata
      if (!this.myChartsSecond) return
      // 绘制图表
      const option = {
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
          {
            name: '生源图',
            type: 'pie',
            radius: ['5rem', '190rem'],
            center: ['45%', '70%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: false
              }
            },
            labelLine: { // 删除指示线
              normal: {
                show: false
              }
            },
            data: data
          }
        ]
      }
      option && this.myChartsSecond.setOption(option)
    },
    // 图三
    drawThird (to, stuType, pg, ug) {
      if (!this.myChartsThird) return
      // 绘制图表
      const xData = to
      const legendData = stuType // 图例
      const firstIndustry = pg // 本科生
      const thirdIndustry = ug // 研究生
      const option = {
        grid: {
          x: 0,
          y: 0,
          x2: 0,
          y2: 0,
          top: '15%',
          left: '3%',
          right: '3%',
          bottom: '20%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            crossStyle: {
              color: '#999'
            }
          }
        },
        legend: {
          orient: 'vertical',
          left: 'center',
          bottom: 'bottom',
          padding: [10, 0, 0, 0],
          data: legendData,
          // 图例滚动
          // type: 'scroll',
          // 图例文字样式
          textStyle: {
            color: 'rgba(36, 173, 254, 1)',
            fontSize: '0.1rem'
          }
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              show: false
            },
            interval: 1,
            axisLabel: {
              color: 'rgba(36, 173, 254, 1)',
              fontSize: '0.1rem'
            },
            axisLine: {
              show: false
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '',
            min: 0,
            // max: 200,
            // interval: 20,
            axisLabel: {
              formatter: '{value} ',
              textStyle: {
                // 坐标轴颜色
                color: 'rgba(36, 173, 254, 1)',
                fontSize: '0.1rem'
              }
            },
            // 坐标轴线样式
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid', // solid实线;dashed虚线
                color: 'rgba(36, 173, 254, 0.2)'
              }
            }
          },
          {
            type: 'value',
            name: '',
            min: 0,
            // max: 100,
            // interval: 20,
            axisLabel: {
              formatter: '{value}',
              textStyle: {
                // 坐标轴颜色
                color: 'rgba(36, 173, 254, 1)',
                fontSize: '0.1rem'
              }
            },
            // 坐标轴线样式
            splitLine: {
              show: true,
              lineStyle: {
                type: 'solid',
                color: 'rgba(36, 173, 254, 0.2)'
              }
            }
          }
        ],
        series: [
          {
            name: '本科生',
            data: thirdIndustry,
            type: 'line',
            smooth: true, // true曲线; false折线
            itemStyle: {
              normal: {
                color: '#ffc600', // 改变折线点的颜色
                lineStyle: {
                  color: '#ffc600', // 改变折线颜色
                  type: 'solid'
                }
              }
            },
            areaStyle: {
              // 折线图颜色半透明
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(255,198,0, 0.5)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(255,198,0, 0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          },
          {
            name: '研究生',
            data: firstIndustry,
            type: 'line',
            smooth: true, // true曲线; false折线
            itemStyle: {
              normal: {
                color: '#24adfe', // 改变折线点的颜色
                lineStyle: {
                  color: '#24adfe', // 改变折线颜色
                  type: 'solid'
                }
              }
            },
            areaStyle: {
              // 折线图颜色半透明
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(36,173,254, 0.5)' // 0% 处的颜色
                }, {
                  offset: 1, color: 'rgba(52,112,252, 0.1)' // 100% 处的颜色
                }],
                global: false // 缺省为 false
              }
            }
          }
        ]
      }
      option && this.myChartsThird.setOption(option)
    },
    // 图四
    drawFourth (etype, data11, data22) {
      var type = etype
      var data1 = data11
      var data2 = data22
      if (!this.myChartsFourth) return
      // 绘制图表
      const option = {
        legend: {
          top: '6',
          x: 'center',
          textStyle: {
            fontSize: '0.0843rem',
            color: 'rgba(101, 213, 255, 1)'
          },
          icon:
            'path://M512 881.777778 512 881.777778C716.222629 881.777778 881.777778 716.222629 881.777778 512 881.777778 307.777371 716.222629 142.222222 512 142.222222 307.777373 142.222222 142.222222 307.777371 142.222222 512 142.222222 716.222629 307.777373 881.777778 512 881.777778L512 881.777778ZM512 1024 512 1024C229.230208 1024 0 794.769789 0 512 0 229.230211 229.230208 0 512 0 794.769789 0 1024 229.230211 1024 512 1024 794.769789 794.769789 1024 512 1024L512 1024Z',
          itemWidth: 8, // 设置宽度
          itemHeight: 8, // 设置高度、
          itemGap: 10 // 设置间距
        },
        tooltip: {
          show: true,
          trigger: 'axis', // axis , item
          backgroundColor: 'RGBA(0, 49, 85, 1)',
          borderColor: 'rgba(0, 151, 251, 1)',
          borderWidth: 1,
          borderRadius: 0,
          textStyle: {
            color: '#BCE9FC',
            fontSize: 16,
            align: 'left'
          }
        },
        grid: {
          right: '5%',
          top: '20%',
          left: '5%',
          bottom: '5%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: true,
          data: type,
          axisLabel: {
            // 坐标轴刻度标签的相关设置。
            interval: 0, // 设置为 1，表示『隔一个标签显示一个标签』
            // margin:15,
            textStyle: {
              color: '#65D5FF',
              fontStyle: 'normal',
              fontSize: '0.0983rem'
            }
          },
          axisTick: {
            // 坐标轴刻度相关设置。
            show: false
          },
          axisLine: {
            // 坐标轴轴线相关设置
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.2)'
            }
          },
          splitLine: {
            // 坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: 'rgba(77, 128, 254, 0.2)'
            }
          }
        },
        yAxis: [
          {
            type: 'value',
            splitNumber: 3,
            axisLabel: {
              textStyle: {
                color: '#65D5FF',
                fontStyle: 'normal',
                fontSize: '0.0983rem'
              }
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: 'rgba(77, 128, 254, 0.2)'
              }
            }
          }
        ],
        series: [
          {
            name: '女',
            type: 'pictorialBar',
            barWidth: '120%',
            stack: '数量',
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#00FFB4' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255, 255, 255, .1)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                } // 渐变颜色
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

            data: data1
          }, {
            name: '男',
            type: 'pictorialBar',
            barWidth: '120%',
            stack: '数量',
            label: {
              normal: {
                show: false
              }
            },
            itemStyle: {
              normal: {
                color: {
                  type: 'linear',
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [
                    {
                      offset: 0,
                      color: '#C000FF' // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: 'rgba(255, 255, 255, .1)' // 100% 处的颜色
                    }
                  ],
                  globalCoord: false // 缺省为 false
                } // 渐变颜色
              }
            },
            symbol:
              'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',

            data: data2
          }]
      }
      option && this.myChartsFourth.setOption(option)
    },
    // 图五
    drawFifth (sdata) {
      if (!this.myChartsFifth) return
      // 绘制图表
      this.myChartsFifth.showLoading()
      this.myChartsFifth.hideLoading()
      echarts.registerMap('china', importJson)
      console.log('test', this.testJson) // 静态数据
      const option = {
        title: {
          text: '2020年江西理工大学生源分布（全国）',
          left: '16%',
          top: '3%',
          textStyle: {
            color: '#11DFF2',
            fontFamily: 'Microsoft YaHei',
            fontSize: '0.225rem'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{b}<br/>{c} (人)'
        },
        visualMap: {
          min: 1,
          max: 1000,
          text: ['High', 'Low'],
          realtime: false,
          textStyle: {
            color: '#11DFF2',
            fontFamily: 'Microsoft YaHei',
            fontSize: '0.065rem'
          },
          calculable: true,
          inRange: {
            color: ['lightskyblue', 'yellow', 'orangered']
          }
        },
        series: [
          {
            name: '该年生源分布',
            type: 'map',
            map: 'china',
            layoutCenter: ['50%', '65%'],
            layoutSize: '130%',
            label: {
              show: true
            },
            data: sdata
          }
        ]
      }

      option && this.myChartsFifth.setOption(option)
    },
    toNextPage () {
      this.toPageValue = !this.toPageValue
    }
  }
}
</script>

<style lang="less" scoped >
@import url("./static/iconfont/iconfont.css");
@import url("./static/css/import.css");
.app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;
  background: url("./assets/bgi.jpg") no-repeat;
  background-size: 100% 100%;
  .fristshow {
    height: 100%;
    width: 100%;
    transform: translate(0, -0%);
    .bigMask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.4);
    .close {
      position: absolute;
      top: 4%;
      left: 93%;
      height: 8%;
      width: 4%;
      // background-color: #fff;
      i {
        font-size: 0.5rem;
        color: white;
        cursor: pointer;
      }
    }
    .ifram {
      position: absolute;
      top: 10%;
      left: 10%;
      height: 80%;
      width: 80%;
      background-color: #fff;
    }
  }
    .fristPage{
      width: 100%;
      height: 100%;
    .header {
      height: 9%;
      width: 100%;
      display: flex;
      background-color: rgba(0, 0, 0, 0);
      .title {
        float: left;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
      }
      .lefter {
        width: 7%;
      }
      .left {
        width: 30%;
      }
      .middle {
        position: relative;
        width: 26%;
        .txt {
          position: absolute;
          height: 80%;
          width: 90%;
          top: 10%;
          left: 5%;
          line-height: 2;
          font-size: 0.1858rem;
          color: #fff;
          font-weight: bold;
        }
      }
      .right {
        width: 30%;
      }
      .righter {
        width: 7%;
      }
    }
    .body {
      height: 91%;
      width: 100%;
      background-color: rgba(0, 0, 0, 0);
      .topper {
        height: 66%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0);
        display: flex;
        .left {
          position: relative;
          height: 100%;
          width: 55%;
          float: left;
          // background-color: #fff;
          background: url("./assets/photo.png") no-repeat;
          background-size: 100% 100%;
          .inner {
            position: absolute;
            top: 14%;
            left: 8.7%;
            width: 83.4%;
            height: 72%;
            // background-color: #fff;
            border-radius: 2%;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            .rot {
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
              position: absolute;
              background-color: #11dff2;
              animation: rotate 4s linear infinite;
              span {
                width: 100%;
                height: 20%;
                position: absolute;
                background-color: #01163d;
              }
              span:nth-child(1) {
                transform: rotate(90deg);
              }
              span:nth-child(2) {
                transform: rotate(45deg);
              }
              span:nth-child(3) {
                transform: rotate(135deg);
              }
              span:nth-child(4) {
                transform: rotate(157deg);
              }
              span:nth-child(5) {
                transform: rotate(23deg);
              }
              @keyframes rotate {
                100% {
                  transform: rotate(360deg);
                }
              }
            }
            .show {
              position: absolute;
              top: 1%;
              left: 0.5%;
              width: 99%;
              height: 98%;
              border-radius: 2%;
              z-index: 1;
              font-family: pmzd;
              img {
                position: absolute;
                top: 0;
                left: 0;
                z-index: 8;
                border-radius: 2%;
              }
              .mask {
                position: absolute;
                top: 0;
                left: 0;
                height: 100%;
                width: 100%;
                border-radius: 2%;
                z-index: 9;
                background-color: rgba(0, 0, 0, 0.5);
                .box {
                  position: absolute;
                  top: 5%;
                  left: 32%;
                  height: 94%;
                  width: 36%;
                  background: url("./assets/search_schools.png") no-repeat;
                  background-size: 100% 100%;
                  .innerbox {
                    position: absolute;
                    top: 6%;
                    left: 15%;
                    height: 89%;
                    width: 70%;
                    .title {
                      height: 15%;
                      width: 100%;
                      display: flex;
                      justify-content: space-between;
                      border-bottom: 0.0102rem solid #11dff2;
                      // background-color: #fff;
                      .leftTxt {
                        line-height: 1.3;
                        color: #11dff2;
                        font-size: 0.186rem;
                        cursor: pointer;
                      }
                      .rightTxt {
                        line-height: 1.7;
                        color: #11dff2;
                        font-size: 0.143rem;
                        cursor: pointer;
                      }
                    }
                    .input {
                      height: 15%;
                      width: 100%;
                      select {
                        display: block;
                        background-color: rgba(0, 0, 0, 0);
                        border: none;
                        border-radius: 0%;
                        height: 100%;
                        width: 100%;
                        outline: 0;
                        line-height: 1.7;
                        font-size: 0.1222rem;
                        font-family: pmzd;
                        padding-left: 0.059rem;
                        color: #11dff2;
                        border-bottom: 1px solid #11dff2;
                        cursor: pointer;
                      }
                    }
                    .btn {
                      position: absolute;
                      bottom: 0;
                      left: 35%;
                      height: 13%;
                      width: 30%;
                      font-size: 0.1222rem;
                      color: #11dff2;
                      cursor: pointer;
                    }
                    .close {
                      position: absolute;
                      bottom: 0;
                      left: 80%;
                      height: 10%;
                      width: 20%;
                      font-size: 0.0222rem;
                      color: #11dff2;
                      cursor: pointer;
                    }
                  }
                }
                .student {
                  background: url("./assets/search_students.png") no-repeat;
                  background-size: 100% 100%;
                  .innerbox {
                    .title {
                      .rightTxt {
                        line-height: 2.1;
                      }
                    }
                    .input {
                      height: 13%;
                    }
                  }
                }
              }
            }
          }
          .inner::after {
            content: "";
            position: absolute;
            width: 110%;
            height: 110%;
            background-image: conic-gradient(
              transparent,
              transparent,
              transparent,
              #11dff2
            );
            animation-delay: -2s;
            animation: animation 4s linear infinite;
          }
          .inner::before {
            content: "";
            position: absolute;
            width: 110%;
            height: 110%;
            background-image: conic-gradient(
              transparent,
              transparent,
              transparent,
              #11dff2
            );
            animation: animation 4s linear infinite;
          }
          @keyframes animation {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .txt {
            position: absolute;
            top: 5.5%;
            left: 48%;
            height: 7%;
            width: 21.7%;
            font-size: 0.1934rem;
            font-family: pmzd;
            line-height: 1.3;
            font-weight: normal;
            color: #11dff2;
            cursor: pointer;
            // background-color: #fff;
          }
          #bottom {
            top: 87%;
            left: 31%;
            height: 7%;
            width: 16.5%;
          }
        }
        .middle {
          height: 100%;
          width: 12%;
          float: left;
          background-color: rgba(0, 0, 0, 0);
          // background-color: #fff;
          .innerbox {
            // background-color: rgb(220, 53, 53);
            width: 100%;
            height: 86%;
            margin-top: 11.5%;
            .photo {
              position: relative;
              width: 80%;
              height: 19%;
              margin-top: 8%;
              margin-left: 10%;
              background-color: rgba(0, 0, 0, 0);
              img {
                cursor: pointer;
              }
              .shadow {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 30%;
                background-color: rgba(0, 0, 0, 0.5);
                font-size: 0.1033rem;
                color: #fff;
                text-align: center;
                line-height: 1.4;
                overflow: hidden;
                cursor: default;
              }
              .triangle {
                position: absolute;
                left: -8%;
                top: 47%;
                width: 10%;
                cursor: default;
                // height: 12%;
                border: 0.0413rem solid;
                border-color: transparent transparent transparent #3afcff;
                background-color: transparent;
              }
            }
            .font {
              color: #fff;
              cursor: pointer;
              font-size: 0.1033rem;
            }
            .font:hover {
              background-color: rgba(0, 166, 252, 0.3);
              color: #e8f7ff;
            }
            .top {
              // margin-top: 10%;
            }
            .bottom {
              margin-top: 5%;
            }
          }
        }
        .right {
          height: 100%;
          width: 32%;
          float: left;
          background-color: rgba(0, 0, 0, 0);
          .top {
            height: 40%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0);
            .info {
              height: 50%;
              width: 100%;
              background-color: rgba(0, 0, 0, 0);
              .title {
                width: 100%;
                height: 40%;
                background-color: rgba(0, 0, 0, 0);
                text-align: left;
                font-size: 0.1526rem;
                font-family: pmzd;
                color: #11dff2;
                display: flex;
                .toutiao {
                  font-size: 0.1963rem;
                  line-height: 1.5;
                }
                i {
                  display: block;
                  float: left;
                  margin-left: 0.1042rem;
                  line-height: 2.2;
                  height: 100%;
                  font-weight: bold;
                  font-style: normal;
                }
                .num {
                  line-height: 1.7;
                  color: #ff8d1a;
                  font-family: sz;
                  font-size: 0.1969rem;
                }
              }
              .main {
                width: 100%;
                height: 60%;
                display: flex;
                .infos {
                  height: 100%;
                  width: 33%;
                  float: left;
                  position: relative;
                  i {
                    position: absolute;
                    top: 36%;
                    left: 10%;
                    font-size: 0.1238rem;
                    color: #fff;
                    font-style: normal;
                  }
                  .progress {
                    position: absolute;
                    top: 60%;
                    left: 40%;
                    height: 5%;
                    width: 55%;
                    background-color: rgb(241, 241, 241);
                    .inner {
                      height: 100%;
                      width: 25%;
                      background-color: #ecc74c;
                    }
                  }
                  .gdp {
                    position: absolute;
                    top: 27%;
                    left: 60%;
                    color: #fff;
                    font-size: 0.1033rem;
                  }
                }
              }
            }
            .infoNext {
              border-top: 0.0104rem solid;
              border-image-source: linear-gradient(
                to right,
                transparent,
                #ffeedf,
                transparent
              );
              border-image-slice: 1;
              .main {
                width: 100%;
                .infos {
                  width: 50%;
                }
              }
            }
          }
          .bottom {
            height: 60%;
            width: 100%;
            background-color: rgba(0, 0, 0, 0);
            .title {
              position: relative;
              height: 16%;
              width: 100%;
              background: url("./assets/title1.png") no-repeat;
              font-family: pmzd;
              background-size: 95% 30%;
              background-position: 0% 70%;
              // background-color: #fff;
              .txt {
                position: absolute;
                width: 30%;
                height: 70%;
                top: 0;
                left: 0;
                font-size: 0.155rem;
                font-weight: normal;
                color: #ffeedf;
              }
            }
            .main {
              position: relative;
              height: 84%;
              width: 98%;
              background: url("./assets/border1.png") no-repeat;
              background-size: 100% 100%;
              .echart {
                position: absolute;
                height: 81%;
                width: 88%;
                margin-left: 6%;
                top: 12%;
                // background-color: #fff;
              }
            }
          }
        }
      }
      .bottomer {
        height: 34%;
        width: 100%;
        display: flex;
        .left {
          position: relative;
          width: 40%;
          height: 100%;
          margin-left: 1.6%;
          float: left;
          background: url("./assets/border2.png") no-repeat;
          background-size: 100% 100%;
          .inner {
            position: absolute;
            top: 5%;
            left: 2.4%;
            height: 84%;
            width: 92.5%;
            .all {
              .echarts {
                width: 100%;
                height: 84%;
                // background-color: #fff;
              }
            }
            .lefter {
              width: 49.6%;
              height: 100%;
              float: left;
              border-right: 0.0104rem solid;
              border-image-source: linear-gradient(
                to bottom,
                transparent,
                #ffeedf,
                transparent
              );
              border-image-slice: 1;
              .title {
                position: relative;
                height: 16%;
                width: 100%;
                background: url("./assets/title2.png") no-repeat;
                font-family: pmzd;
                background-size: 60% 100%;
                // background-color: #fff;
                .txt {
                  position: absolute;
                  top: 6%;
                  left: 3%;
                  font-size: 0.125rem;
                  color: #ffeedf;
                }
              }
              .echartsToText{
                font-size: 0.09rem;
                  color: #ffeedf;
                  // text-indent: 0.19rem;
                  line-height: 1.6;
                  text-align: left;
              }
            }
            .righter {
              width: 50%;
              height: 100%;
              float: left;
              .title {
                position: relative;
                height: 16%;
                width: 100%;
                background: url("./assets/title1.png") no-repeat;
                font-family: pmzd;
                background-size: 95% 30%;
                background-position: 55% 90%;
                .txt {
                  position: absolute;
                  top: 6%;
                  left: 4%;
                  font-size: 0.125rem;
                  color: #ffeedf;
                }
                .littleClick{
                  position: absolute;
                  right: -40%;
                  font-size: 0.095rem;
                  color: #ffeedf;
                  cursor: pointer;
                }
              }
            }
          }
        }
        .right {
          width: 60%;
          height: 100%;
          float: left;
          .lefter {
            width: 50%;
            height: 100%;
            // float: left;
            // background-color: rgb(91, 88, 88);
          }
          .righter {
            width: 50%;
            height: 100%;
            float: left;
            // background-color: rgb(85, 80, 80);
            .main {
              height: 84%;
              .new {
                height: 14%;
                width: 90%;
                margin: 0 5% 0 5%;
                display: flex;
                cursor: pointer;
                justify-content: space-between;
                .infos {
                  width: 72%;
                  height: 100%;
                  text-align: left;
                  font-size: 0.0962rem;
                  color: #11dff2;
                  line-height: 1.7;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
                .time {
                  width: 28%;
                  height: 100%;
                  text-align: right;
                  font-size: 0.0962rem;
                  color: #11dff2;
                  line-height: 1.7;
                  white-space: nowrap;
                  overflow: hidden;
                  text-overflow: ellipsis;
                }
              }
            }
          }
        }
      }
    }
    }
    .bgmap {
      position: relative;
      .btn {
        width: 10%;
        height: 10%;
        position: absolute;
        left: 2%;
        top: 2%;
        font-size: 0.22rem;
        cursor: pointer;
        color: #007ACC;
      }
      .map {
        width: 80%;
        height: 90%;
        position: absolute;
        right: 10%;
        top: 5%;
      }
      .step {
        width: 4%;
        height: 30%;
        position: absolute;
        right: 5%;
        font-size: 0.06rem;
        top: 35%;
      }
    }
  }
  .fristShowAfter{
    transform: translate(0, -100%);
    transition: all 0.7s ease;
  }
  .fristShowBefore{
    transform: translate(0, 0%);
    transition: all 0.7s ease;
  }
}
</style>
