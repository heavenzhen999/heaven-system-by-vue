/*
 * @Author: zhen chen
 * @Date: 2017-12-26 09:50:22
 * @Last Modified by: zhen chen
 * @Last Modified time: 2017-12-26 10:24:58
 * @description 使用css3制作的好看背景
 */

<template>
  <div class="module-background-css3">
    <div class="container-1">
      <div class="chopsticks"></div>
    </div>
    <div class="container-2">
      <div class="egg"></div>
    </div>
    <div class="container-3">
      <div class="scoop"></div>
    </div>
    <div class="container-4">
      <div class="love"></div>
    </div>
    <div class="container-5">
      <div class="qipao">气泡</div>
    </div>
    <div class="container-6">
      <div class="angle">缺四角</div>
    </div>
    <div class="container-7">
      <div class="arc">缺圆角</div>
    </div>
    <div class="container-8">
      <div class="tixing">梯形</div>
    </div>
    <div class="container-9">
      <div class="pie">圆盘</div>
    </div>
    <div class="container-10">
      <div class="sibianxing">平行四边形</div>
    </div>
    <div class="container-11">
      <div class="zhejiao">折角</div>
    </div>
    <div class="container-12">
      <div class="warp">
        <div class="one"></div>
        <div class="two"></div>
        <div class="three"></div>
      </div>
    </div>
    <div class="container-13">
      <div class="cloud">乌云</div>
    </div>
    <div class="container-14">
      <div class="chrome"></div>
    </div>
    <div class="container-15">
      <div class="text-magic" data-word="CSSTextMagic">CSSTextMagic<div class="white"></div></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.module-background-css3>div{
  position: relative;
  margin: 30px auto;
  height: 300px;
  width: 300px;
}

.chopsticks{
    position: absolute;
    width: 10px;
    height: 250px;
    background-color: #bb8855;
    left: 50%;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.1), 0 -5px 1px 0 rgba(0,0,0,0.1) inset;
}
.chopsticks::before{
    content: '';
    position: absolute;
    width: 10px;
    height: 250px;
    background-color: #bb8855;
    left: 15px;
    border-radius: 3px;
    box-shadow: 0 0 2px 1px rgba(0,0,0,0.1), 0 -5px 1px 0 rgba(0,0,0,0.1) inset;
}

.egg{
    position: absolute;
    top: 20px;
    left: 35px;
    width: 80px;
    height: 100px;
    z-index: 7;        
    background-color: #fff;
    transform:rotate(20deg);
    border-radius: 50%/60% 60% 40% 40%;
}
.egg::before{
    content: '';
    position: absolute;
    top: 30%;
    left: 21%;
    width: 57%;
    height: 51%;
    background: #FC0;
    border-radius: 50%/56% 60% 41% 44%;
    box-shadow: 0 0 1px 1px #f90,0 0 1px 1px rgba(255, 153, 0, 0.5) inset;
}

.scoop{
    position: absolute;
    height: 200px;
    width: 20px;
    background-color: #bb8855;
    left: 50%;
    border-radius: 8px;
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.1),0 -5px 1px 1px rgba(0,0,0,0.1) inset;
    top: 10%
}
.scoop::before{
    content: '';
    position: absolute;
    height: 70px;
    width: 59px;
    background-color: #bb8855;
    left: -94%;
    top: -2%;
    border-radius: 50%/60% 60% 40% 40%;
    box-shadow: 0 0 1px 1px rgba(0,0,0,0.1), 0 -3px 3px 2px rgba(0,0,0,0.1) inset;
}
.scoop::after{
    content: '';
    position: absolute;
    height: 14px;
    width: 6px;
    background-color: rgba(0,0,0,0.1);
    left: 49%;
    top: 17%;
    border-radius: 50%/68% 53% 40% 40%;
    box-shadow: 0 0 10px 8px rgba(0,0,0,0.1);
}

.love{
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #c03;
    left: 40%;
    top: 30%;
    transform: translate(-50%,-50%) rotate(45deg);
    transform: rotate(45deg);
    text-align: center;
    line-height: 100px;
}
.love::before,.love::after{
    content: '';
    position: absolute;
    width: 100px;
    height: 100px;
    background-color: #c03;
    border-radius: 50%;
    left: -50%;
    z-index: -1;
}
.love::after{
    top: -50%;
    left: 0;
}

