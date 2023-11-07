var user_latest = {
	init: function() {
		this.eventBind()
	},
	eventBind: function() {
		var BookData = [
			["文艺小说", "我将宇宙随身携带", "[葡]费尔南多·佩索阿", "img/book/literature1.jpg", "27.8"],
			["励志小说", "人性的弱点", "戴尔.卡耐基", "img/book/motivation1.jpg", "22.10"],
			["文艺小说", "盐镇", "易小荷", "img/book/literature2.jpg", "34.5"],
			["科幻小说", "世界杂货店", "[美]罗伯特˙谢克里", "img/book/fiction4.jpg", "27.8"],
			["恐怖小说", "黑面之狐", "[日本]三津田信三", "img/book/Horror5.jpg", "23.9"],
			["文艺小说", "人间词话", "王国维", "img/book/literature5.jpg", "13.4"],
			["励志小说", "乌合之众", "[法]古斯塔夫·勒庞", "img/book/motivation5.jpg", "5.00"],
			["文艺小说", "伊索寓言", "[古希腊]伊索", "img/book/literature6.jpg", "64.0"],
			["恐怖小说", "克苏鲁神话", "洛夫克拉夫特", "img/book/Horror1.jpg", "90.5"],
			["科幻小说", "三体", "刘慈欣", "img/book/fiction2.jpg", "46.5"],
			["恐怖小说", "闪灵", "斯蒂芬·金", "img/book/Horror2.jpg", "29.6"],
			["文艺小说", "野草", "鲁迅", "img/book/literature3.jpg", "19.8"],
			["科幻小说", "神的九十亿个名字", "[英]阿瑟·克拉克", "img/book/fiction3.jpg", "21.0"],
			["恐怖小说", "最后约翰死了", "[美] 贾森·帕金", "img/book/Horror4.jpg", "23.0"],
			["励志小说", "沟通的艺术", "[美] 罗纳德·B·阿德勒", "img/book/motivation4.jpg", "27.8"],
			["恐怖小说", "德古拉之吻", "[爱]斯托克", "img/book/Horror6.jpg", "29.5"],
			["科幻小说", "星髓", "[美]罗伯特·里德", "img/book/fiction1.jpg", "39.1"],
			["励志小说", "把时间当作朋友", "李笑来", "img/book/motivation6.jpg", "37.9"],
			["科幻小说", "日本沉没", "[日本]小松左京", "img/book/fiction6.jpg", "27.8"],
			["文艺小说", "快乐的死", "[法]加缪", "img/book/literature4.jpg", "24.5"],
			["励志小说", "启发", "罗振宇", "img/book/motivation2.jpg", "49.5"],
			["恐怖小说", "民调局异闻录1", "耳东水寿", "img/book/Horror3.jpg", "16.7"],
			["科幻小说", "神秘逝者的诤言", "李门", "img/book/fiction5.jpg", "24.9"],
			["励志小说", "别生气啦", "小池龙之介", "img/book/motivation3.jpg", "19.9"],
		];



		//for循环查找类别，首页分类展示
		for (let item of BookData) {
			//插入内容
			var txt = '<div class="col-lg-2 col-md-3 col-xs-4"><div class="thumbnail">' +
				'<img src="' + item[3] + '" alt="">' +
				'<div class="caption"><h4>' + item[1] +
				'</h4><p>' + item[2] +
				'</p><div class="price text-right"><span> ￥' +
				item[4] + '</span></div></div></div></div>';

			if (item[0] === '文艺小说') {
				// console.log(item[1]);
				$('#menu1 >div').append(txt);
			} else if (item[0] === '恐怖小说') {
				$('#menu2 >div').append(txt);
			} else if (item[0] === '科幻小说') {
				$('#menu3 >div').append(txt);
			} else if (item[0] === '励志小说') {
				$('#menu4 >div').append(txt);
			}

		}

		//图书列表
		var pageSize = 8; //每页数量
		var totalPage = Math.ceil(BookData.length / pageSize); //总页数
		var pagerIndex = 6; //显示页数
		if (totalPage < pagerIndex)
			pagerIndex = totalPage; //判断总页数
		var nowPage; //当前页
		var startData; //开始的数据
		var endData; //结尾的数

		// 页数加入分页控件
		for (var i = 1; i <= pagerIndex; i++) {
			$('#page_ul').append('<li class="page-item"><a href="#">' + i + '</a></li>')
		}


		pageination(1);
		for (let item of BookData) {
			//需要插入的内容
			var list = '<div class="col-md-3 col-xs-4"><div class="thumbnail">' +
				'<img src="' + item[3] + '" alt="">' +
				'<div class="caption"><h4>' + item[1] +
				'</h4><p>' + item[2] + '</p><p class="text-right"><span class="price">￥' +
				item[4] +
				'</span>&nbsp;&nbsp;<span class="to-cart">' +
				'<i class="glyphicon glyphicon-shopping-cart text-danger">' +
				'</i></span></p></div></div>';

			for (v = 4; v < item.length; v++) {
				if (item[0] === '文艺小说') {
					$('#main2 >div').append(list);
				} else if (item[0] === '恐怖小说') {
					$('#main3 >div').append(list);
				} else if (item[0] === '科幻小说') {
					$('#main4 >div').append(list);
				} else if (item[0] === '励志小说') {
					$('#main5 >div').append(list);
				}
			}
		}

		function pageination(i) {
			$('.page-item').removeClass("active"); //去掉当前页显示
			nowPage = i; //当前页切换到第i页
			startData = (nowPage - 1) * pageSize; //开始数据是第几条
			endData = nowPage * pageSize; //结束数据是第几条
			//如果最后一页不是完整显示的一页，则结束数据等于数据总条数
			if (endData > BookData.length) {
				endData = BookData.length;
			}

			$('#main1 >div').empty();
			//输出数据到表格
			// console.log("startData", startData);
			// console.log("endData", endData);

			for (var i = startData; i < endData; i++) {
				let item = BookData[i];
				// console.log(item);
				console.log(item[1])
				// console.log("==============")
				var list = '<div class="col-md-3 col-xs-4"><div class="thumbnail">' +
					'<img src="' + item[3] + '" alt="">' +
					'<div class="caption"><h4>' + item[1] +
					'</h4><p>' + item[2] + '</p><p class="text-right"><span class="price">￥' +
					item[4] +
					'</span>&nbsp;&nbsp;<span class="to-cart">' +
					'<i class="glyphicon glyphicon-shopping-cart text-danger">' +
					'</i></span></p></div></div>';

				$('#main1 >div').append(list);
			};

			//添加当前页显示模式  index是下标，element是值
			$('.page-item').each(function(index, element) {
				if ($(this).find('a').html() == nowPage) {
					$(this).addClass("active")
				}
			});

			//全部解除禁用
			$('.prePage').removeClass("disabled");
			$('.nextPage').removeClass("disabled");

			//判断禁用
			if (nowPage == 1) {
				$('.prePage').addClass("disabled");
			} else if (nowPage == totalPage) {
				$('.nextPage').addClass("disabled");
			}

		}
		//实现按钮切换
		$('body').on('click', '.page-item', function() {
			var index = parseInt($(this).find('a').html());
			pageination(index);
		})
	}
};

$(document).ready(function() {
	user_latest.init();
});
