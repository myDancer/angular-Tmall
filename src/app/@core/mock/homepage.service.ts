import { Injectable } from '@angular/core';
import { DiscoverGoods } from '../data/discover-goods';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
constructor() { }
getDiscoverGoods(): DiscoverGoods {
  return {
    good: {
      type: 0,
      title: '有好货',
      titleImg: 'https://img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png',
      subtitle: '与品质生活不期而遇',
      goods: [
        {
          img: 'https://img.alicdn.com/imgextra/i1/2869961377/O1CN011M2hr0zicuS08Hz_!!2869961377-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
          name: '圣罗兰 口红礼盒',
          describe: '多款色号多种选择，轻松打造出美丽的唇妆。',
          extra: 8
        },
        {
          img: 'https://img.alicdn.com/tfscom/i1/1581756766/TB2TF0ch0zJ8KJjSspkXXbF7VXa_!!1581756766.jpg_180x180xzq90.jpg_.webp',
          name: '大豆家  方头奶奶鞋',
          describe: '一脚蹬设计，方便日常的穿脱。',
          extra: 348
        },
        {
          img: 'https://img.alicdn.com/imgextra/i3/783537643/TB2SfeAkwKTBuNkSne1XXaJoXXa_!!783537643-2-beehive-scenes.png_180x180xzq90.jpg_.webp',
          name: '神户矿泉水 维多利亚帽翼黑色金属天使翼',
          describe: '日本fillico神户矿泉水',
          extra: 21
        },
        {
          img: 'https://img.alicdn.com/imgextra/i1/32234056/TB2Ta9MfBmWBuNkSndVXXcsApXa_!!32234056-2-beehive-scenes.png_180x180xzq90.jpg_.webp',
          name: '孩子早教中，这款早教产品不可少',
          describe: '不同纹理的小球，适合宝宝小手抓握，同时，可以刺激宝宝手部丰富的神经，对宝宝的感统系统、触感等发育都有着很好的功能。',
          extra: 47
        },
        {
          img: 'https://img.alicdn.com/tfscom/i3/2459354798/TB2IyE5eUhnpuFjSZFpXXcpuXXa_!!2459354798.jpg_180x180xzq90.jpg_.webp',
          name: '佳宝路转角水槽',
          describe: '304不锈钢，表面光洁坚固耐用。',
          extra: 21
        },
        {
          img: 'https://img.alicdn.com/imgextra/i1/2645215035/TB2y.PZcGQoBKNjSZJnXXaw9VXa_!!2645215035-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
          name: 'Coca-Cola 可乐瓶T恤',
          describe: '简约的纯色基调，宣扬自由轻松的休闲氛围。',
          extra: 35
        },
      ]
    },
    random: {
      type: 1,
      title: '爱逛街',
      titleImg: 'https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png',
      subtitle: '献给聪明可爱的你',
      goods: [
        {
          img: 'https://img.alicdn.com/bao/uploaded/TB28TQ1nrBmpuFjSZFAXXaQ0pXa_!!2996832334.png_180x180xzq90.jpg_.webp',
          name: '2017新款潮女士双肩包韩版时尚休闲百搭pu软皮背包个性简约包包',
          username: '时髦挖掘机',
          avatar: 'https://img.alicdn.com/bao/uploaded/i4/112250193294110066/TB2xIwlmpXXXXX1XpXXXXXXXXXX_!!0-mytaobao.jpg_30x30.jpg'
        },
        {
          img: 'https://img.alicdn.com/bao/uploaded/TB2jH_uoFXXXXXfXpXXXXXXXXXX_!!0-dgshop.jpg_180x180xzq90.jpg_.webp',
          name: '美国艾蒂宝趴趴枕午睡枕趴睡枕学生小午睡神器办公室抱枕午休枕头',
          username: '爱逛***01',
          avatar: 'https://img.alicdn.com/bao/uploaded/i1/TB1KFP1JFXXXXalXXXX7WcCNVXX-400-400.png_30x30.jpg'
        },
        {
          img: 'https://img.alicdn.com/bao/uploaded/TB2i9iuoFXXXXbPXpXXXXXXXXXX_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp',
          name: '香港进口特产美心原味鸡蛋卷32大条礼盒装儿童休闲零食糕点饼干',
          username: '放飞自我的兔小姐',
          avatar: 'https://img.alicdn.com/bao/uploaded/i4/1471405007375707770/TB2cLMFeYlmpuFjSZFlXXbdQXXa_!!0-mytaobao.jpg_30x30.jpg'
        },
        {
          img: 'https://img.alicdn.com/bao/uploaded/i0/TB1s.15NFXXXXbMaXXXXXXXXXXX_!!0-item_pic.jpg_180x180xzq90.jpg_.webp',
          name: '秋冬季棉拖鞋包跟厚底情侣家居防滑保暖居家男女月子拖鞋冬天加厚',
          username: '不喜***扰哈',
          avatar: 'https://img.alicdn.com/bao/uploaded/i2/2538617277/TB2dC3zlpXXXXaGXpXXXXXXXXXX_!!0-mytaobao.jpg_30x30.jpg',
        },
        {
          img: 'https://img.alicdn.com/bao/uploaded/TB2BnymXX95V1Bjy0FdXXc5BVXa_!!664782798-0-goldwindow.jpg_180x180xzq90.jpg_.webp',
          name: '原创品牌日系学生单肩女包百搭休闲文艺小清新简约帆布包布袋大包',
          avatar: 'https://img.alicdn.com/bao/uploaded/i4/112250193294110066/TB2xIwlmpXXXXX1XpXXXXXXXXXX_!!0-mytaobao.jpg_30x30.jpg',
          username: '时髦挖掘机'
        },
        {
          img: 'https://img.alicdn.com/bao/uploaded/TB2jQl2ml0kpuFjy1zdXXXuUVXa_!!0-juitemmedia.jpg_180x180xzq90.jpg_.webp',
          name: '格莱达大容量保温杯男士保温壶户外不锈钢车载旅游保温水壶2L定制',
          avatar: 'https://img.alicdn.com/bao/uploaded/i3/165210263464182707/TB2lSwItVXXXXbLXpXXXXXXXXXX_!!0-mytaobao.jpg_30x30.jpg',
          username: '潮流女孩girl'
        },
      ]
    }
  };
}
}
