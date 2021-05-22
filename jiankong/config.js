// 配置
window.Config = {

  // 站点名

  // 站点链接
  SiteUrl: 'https://yekei.com/',

  // UptimeRobot Api 域名
  // 只需填写域名部分，默认为官网域名
  // 因官网 API 时不时的会 CROS 报错，可填自定义反代域名
  // 详见 https://github.com/yb/uptime-status/ 说明
  ApiDomain: 'yekei.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'ur1311154-39c66f13237b6c974c0dd43f',
   //   'm784490063-7b5da437e7f1e0d67613714d',
   //  'm784497419-de55aa09902ccb3ab22d548a',
   //   'm784496436-71a4bf7b1e3bdf7756be131b',
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {

    },
    {

    }
  ]
};
