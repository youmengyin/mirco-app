import microApp, { getActiveApps } from "@micro-zoe/micro-app";
import { config } from "./appConfig";

/**
 *
 * @param {Object} obj path: 路径, query: 传参
 */
function goMicroApp(obj: any) {
  if (!obj.path.startWith('#')) {
    obj.path = '#' + obj.path
  }
  if (obj.query) {
    const searchParams = new URLSearchParams(obj.query)
    const queryStr = searchParams.toString()
    if (queryStr) obj.path = obj.path + '?' + queryStr
  }
  // 主动触发路由更新
  window.history.pushState(history.state, '', obj.path)
  window.dispatchEvent(new PopStateEvent('popstate', {state: history.state}))
}
function fetchLocal(url: any){
  return new Promise((resolve,reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
      resolve(xhr.response)
    }
    xhr.onerror = function(err) {
      reject(new TypeError('Local request failed:' + JSON.stringify(err)))
    }
    xhr.open('GET',url)
    xhr.send()
  })
}

document.addEventListener('backbutton', () => {
  // 微前端下只有当vueApp展示的时候才触发物理返回键
  if (window.__MICRO_APP_ENVIRONMENT__) {
    if (window.microApp.getGlobalData().getActiveApps(true).includes('vueApp')) {
      // 如果没有打开弹窗，则路由回退
      if (!this.popDialogHandler()) {
        rotuer.back()
      }
    }
  } else {
    // 如果没有打开弹窗，则路由回退
    if (!this.popDialogHandler()) {
      rotuer.back()
    }
  }
})

microApp.setGlobalData({
  goMicroApp,
  AppConfig: config,
  getActiveApps
})
microApp.start({
  /**
   * 自定义fetch
   * @param {string} url 静态资源地址
   * @param {object} options fetch请求配置项
   * @param {string|null} appName 应用名称
   * @returns Promise<string>
  */
  fetch (url, options, appName){
    if (url === 'http://localhost:3001/error.js') {
      // 删除 http://localhost:3001/error.js 的内容
      return Promise.resolve('')
    }
    if (url.startsWith('file:///')) {
      return fetchLocal(url)
    }
    
    const config = {
      // fetch 默认不带cookie，如果需要添加cookie需要配置credentials
      credentials: 'include', // 请求时带上cookie
    }

    return window.fetch(url, Object.assign(options, config)).then((res) => {
      return res.text()
    })
  },
  preFetchApps: Object.values(config)// 预加载应用
});