import Vue from 'vue'       //import是ES6的语法
import VueResource from 'vue-resource'
Vue.use(VueResource)
// 测试地址
// 协议请求地址头部
let base_web = '';
// 上传文件地址
export const uploadUrl = '';

// 请求报错次数
export const requestProtocol = function (url, request, success, fail) {
  let errorMsg = '身份验证失败';
  Vue.http.headers.post['token'] = PAGE.token;
  url = base_web + url;
  var requestData = {
    data: request,
    id: ran
  }
  // 数据请求
  Vue.http.post(url, JSON.stringify(requestData)).then(function (res) {
    if (res.data) {
      if (res.data.result == "success") {
        typeof success == "function" && success(res.data);
      } else if (res.data.result == "fail") {
        typeof fail == "function" && fail(res.data)
      } else {
        typeof success == "function" && success(res.data);
      }
    } else if (res) {
      typeof fail == "function" && fail(res);
    }
  }, function (response) {
    typeof fail == "function" && fail(response.statusText);
  });
};
