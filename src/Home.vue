<template>
  <div id="home">
    <headerbar></headerbar>
    <router-view></router-view>
    <footerbar></footerbar>
  </div>
</template>

<script>
import headerbar from './components/headerbar'
import footerbar from './components/footerbar'
import '../static/font/DIN.css'


export default {
  name: 'Home',
  components: {
    headerbar,
    footerbar
  }
}
function setBodyWidth(){
    // var barWidthHelper=document.createElement('div');
    // barWidthHelper.style.cssText="overflow:scroll;";
    // document.body.appendChild(barWidthHelper);
    // var barWidth=barWidthHelper.offsetWidth-barWidthHelper.clientWidth;
    // document.body.removeChild(barWidthHelper);
    // var bodyWidth=window.screen.availWidth-barWidth;
  var bodyWidth = $(window).width();
  // 当浏览器尺寸变化时更新
  $(window).resize(function() {
    bodyWidth = $(window).width();
  });
    return bodyWidth;
}

$(document).ready(
    function(){
        var bodyWidth=setBodyWidth()+"px";
        //document.body.style.width=bodyWidth;
        $("body").css("width",bodyWidth);
    }
);
</script>

<style>
</style>
