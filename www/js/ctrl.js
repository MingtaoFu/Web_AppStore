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
            star: 9,
            img: 'img/meituan.jpg',
            type: '时尚与购物'
        },
        {
            id: 24,
            name: '加菲猫爱消除',
            star: 8,
            img: 'img/jiafeimao.jpg',
            type: '游戏'
        }
    ];
});
