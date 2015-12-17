/**
 *
 * Created by mingtao on 12/17/15.
 */

var app = angular.module('app', []);

app.controller('index', function($scope) {
    //app列表
    $scope.appList = [
        {
            id: 123,
            name: '美团',
            star: 3,
            img: 'img/meituan.jpg',
            type: '时尚与购物'
        },
        {
            id: 24,
            name: '加菲猫爱消除',
            star: 4,
            img: 'img/jiafeimao.jpg',
            type: '游戏'
        },
        {
            id: 27,
            name: '淘宝',
            star: 3,
            img: 'img/taobao.png',
            type: '时尚与购物'
        },
        {
            id: 87,
            name: 'QQ',
            star: 2,
            img: 'img/qq.jpg',
            type: '聊天与社交'
        }
    ];
});
