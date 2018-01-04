//加载模块不实用后缀名:js
require(['config'],function(){
    require(['jquery'],function(){
        // 获取元素
        var $tab = $('#container_cityshopwrap');
        var $tabItem = $tab.find('.list .cityname');
        var $tabContent = $tab.find('.city .citycontent');
        var $tabContentImg = $tab.find('.shop img');

        console.log($tab,$tabItem,$tabContent)
        // 隐藏除第一个以外的图片
        $tabContent.slice(1).hide();
        // 默认第一个高亮
        $tabItem.first().addClass('active');


        $tab.on('mouseover','.line .cityname',function(){
            // 获取当前tab
            // 添加高亮，出去其他高亮
            $(this).addClass('active').siblings().removeClass('active');

            // 获取当前索引值
            var idx = $(this).index();console.log(idx)

            // 切换当前图片
            $tabContent.eq(idx).show().siblings().hide();
            var imgsrc = this.id.split('_')[1];
            $tabContentImg[0].src = '../img/foot/'+imgsrc+'.jpg'
        });
        var $totop = $('.totop');
        $totop[0].onclick = function(){
                let timer = setInterval(()=>{
                    // 获取当前滚动果的距离：5000,100
                    let scrollY = window.scrollY;
                    // 计算速度
                    let speed = scrollY/10;//500,10
                    scrollY -= speed;
                    // 清除定时器
                    // 当速度为0
                    // 当scrollY等于0
                    if(speed <= 0 || scrollY === 0){
                        clearInterval(timer);
                    }
                    scrollTo(0,scrollY);
                },30);
            }
    });
});