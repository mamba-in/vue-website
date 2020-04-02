<template>
  <div class="message">
    <div class="message_top">消息</div>
    <div class="message_bottom">
      <div class="content">
        <div class="content_top">
          <div class="content_top_div1">全部</div>
          <div class="content_top_div2">
            <div class="xuan"><input type="checkbox" id="all" @click="allxuan"><label for="all">全选</label></div>
          </div>
          <div class="content_top_div3">全部标记已读</div>
          <div class="content_top_div4" @click="alldelete">删除</div>
        </div>
        <div class="content_bottom">
          <!--整条数据-->
          <div class="every_one" v-for="(item,index) in mydata">
            <div class="every_one_top">
              <div class="danxuan" >
                <div class="xuan_one" ><input type="checkbox" v-model="checked" id="ck" class="danxuan1234" ><label class="cursor" for="ck"></label></div>
              </div>
              <div class="msg_title" v-html="item.msg"></div>
              <div class="del" @click="deleteme(index)">删除</div>
            </div>
            <div class="every_one_middle" v-html="item.msgcenter">
            </div>
            <div class="every_one_bottom" v-html="item.riqi">2018-07-21 12:32:21</div>
          </div>
        </div>
      </div>
      <div class="fengye">
        <div class="fengye_center">
          <el-pagination
            small
            layout="prev, pager, next"
            :total="50">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "message",
    data() {
      return {
        checked: false,
        mydata:[
          {
            msg:"消息标题1",
            msgcenter:"2017已经结束，2018已经来临，面对新的一年，对自己有了新的认识，给自己一个目标，让自己朝着这个目标去奋斗，越努力越幸运。花有重开日，人无再少年。2017已经结束，2018已经来临，面对新的一年，对自己有了新的认识，给自己一个目标，让自己朝着这个目标去奋斗，越努力越幸运。花有重开日，人无再少年。",
            riqi:"2018-07-21 12:32:21"
          },
          {
            msg:"消息标题2",
            msgcenter:"消息内容哈哈哈哈哈哈哈哈",
            riqi:"2018-07-21 12:32:21"
          },
          {
            msg:"消息标题3",
            msgcenter:"消息内容哈哈哈哈哈哈哈哈",
            riqi:"2018-07-21 12:32:21"
          }],
      }
    },
    methods: {
// 删除每一个
      deleteme: function (index) {
        console.log(index);
        var every_one=document.getElementsByClassName("every_one");
        every_one[index].style.display="none";
        console.log(every_one)
      },
// 全选
      allxuan:function () {
// body...
        var inprtC = document.getElementsByClassName('danxuan1234');
        var All = document.getElementById('all');
        if (All.checked == true) {
          for (var i = 0; i < inprtC.length; i++) {
            console.log(inprtC[i].checked);
            inprtC[i].checked = true;
          }
        } else {
          for (var i = 0; i < inprtC.length; i++) {
            console.log(inprtC[i].checked);
            inprtC[i].checked = false;
          }
        }
      },
      alldelete:function () {
        var inprtC = document.getElementsByClassName('danxuan1234');
        for (var i = 0; i < inprtC.length; i++) {
          console.log(inprtC[i].checked);
          if (inprtC[i].checked == true) {
            var every_one=document.getElementsByClassName("every_one");
            for (var e = 0; e < every_one.length; e++) {
              every_one[e].style.display = "none";
            }
            var All = document.getElementById('all');
            All.checked = false;
          } else {
            console.log("您未选中");
          }
        }
      }
    }
  }
</script>

<style scoped>
  .message {
    width: 888px;
    height: 623px;
    background: #fff;
    margin: auto;
    margin-top: 20px;
  }

  .message_top {
    width: 888px;
    height: 65px;
    border-bottom: 1px solid #E6E6E6;
    padding-left: 20px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
    line-height: 65px;
  }

  .message_bottom {
    width: 810px;
    height: 558px;
    /*border: 1px solid red;*/
    margin: auto;
  }

  .content {
    width: 810px;
    height: 500px;
    /*border: 1px solid red;*/
  }

  .content_top {
    width: 810px;
    height: 65px;
    /*border: 1px solid red;*/
  }

  .content_top_div1 {
    width: 595px;
    height: 65px;
    /*border: 1px solid red;*/
    float: left;
    font-size: 14px;
    color: #E6A845;
    line-height: 65px;
  }

  .content_top_div2 {
    width: 55px;
    height: 65px;
    /*border: 1px solid red;*/
    float: left;
    cursor: pointer;
  }

  .xuan {
    width: 18px;
    height: 18px;
    /*border: 1px solid green;*/
    float: left;
    margin-top: 24px;
  }

  .xuan_one {
    width: 18px;
    height: 18px;
    /*border: 1px solid green;*/
    margin-top: 8px;
    cursor: pointer;
  }

  .xuan_one input[type=checkbox], .xuan input[type=checkbox] {
    display: block;
    width: 18px;
    height: 18px;
    visibility: hidden;
  }

  .xuan_one label, .xuan label {
    position: absolute;
    width: 16px;
    height: 16px;
    border: 2px solid #FF6905;
    margin-top: -17.5px;
    margin-left: -0.5px;
  }

  .xuan_one label:after, .xuan label:after {
    content: '';
    position: absolute;
    width: 3.5px;
    height: 8px;
    border-right: 2px solid #FF6905;
    border-bottom: 2px solid #FF6905;
    transform: rotate(45deg);
    left: 3.5px;
    display: none;
  }

  .xuan_one input[type=checkbox]:checked + label:after, .xuan input[type=checkbox]:checked + label:after {
    display: block;
  }

  .content_top_div3 {
    width: 110px;
    height: 65px;
    /*border: 1px solid red;*/
    float: left;
    text-align: center;
  }

  .content_top_div2, .content_top_div3, .content_top_div4 {
    font-size: 12px;
    color: #333;
    line-height: 65px;
  }

  .content_top_div4 {
    width: 50px;
    height: 65px;
    /*border: 1px solid red;*/
    float: left;
    text-align: right;
    cursor: pointer;
  }

  .content_bottom {
    width: 810px;
    height: 435px;
    /*border: 1px solid red;*/
  }

  .every_one {
    width: 810px;
    min-height: 110px;
    border-bottom: 1px solid #E6E6E6;
  }


  .every_one_top, .every_one_bottom {
    width: 810px;
    height: 35px;
    /*border: 1px solid red;*/
    clear: both;
  }

  .every_one_bottom {
    font-size: 14px;
    color: #333;
    line-height: 35px;
    text-align: right;
    font-weight: bold;
  }

  .every_one_middle {
    width: 780px;
    min-height: 40px;
    /*border: 1px solid red;*/
    float: right;
    font-size: 12px;
    color: #999;
  }

  .danxuan {
    width: 30px;
    height: 35px;
    /*border: 1px solid red;*/
    float: left;
  }



  .msg_title {
    width: 700px;
    height: 35px;
    /*border: 1px solid red;*/
    float: left;
    color: #666;
    font-size: 14px;
    line-height: 35px;
  }

  .del {
    width: 78px;
    height: 35px;
    /*border: 1px solid red;*/
    float: left;
    color: #E6A845;
    font-size: 12px;
    text-align: center;
    line-height: 35px;
    cursor: pointer;
  }


  .fengye {
    width: 810px;
    height: 58px;
    /*border: 1px solid green;*/
  }
  .fengye_center {
    width: 190px;
    height: 60px;
    /*border: 1px solid red;*/
    margin: auto;
  }
</style>
