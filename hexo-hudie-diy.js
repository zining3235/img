var xiaokang = new xkTool(param1,param2);
var xiaokang = new xkTool();
xiaokang.changeBanner(param);
xiaokang.randomBanner(
    "https://github.com/zining3235/img/tree/main/top/", // 前半部分网址
    "-bar.jpg", // 后半部分网址
    001, // 随机数开始范围
    175, // 随机数结束范围
    true // 是否开启滤镜 默认不开启
);
xiaokang.mobileSidebar();
xiaokang.codeFull();
xiaokang.consoleAnchor();
xiaokang.bgPage();