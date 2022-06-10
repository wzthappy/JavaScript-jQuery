window.addEventListener('load', function() {
	var preview_img = document.querySelector('.preview_img');
	var mask = document.querySelector('.mask');
	var big = document.querySelector('.big');
	// 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
	preview_img.addEventListener('mouseover', function(e) {
		mask.style.display = 'block';
		big.style.display = 'block';

		// 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
		// (1). 先计算出鼠标在盒子内的坐标
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		// console.log(x,y);
		// (2). 盒子的高度 200的一半 是 100 就是我们mask 的最终 left1 和top值了
		// (3). 我们mask 移动的距离
		var maskX = x - mask.offsetWidth / 2;
		var maskY = y - mask.offsetHeight / 2;
		// (4). 如果x 坐标小于0 就让他停在0 的位置
		// 遮挡层的最大移动距离
		var maskMax = preview_img.offsetWidth - mask.offsetWidth;
		if (maskX <= 0) {
			maskX = 0;
		} else if (maskX >= maskMax) {
			maskX = maskMax;
		}
		if (maskY <= 0) {
			maskY = 0;
		} else if (maskY >= maskMax) {
			maskY = maskMax;
		}
		mask.style.left = maskX + 'px';
		mask.style.top = maskY + 'px';
		// 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
		// 大图
		var bj = document.querySelector('.bj');
		// 大图片最大移动距离
		var bigMax = bj.offsetWidth - big.offsetWidth;
		// 大图片的移动距离 x y 
		var bigX = maskX * bigMax / maskMax;
		var bigY = maskY * bigMax / maskMax;
		bj.style.left = -bigX + 'px';
		bj.style.top = -bigY + 'px';
	});
	preview_img.addEventListener('mouseout', function() {
		mask.style.display = 'none';
		big.style.display = 'none';
	});
});
