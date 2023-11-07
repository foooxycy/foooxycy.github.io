var user_contact = {
	init: function() {
		this.eventBind()
	},
	eventBind: function() {
		// 增加评论
		$('body').on("click",".send", function() {
			var txt = '<div class="media well"><div class="media-left"><a href="#">' +
				'<img src="img/avatar/4.jpg" class="img-circle"></a></div><div class="media-body"><div><h4 class="media-heading"> 蔓越莓果酱</h4> <p>' +
				$("#text1").val() +
				'</p><a href="#">举报</a>&nbsp;<a href="javascript:;" class="reply">回复</a>' +
				'&nbsp;&nbsp;<i class="glyphicon glyphicon-heart"></i>&nbsp;<span>0</span><br /></div>' +
				'<ul class="media-list"></ul></div></div>';
				
			$('#comment').append(txt);
			$(this).parent().find("textarea").val('');
		});

		// 输入框
		$("body").on("click", ".reply", function() {
			var txt = '<div><br /><textarea></textarea><br>' +
				'<button class="btn btn-success" id="add">确定</button>&nbsp;' +
				'<button class="btn btn-danger" id="del">取消</button></div>';
				
			$(this).parent().append(txt);
		});

		//楼中楼
		$("div").on("click", "#add", function() {
			var txt = '<li class="media"><div class="media-left">' +
				'<a href="#"><img src="img/avatar/4.jpg" class="img-circle"></a>' +
				'</div><div class="media-body"><div>' +
				'<h5 class="media-heading">蔓越莓果酱</h5><p>' +
				$(this).parent().find("textarea").val() +
				'</p><a href="#">举报</a>&nbsp;<a href="javascript:;" class="reply">回复</a>' +
				'&nbsp;<i class="glyphicon glyphicon-heart"></i>&nbsp;<span>0</span><br /></div>' +
				'<ul class="media-list"></ul></div></li>';

			$(this).parent().parent().next().append(txt);
			$(this).parent().remove();
		});

		//取消评论
		$("div").on("click", "#del", function() {
			$(this).parent().remove();
		});

		// 点赞
		$("body").on("click", ".glyphicon-heart", function() {
			let like = parseInt($(this).siblings('span').text());
			if ($(this).hasClass('text-danger')) {
				$(this).siblings('span').text(like - 1);
			} else {
				$(this).siblings('span').text(like + 1);
			}
			$(this).toggleClass('text-danger');
		})
	}

};

$(document).ready(function() {
	user_contact.init();
});
