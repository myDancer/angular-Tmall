import { Injectable } from '@angular/core';
import { DiscoverGoods } from '../data/discover-goods';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
constructor() { }
getDiscoverGoods(): DiscoverGoods[] {
  return [{
    title: '有好货',
    titleImg: 'https://img.alicdn.com/tfs/TB1tqpnegMPMeJjy1XcXXXpppXa-148-48.png',
    subtitle: '与品质生活不期而遇',
    goods: [
      {
        img: 'https://img.alicdn.com/imgextra/i1/2869961377/O1CN011M2hr0zicuS08Hz_!!2869961377-0-beehive-scenes.jpg_180x180xzq90.jpg_.webp',
        name: '圣罗兰 口红礼盒',
        describe: '多款色号多种选择，轻松打造出美丽的唇妆。',
        extra: 8
      }
    ]
  }, {
    title: '爱逛街',
    titleImg: 'https://img.alicdn.com/tfs/TB1UNX2bSFRMKJjy0FhXXX.xpXa-112-46.png',
    subtitle: '献给聪明可爱的你',
    goods: [
      {
        img: 'https://img.alicdn.com/bao/uploaded/TB28TQ1nrBmpuFjSZFAXXaQ0pXa_!!2996832334.png_180x180xzq90.jpg_.webp',
        name: '2017新款潮女士双肩包韩版时尚休闲百搭pu软皮背包个性简约包包',
        username: '时髦挖掘机',
        avatar: 'https://img.alicdn.com/bao/uploaded/i4/112250193294110066/TB2xIwlmpXXXXX1XpXXXXXXXXXX_!!0-mytaobao.jpg_30x30.jpg'
      }
    ]
  }];
}
}
