---
home: true
# heroImage: '/assets/img/bg3.jpg'
faceImage: '/assets/img/logo.png'
bgImage: "/assets/img/bg3.jpg"
# tagline: Hero 副标题 
bgImageStyle: {
  height : 320px,
  background-size: 100% 80%;
}
heroImageStyle: {
  width: '100%',
  height: '15%',,
  display: block,
  margin: '16% auto -18% auto',
  //border: '1px dashed #000',
  box-shadow: '8px 8px 20px #022',
  # borderRadius: '1rem',
  background: 'rgba(0, 0, 0, 0.8) none repeat scroll !important',
}
isShowTitleInHome: true
actionText: '开启进阶之路'
actionLink: /tag/

footer: MIT Licensed | Copyright © 2018-present Evan You

---

<!-- <Clock/> -->
<!-- 
::: tip 昨天 今天 明天

问一问，人的一生能有几天 
算一算，人的一生不过三天 

跑过去的是昨天 
奔过来的是明天 
正在走的是今天 

不要忘记昨天 
认真计划明天 
好好把握今天 

但愿到了明天 
今天已成昨天 
而你依然在我身边 

春梦无痕，秋夜缠绵 
如歌岁月，似水流年 

但愿到了明天 
今天已成昨天 
而我依然在你心间

::: -->

<script> 
</script> 
<style> 
/* .home{
position: relative;
} */
.home .content__default:not(.custom) {
  max-width: 100% !important;
  margin: 0  !important;
  padding: 0 !important;
}
.home .hero h1 {
    display: none;
}
.home img {
   transform: scale(0.8,0.8) !important;
   transition: all 1s!important;
}
.home img:hover {
   transform: scale(1)!important;
   transition:all 2s !important;
}
/* 阻止描述冒泡 */
.home .hero .description{
    pointer-events: none;
    cursor: default;
    opacity: 0.6;
}
.home .feature p {
    color: #476582 !important;
}
.home .hero .description {
    color: #476582 !important;
}
.wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    /* height: 200px; */
    min-height: 10vh;
    background: transparent none repeat scroll!important;
    position: fixed;
    top: -40%;
    left: -40%;
}
/* 
/* @media screen and (min-width: 960px){
  .clock {
    margin-top: 0% 
  }
} */ */

@media screen and (min-width: 720px) and  (max-width: 959px){
  .clock {
    margin-top: -50%
  }
}

@media screen and (min-width: 600px) and  (max-width: 719px){
  .clock {
    margin-top: 10% 
  }
}


@media screen and (min-width: 481px) and  (max-width:600px) {
  .clock {
    margin-top: -70%
  }
}



/* @media screen and (min-width: 481px) and (max-width: 959px) {} */

/* @media screen and (min-width: 960px) and (max-width: 1199px)  1100分辨率（大于960px，小于1199px） */

/* @media screen and (max-width: $MQMobile){
  .clock {
    margin-top: -35%
  }
} */

@media screen and (min-width: 440px) and (max-width: 480px)  {
  .wrap {
    transform: scale(0.6);
  }
   .clock {
    margin-top: -110%
  }
}

@media screen and (min-width: 400px) and (max-width: 440px)  {
   .wrap {
    transform: scale(0.6);
  }
  .clock {
  margin-top: -66%
  }
}

@media screen and (min-width: 360px) and (max-width: 400px)  {
  .wrap {
    transform: scale(0.5);
  }
  .clock {
  margin-top: -40%
  }
}

@media screen and (max-width: 360px){
  .wrap {
    /* top:-130%; */
    transform: scale(0.5);
  }
  .home img {    
    margin: 24% auto -6% auto !important;
  }
  .home .feature {
    width: 100%;
    text-align: center;
    color: rgb(71, 101, 130) !important;
    padding: 5px !important;
    margin: -12px;
    margin-left: 0px;
  }
  .clock {
    margin-top: -40%;
    background: rgba(0, 0, 255, 0) none repeat scroll !important;
    background-image: url() !important;
  }
}

.clock {
  transition: all 2s;
}
.wrap {
  transition: all 2s;
}
.clock:hover {
  transform: scale(0.55) !important;
  transition: all 2s;
}
.wrap:hover {
  transform: scale(1.15) !important;
  transition: all 2s;
}

.footer-wrapper>span:nth-child(1){
  background: red;
  width : 0;
  display: none;
}


</style>

  <comments />