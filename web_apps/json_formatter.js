function format_json() {
	let json_file = document.getElementById("json_file")
	let resultbox = document.getElementById("result")
	let iline = document.getElementById("1line")
	let copybtn = document.getElementById("copy_btn")
	copybtn.value = "コピーする";
	try{
	    var obj = JSON.parse(json_file.value);
		let error = "問題は検出されませんでした。";
		document.getElementById("correct").textContent = error;
		if (iline.checked) {
			resultbox.value = JSON.stringify(obj);
		} else {
			resultbox.value = JSON.stringify(obj, null, 2);
		}
	}
	catch(e){
		let error = "JSONの構文に問題があります! :\n"+e.message;
		document.getElementById("correct").textContent = error;
	}
}

function copy_to_clip() {
	let resultbox = document.getElementById("result")
	let copybtn = document.getElementById("copy_btn")
	if (navigator.clipboard) {
		navigator.clipboard.writeText(resultbox.value)
		copybtn.value = "コピーしました!";
	} else {
		alert("大変申し訳ありませんが、お使いのブラウザはクリップボードにコピーに対応しておりません。\nResult欄から手動でコピーしてください。");
	}
}