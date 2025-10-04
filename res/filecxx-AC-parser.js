function filecxxACParser(html, datetime) {
	var regex = /<pre[^>]*id="codes"[^>]*>([\s\S]*?)<\/pre>/i;
    var matches = html.match(regex);
	var activeCode = "";
	if (matches && matches[1]) {
		var dateRangeRegex = /(\d{4}-\d{2}-\d{2}) 00:00:00 - (\d{4}-\d{2}-\d{2}) 00:00:00/;
		var lines = matches[1].split("\n");
		for (var i = 0; i < lines.length; i++) {
			var line = lines[i].replace(/^\s+|\s+$/g,"");
			if (!line) continue;
			var dates = line.match(dateRangeRegex);
			if (!dates) continue;
			
			if (datetime >= dates[1] && datetime < dates[2]) {
				activeCode = lines[i+1];
				break;
			}
		}
	}
	var data = {"activeCode":activeCode.replace(/^\s+|\s+$/g,""), "winTitle": "文件蜈蚣 - 激活码", "editorType": "可编辑文本", "buttonType": "按下按钮", "buttonName": "确定", "acLength": 150, "autoSubmit": 2500, "tipMsg": "激活码已复制到粘贴板，请打开激活码界面手动输入", "time":datetime};
	var output = "";
	for ( k in data) output += k + "=" + data[k] + "\n";
	return output;
}