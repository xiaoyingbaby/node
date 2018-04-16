module.exports = function(){
	var oper = {
		add : function(n1, n2){
			return n1 + n2;
		},
		sbb : function(n1, n2){
			return n1 - n2;
		}
	};
	
	var cacl = document.createElement('div');
	cacl.id = "test";
	cacl.textContent = "测试结果：" + oper.add(10, 20);
	return cacl;
};
