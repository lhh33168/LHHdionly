;(function($){
	// $.prototype.lxCarousel = function(options){
	$.fn.lxCarousel = function(options){
		var defaults = {
			// 宽高
			width:320,
			height:320,

			autoPlay:true,

			// 默认索引值
			index:0,

			// 页码与左右按钮
			page:true,
			buttons:false,
			// 轮播类型
			type:'vertical',//horizontal,seamless,fade,

			duration:3000
		}
		
		this.each(function(idx,ele){
			var $self = $(ele);
			var opt = $.extend({},defaults,options);
			// 这里的this：实例$('#box')
			console.log(options)


			// 添加特定类
			$self.addClass('lx-carousel');

			// 设置基础样式
			$self.css({
				width:opt.width,
				height:opt.height
			})
			var $width = $self.width()+17;
			var lx = {
				init:function(){
					opt.len = opt.imgs.length;
					this.$ul = $('<ul/>');
					
					this.$ul.html(opt.imgs.map(function(url){
						return `<li style="background:url('${url}')no-repeat;background-size:cover;background-position:center;display:block;width:${$width}px;height:${opt.height}px;"></li>`
					}).join(''));

					// 把ul写入页面
					$self.append(this.$ul);
					if(opt.buttons){
						$('<span/>').addClass('btn-prev').html('&lt;').appendTo($self);
						$('<span/>').addClass('btn-next').html('&gt;').appendTo($self);
					}

					//生成页码
					if(opt.page){
						this.$page = $('<div/>');
                        this.$page.addClass('page');
						for(var i=0;i<opt.len;i++){
							$('<span/>').html(i+1).appendTo(this.$page);
						}
						$self.append(this.$page);
						this.$page.find('span').eq(opt.index).addClass('active');
					}

					// //图片自适应操作
					// $self.find('img').css({
					// 	width:opt.width,
					// 	height:opt.height
					// })
					//轮播类型
					if(opt.type === 'horizontal'){
                        //*水平时,需要给ul添加宽度,
                        
                        this.$ul.width($width*opt.len).height(opt.height);
                        //通过遍历将所有的li浮动
                        this.$ul.find('li').addClass('horizontal');
                    
                    }else if(opt.type === 'fade'){
                        //li添加定位,将所有图片汇聚到一起
                        this.$ul.find('li').addClass('fadeplay');
                        this.$ul.height(opt.height).width($width);
                        //页面初始化时,将除了默认index的其他图片进行隐藏
                    }else if(opt.type === 'seamless'){
                    	$(this.$ul.find('li')[0]).clone().appendTo(this.$ul);
                    	$(this.$ul.find('li').eq(-2)).clone().prependTo(this.$ul);
                    	 //*水平时,需要给ul添加宽度,
                        this.idx = this.$ul.find('li').length;
                        this.$ul.width($width*this.idx).height(opt.height);
                        //通过遍历将所有的li浮动
                        this.$ul.find('li').addClass('horizontal');
                    }
					// 移入移除
					$self.hover(function(){
						clearInterval($self.timer);
					},function(){
						lx.move();
					}).on('click','.btn-prev',function(){
						opt.index--;
						lx.show();
					}).on('click','.btn-next',function(){
						opt.index++;
						lx.show();
					})
					//利用事件委托实现点击按钮切换图片
                    this.$page.on('click','span',function(e){
                        // console.log($(e.target).text());
                        opt.index = $(e.target).text()-1;
                        this.show()
                    }.bind(this));
					

					this.show();
					this.move()


					return this;
				},
				move:function(){
					$self.timer = setInterval(function(){
						opt.index++;

						this.show();
					}.bind(this),opt.duration);
					

					return this;
				},
				show:function(){
					var $ul = $self.find('ul');
					// 处理index
					
					if(opt.type === 'seamless'){
						if(opt.index>this.idx-2){
							opt.index = 1;
							this.$ul[0].style.left = -opt.index*$width + 'px';
						}else if(opt.index<-1){
							opt.index = this.idx-4;console.log(opt.index)
							this.$ul[0].style.left = -(opt.index+2)*$width + 'px';
						}
						// 动画
						this.animate(this.$ul[0],{left:-(opt.index+1)*$width});
						this.$page.children('span').removeClass('active');
						this.$page.children('span').eq(opt.index).addClass('active');
						if(opt.index===(this.idx-2)){
							this.$page.children('span').eq(0).addClass('active');
						}
					}
					else if(opt.type === 'horizontal'){
						if(opt.index>=opt.len){
							opt.index = 0;
						}else if(opt.index<0){
							opt.index = opt.len-1;
						}
						this.animate(this.$ul[0],{left:-opt.index*$width});
						this.$page.children('span').removeClass('active');
						this.$page.children('span').eq(opt.index).addClass('active');
					}
					else if(opt.type === 'vertical'){
						if(opt.index>=opt.len){
							opt.index = 0;
						}else if(opt.index<0){
							opt.index = opt.len-1;
						}
						this.animate(this.$ul[0],{top:-opt.index*opt.height});
						this.$page.children('span').removeClass('active');
						this.$page.children('span').eq(opt.index).addClass('active');
					}
					else if(opt.type === 'fade'){
						if(opt.index>=opt.len){
							opt.index = 0;
						}else if(opt.index<0){
							opt.index = opt.len-1;
						}
						this.$ul.find('li').eq(opt.index).fadeOut(1000).siblings().fadeIn(1000);
						this.$page.children('span').removeClass('active');
						this.$page.children('span').eq(opt.index).addClass('active');
					}
					
	               
					return this;
				},
				animate:function(ele,opt,callback){
					var timerQty = 0;
					for(var attr in opt){
						// 记录动画数量
						timerQty++;

						//createTimer(attr);
						(function(attr){
							// 以属性名创建定时器名字
							var timerName = attr + 'timer';

							// 清除之前的定时器,放置多个定时器作用于同一个元素
							clearInterval(ele[timerName]);

							// 目标值
							var target = opt[attr];

							// 创建定时器
							ele[timerName] = setInterval(function(){
								// 获取当前值
								var current = getComputedStyle(ele)[attr];

								// 提取单位
								var unit = current.match(/\d([a-z]*)$/);
								unit = unit ? unit[1] : '';

								// 提取数字
								current = parseFloat(current);

								// 计算缓冲速度
								var speed = (target - current)/10;

								//判断属性是否为opacity
								if(attr === 'opacity'){
									speed = speed>0 ? 0.05 : -0.05;
								}else{
									speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);
								}

								// 到达目标值/清除定时器
								if(current === target){
									clearInterval(ele[timerName]);
									current = target - speed;

									// 数量减1
									timerQty--;

									// 执行回调函数
									// 最后一个动画执行完成后才执行回调函数
									if(typeof callback === 'function' && timerQty===0){
										callback();
									}
								}

								ele.style[attr] = current + speed + unit;

							},30);
						})(attr)
					}
					return this;
				}



			}

			lx.init();
		})

		

		return this;
	}

	// $.fn.extend({
	// 	lxCarousel(){},

	// })
})(jQuery);
