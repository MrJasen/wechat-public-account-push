/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx2a14c9dd1a55c562',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '0b4157682e10bf7f4608b4adc65cb571',

  PROVINCE: '北京',
  CITY: '北京',

  USERS: [
    {
      // 想要发送的人的名字
      name: '晓钰宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oP7Yp6gqYa7SBVFKQ-8selWNhdqY',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'tlicL1mvQegFVAltyFE8XCWe1T-iaRqP6Lnf0dxs6Lk',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '08-05',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '晓钰宝贝', year: '1994', date: '08-05',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '玉溪哥哥', year: '1994', date: '05-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2023', date: '09-26',
        },
      ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2023-10-21' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2023-09-22'},
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'FTkL9SQS2f6qOggmIKOMXTXNzVFErzmeIbUwEg3Aylw',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oP7Yp6sxh6mHad3tsj3lyV-OG7cs',
    }
  ],

}

module.exports = USER_CONFIG
