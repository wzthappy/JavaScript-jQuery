// 缺点 只能一次给一个对象设置
// 封装tap，解决click 300ms 延迟
function tap(obj, callback) {
    var isMove = false;
    var startTime = 0; // 记录触摸时候的时间变量
    obj.addEventListener('touchstart', function() {
		startTime = Date.now(); // 记录触摸时间
	});
	obj.addEventListener('touchmove', function() {
		isMove = true; // 看看是否有滑动，有滑动算拖拽，不算点击
	});
	obj.addEventListener('touchend', function() {
		if (!isMove && (Date.now() - startTime) < 150) { // 如果手指触发和离开时间小于150ms 算点击
			callback && callback(); // 执行回调函数
		}
		isMove = false;  // 取反 重复
		startTime = 0;
	});
}

// 调用
/*  tap(div, function() { // 执行代码 });  */