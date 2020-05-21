import { Injectable } from '@angular/core';
import { DiscoverGoods } from '../data/discover-goods';
import { HttpClient } from '@angular/common/http';
import { Product, User, Goods } from '../data/product';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
constructor(private http: HttpClient) {

}
getHomeData() {
  return this.http.get('http://localhost:8001/home/getHomeData');
}
getBeautyList(): Product[] {
  return [
    {id: '1', productImg: 'https://gw.alicdn.com/bao/uploaded/i1/2917719603/O1CN01OZpyX82KoDzJxOkA6_!!2917719603.jpg', name: '妮维雅男士沐浴露动能冰爽沐浴露250ml清凉舒爽德国进口沐浴乳露', price: 23.9, describe: '', publisherId: ''},
    {id: '2', productImg: 'https://gw.alicdn.com/bao/uploaded/i1/1044848665/O1CN01r215Wz2DscQTlFZPa_!!0-item_pic.jpg', name: '人本2020夏季经典帆布鞋男学生休闲鞋小白鞋男鞋低帮布鞋板鞋黑色', price: 79, describe: '', publisherId: ''},
    {id: '3', productImg: 'https://gw.alicdn.com/bao/uploaded/i1/2070040617/O1CN01NyPDil1GQcsJPnGg6_!!0-item_pic.jpg', name: '吉普盾2020夏季短袖T恤男薄款宽松半袖上衣翻领POLO衫条纹体恤潮', price: 49, describe: '', publisherId: ''},
    {id: '4', productImg: 'https://gw.alicdn.com/bao/uploaded/i1/697112770/O1CN01lv1lWs1WKhh89sj8N_!!697112770-0-pixelsss.jpg', name: '李宁跑步男鞋夏季舒适耐磨轻质跑鞋跑步系列一体织网面休闲运动鞋', price: 89, describe: '', publisherId: ''},
    {id: '5', productImg: 'https://gw.alicdn.com/bao/uploaded/i2/1726473068/O1CN01DWqS1G1YXBiG79Ya2_!!0-item_pic.jpg', name: '夏装2020新款运动休闲套装女短袖初中女生学生韩版短裤两件套夏季', price: 69, describe: '', publisherId: ''},
    {id: '6', productImg: 'https://gw.alicdn.com/bao/uploaded/i2/1675293993/O1CN01QSVfMD1fMq5ROHqex_!!1675293993.jpg', name: 'Daphne/达芙妮鞋柜春秋休闲学院系带板鞋运动单鞋1117404301', price: 39, describe: '', publisherId: ''},
    {id: '7', productImg: 'https://gw.alicdn.com/bao/uploaded/i3/749711636/O1CN01LDM28L1NxKX9ZBgOS_!!0-item_pic.jpg', name: '艾奔双肩包男士背包双肩电脑包中学生书包休闲商务男包旅行校园潮', price: 99, describe: '', publisherId: ''},
    {id: '8', productImg: 'https://gw.alicdn.com/bao/uploaded/i3/1076797773/O1CN0127I55ia9dbiJpay_!!0-item_pic.jpg', name: '发箍发捆女韩国可爱超萌甜美格子宽边压发卡头箍女头饰发带', price: 29.9, describe: '', publisherId: ''},
  ];
}
getBrandList() {
  return [
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1D0sLnHSYBuNjSspiXXXNzpXa?abtest=&pos=1&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥150',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'Schneider Electric/施耐德',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'ENFINITAS/蓝臻',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1a3bVRXXXXXbfXFXXXXXXXXXX?abtest=&pos=4&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'GATEMAN',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&pos=5&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥200',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1PrRDyQL0gK0jSZFtXXXQCXXa?abtest=&pos=7&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'LEAGUE OF LEGENDS/英雄联盟',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1Im97lVT7gK0jSZFpXXaTkpXa?abtest=&pos=8&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥65',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1D0sLnHSYBuNjSspiXXXNzpXa?abtest=&pos=1&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥150',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'Schneider Electric/施耐德',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'ENFINITAS/蓝臻',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1a3bVRXXXXXbfXFXXXXXXXXXX?abtest=&pos=4&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'GATEMAN',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&pos=5&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥200',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1PrRDyQL0gK0jSZFtXXXQCXXa?abtest=&pos=7&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'LEAGUE OF LEGENDS/英雄联盟',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1Im97lVT7gK0jSZFpXXaTkpXa?abtest=&pos=8&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥65',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1D0sLnHSYBuNjSspiXXXNzpXa?abtest=&pos=1&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥150',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'Schneider Electric/施耐德',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'ENFINITAS/蓝臻',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1a3bVRXXXXXbfXFXXXXXXXXXX?abtest=&pos=4&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'GATEMAN',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&pos=5&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥200',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1PrRDyQL0gK0jSZFtXXXQCXXa?abtest=&pos=7&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'LEAGUE OF LEGENDS/英雄联盟',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1Im97lVT7gK0jSZFpXXaTkpXa?abtest=&pos=8&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥65',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1D0sLnHSYBuNjSspiXXXNzpXa?abtest=&pos=1&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥150',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1ilbUHpXXXXb8XXXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'Schneider Electric/施耐德',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1TJNTPXXXXXcqXVXXSutbFXXX.jpg_125x125q100.jpg_.webp',
      coupon: 'ENFINITAS/蓝臻',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1a3bVRXXXXXbfXFXXXXXXXXXX?abtest=&pos=4&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'GATEMAN',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1gD8NhDlYBeNjSszcXXbwhFXa?abtest=&pos=5&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥200',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1PrRDyQL0gK0jSZFtXXXQCXXa?abtest=&pos=7&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: 'LEAGUE OF LEGENDS/英雄联盟',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1Im97lVT7gK0jSZFpXXaTkpXa?abtest=&pos=8&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥65',
    },
    {
      brandimg: 'https://img.alicdn.com/i2/2/TB1D0sLnHSYBuNjSspiXXXNzpXa?abtest=&pos=1&abbucket=&acm=09042.1003.1.1200415&scm=1007.13029.131809.100200300000000_125x125q100.jpg_.webp',
      coupon: '优惠券 ￥150',
    }
  ];
}
getNavLinks() {
  return [{
    title: '热点推荐',
    subtitle: 'Hot',
    css: 'site-hot',
    links: [
      {href: '/myjmall', linkname: '天猫超市'},
      {href: '/myjmall', linkname: '喵鲜生'},
      {href: '/myjmall', linkname: '科技新品', new: true},
      {href: '/myjmall', linkname: '女装新品', hot: true},
      {href: '/myjmall', linkname: '酷玩街'},
      {href: '/myjmall', linkname: '内衣新品', hot: true},
      {href: '/myjmall', linkname: '试美妆'},
      {href: '/myjmall', linkname: '运动新品'},
      {href: '/myjmall', linkname: '时尚先生', hot: true},
      {href: '/myjmall', linkname: '精明妈咪'},
      {href: '/myjmall', linkname: '吃乐会', new: true},
      {href: '/myjmall', linkname: '企业采购'},
      {href: '/myjmall', linkname: '会员积分'},
      {href: '/myjmall', linkname: '天猫国际'},
      {href: '/myjmall', linkname: '品质频道'}
    ]
  }, {
    title: '行业市场',
    subtitle: 'Market',
    css: 'site-market',
    links: [
      {href: '/myjmall', linkname: '美妆'},
      {href: '/myjmall', linkname: '电器'},
      {href: '/myjmall', linkname: '女装', hot: true},
      {href: '/myjmall', linkname: '男装', hot: true},
      {href: '/myjmall', linkname: '女鞋'},
      {href: '/myjmall', linkname: '男鞋'},
      {href: '/myjmall', linkname: '内衣', hot: true},
      {href: '/myjmall', linkname: '箱包'},
      {href: '/myjmall', linkname: '运动'},
      {href: '/myjmall', linkname: '母婴'},
      {href: '/myjmall', linkname: '家装'},
      {href: '/myjmall', linkname: '医药'},
      {href: '/myjmall', linkname: '食品'},
      {href: '/myjmall', linkname: '配饰', new: true},
      {href: '/myjmall', linkname: '汽车'},
    ]
  }, {
    title: '服务指南',
    subtitle: 'Help',
    css: 'site-help',
    links: [
      {href: '/myjmall', linkname: '帮助中心'},
      {href: '/myjmall', linkname: '品质保证'},
      {href: '/myjmall', linkname: '特色服务'},
      {href: '/myjmall', linkname: '7天退货'},
    ]
  }];
}
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
