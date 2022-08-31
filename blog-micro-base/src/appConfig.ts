export const config = {
  vueApp: {
    name: 'vueApp',
    url:'http://localhost:53343',
    baseroute: '/vue',
    inline: true,
    'keep-alive': true
  },
  reactApp: {
    name: 'reactApp', // 应用名称
    url: 'http://localhost:53342', // 引用服务地址 实际开启子引用的端口号
    baseroute: '/react', // 子应用的基础路由
    inline: true, // 开启inline后，被提取的js会作为script标签插入应用中运行，在开发环境中更方便调试。
    'keep-alive': true, // 缓存应用
  },
}