.qipao{
    position: absolute;
    width: 200px;
    height: 100px;
    background-color: green;
    border-radius: 7px;
    top: 20%;
    left: 40%;
    text-align: center;
    line-height: 100px;
}
.qipao::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    border: 34px solid transparent;
    border-top-color: green;
    border-bottom: 0;
    border-left: 0;
    margin: 0 0 -34px -17px;
}

.angle{
    position: absolute;
    width: 200px;
    height: 150px;
    left: 40%;
    top: 20%;
    background-color: pink;
    text-align: center;
    line-height: 150px;
}

.angle{
    background: 
    linear-gradient(45deg,transparent 15px, pink 0) left bottom,
    linear-gradient(-45deg,transparent 15px,pink 0) right bottom,
    linear-gradient(135deg,transparent 15px,pink 0) left top,
    linear-gradient(-135deg,transparent 15px,pink 0) right top;
    background-size: 50% 50%;
    background-repeat: no-repeat;
}

.arc{
    position: absolute;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    width: 200px;
    height: 150px;
    background-color: pink;
    text-align: center;
    line-height: 150px;
}
.arc{
  background: 
  radial-gradient(circle at left bottom,transparent 15px,pink 0) left bottom,
  radial-gradient(circle at right bottom,transparent 15px,pink 0) right bottom,
  radial-gradient(circle at left top,transparent 15px,pink 0) left top,
  radial-gradient(circle at right top,transparent 15px,pink 0) right top;
  background-size: 50% 50%;
  background-repeat: no-repeat;
}

.tixing{
  position: absolute;
  top:50%;
  left: 50%;
  transform:translate(-50%,-50%);
  width: 160px;
  padding: 60px;
  text-align: center;
  color: white;
}
.tixing::before{
  content:"";
  position: absolute;
  top: 0; right: 0; bottom: 0; left: 0;
  transform:perspective(40px) scaleY(1.3) rotateX(5deg);
  transform-origin: bottom;
  background:deeppink;
  z-index:-1;
}

.pie{
  transform: translate(-50%,-50%);
  top: 50%;
  left: 50%;
  width: 180px;
  height: 180px;
  text-align: center;
  line-height: 180px;
  background-color: pink;
  background-image: linear-gradient(to right, transparent 50%, #655 0);
  border-radius: 50%;
  cursor: pointer;
  overflow: hidden;
}
.pie::before{
    position: absolute;
    content: '';
    background-color: inherit;
    width: 50%;
    height: 100%;
    left: 50%;
    top: 0;
    z-index: -1;
    transform-origin: left;
    transform: rotate(45deg);
}
.pie:hover::before{
    transform: rotate(1000deg);
    transition: transform 5s;
}

.sibianxing{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 200px;
    height: 150px;
    line-height: 150px;
    text-align: center;
}


.sibianxing::before{
    content: '';
    position: absolute;
    z-index: -1;
    background-color: pink;
    left: 0;right: 0;top: 0;bottom: 0;
    transform: skew(.08turn);
    
}

.zhejiao{
    position: absolute;
    width: 200px;
    height: 200px;
    transform: translate(-50%,-50%);
    top: 50%;
    left: 50%;
    text-align: center;
    line-height: 200px;
    background-color: pink;
    border-radius: 10px;
    background:linear-gradient(-150deg,transparent 1.5em, pink 0);
}
.zhejiao::before{
    content: '';
    position: absolute;
    background: linear-gradient(to left bottom,transparent 50%, rgba(0,0,0,.2) 0, rgba(0,0,0,.4)) 100% 0 no-repeat;
    top: 0;
    right: 0;
    width: 30px;
    height: 47px;
    border-bottom-left-radius: 10px;
    transform: translateY(-20px) rotate(-28deg);
    transform-origin: bottom right;
    box-shadow: -.2em .2em .3em -.1em rgba(0,0,0,.15);
}

.warp{width: 170px;height: 150px;position: relative; margin-left: 50%; margin-top: -15%; transform: translate(-50%,-50%);background-color: pink;}
.one, .two, .three{width: 130px;height: 2px;margin: 0 auto; background-color: white; position: absolute;top: 20%;left: 10%;transition:all 1s;}
.two{top: 50%;}
.three{top: 80%;}
.warp:hover .one{top: 80%;opacity: 0;}
.warp:hover .two{top: 20%;transform: rotate(45deg); transform-origin: left; width: 126px}
.warp:hover .three{transform: rotate(-45deg);transform-origin: left; width: 126px;}

.cloud{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    width: 150px;
    height: 200px;
    text-align: center;
    background-color: pink;
    border-radius: 10px;
}
.cloud::before{
    position: absolute;
    content: '';
    background-color: white;
    width: 30px;
    height: 30px;
    top: 40%;
    left: 33%;
    z-index: 2;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    box-shadow: 19px 6px 0px 1px white, 14px -13px 0 1px white, 37px -6px 0px -2px white, 52px 4px 0 -4px white, 37px 7px 0 -3px white, 20px -20px #ddd, 38px -12px 0 -1px #ddd, 54px -3px 0 -4px #DDD;
    animation: cloud-move 3s ease-in-out infinite;
}
.cloud::after{
    content: '';
    background-color: rgba(0,0,0,0.6);
    position: absolute;
    top: 70%;
    left: 50%;
    width: 50px;
    height: 6px;
    border-radius: 50%;
    transform: translate(-50%,-50%);
    animation: shadow 3s ease-in-out infinite;
}
@keyframes cloud-move{
    50%{transform: translate(-50%,-10%)};
    100%{transform: translate(-50%,-50%);};
}
@keyframes shadow{
    50%{transform: translate(-50%,-50%) scale(0.6);background-color: rgba(0,0,0,0.3)}
    100%{transform: translate(-50%,-50%) scale(1);background-color: rgba(0,0,0,0.6)}
}

.chrome{
    position: absolute;
    top: 50%;left: 50%;
    width: 180px;height: 180px;
    transform: translate(-50%, -50%);
    box-shadow:0 0px 4px #999,0 0 2px #ddd inset;
    border-radius:50%;
    background-image:
    radial-gradient(#4FACF5 0%,#2196F3 28%, transparent 28%), 
    radial-gradient(#fff 33%,transparent 33%), 
    linear-gradient(-50deg,yellow 34%, transparent 34%),
    linear-gradient(60deg,green 34%,transparent 34%),
    linear-gradient(176deg,red 34%,transparent 34%),
    linear-gradient(360deg,green 34%,transparent 34%),
    linear-gradient(261deg,yellow 34%,transparent 34%),
    linear-gradient(98deg,red 34%,transparent 34%);
    background-position:0 0;
}

.text-magic{
  position: absolute;
  top: 50%;left: 50%;
  transform: translate(-50%, -50%);
  width:300px;
  font-size:36px;
  font-family:Raleway, Verdana , Arial;
}
.white{
  position:absolute;
  left:0;
  top:15px;
  width:100%;
  height:3px;
  background:#fff;
  z-index:4;
  animation:whiteMove 3s ease-out infinite;
}

.text-magic:before{
  content:attr(data-word);
  position:absolute;
  top:0;
  left:0.5px;
  height:0px;
  color:rgba(0,0,0,.9);
  overflow:hidden;
  z-index:2;
  animation:redShadow 1s ease-in infinite;
  -webkit-filter:contrast(200%);
  text-shadow:0.1px 0 0 red;
}

.text-magic:after{
  content:attr(data-word);
  position:absolute;
  top:0;
  left:-3px;
  height:36px;
  color:rgba(0,0,0,.8);
  overflow:hidden;
  z-index:3;
  background:rgba(255,255,255,.9);
  animation:redHeight 1.5s ease-out infinite;
  -webkit-filter:contrast(200%);
}

@keyframes redShadow{
  20%{
    height:32px;
  }
  60%{
    height:6px;
  }
  100%{
    height:42px;
  }
}

@keyframes redHeight{
  20%{
    height:42px;
  }
  35%{
    height:12px;
  }
  50%{
    height:40px;
  }
  60%{
    height:20px;
  }
  70%{
    height:34px;
  }
  80%{
    height:22px;
  }
  100%{
    height:0px;
  }
}

@keyframes whiteMove{
  8%{
    top:38px;
  }
  10%{
    top:8px;
  }
  12%{
    top:42px;
  }
  99%{
    top:36px;
  }
}

</style>
