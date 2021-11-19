function generate_password() {
	const tbox = document.getElementById("wsize")
	const mojisuu = Number(tbox.value);
	let resultbox = document.getElementById("result")
	let copybtn = document.getElementById("copy_btn")
	let text = ""
	if (mojisuu == NaN) {
		alert("文字数設定が異常です");
	} else {
	if (mojisuu > 10000 | mojisuu < 1) {
		alert("文字数は1以上10000以下である必要があります");
	} else {
    for (let step = 0; step < mojisuu; step++){
      let atai = Math.floor(Math.random() * 62);
      if (atai == 0) {text = text+"a"}
      if (atai == 1) {text = text+"b"}
      if (atai == 2) {text = text+"c"}
      if (atai == 3) {text = text+"d"}
      if (atai == 4) {text = text+"e"}
      if (atai == 5) {text = text+"f"}
      if (atai == 6) {text = text+"g"}
      if (atai == 7) {text = text+"h"}
      if (atai == 8) {text = text+"i"}
      if (atai == 9) {text = text+"j"}
      if (atai == 10) {text = text+"k"}
      if (atai == 11) {text = text+"l"}
      if (atai == 12) {text = text+"m"}
      if (atai == 13) {text = text+"n"}
      if (atai == 14) {text = text+"o"}
      if (atai == 15) {text = text+"p"}
      if (atai == 16) {text = text+"q"}
      if (atai == 17) {text = text+"r"}
      if (atai == 18) {text = text+"s"}
      if (atai == 19) {text = text+"t"}
      if (atai == 20) {text = text+"u"}
      if (atai == 21) {text = text+"v"}
      if (atai == 22) {text = text+"w"}
      if (atai == 23) {text = text+"x"}
      if (atai == 24) {text = text+"y"}
      if (atai == 25) {text = text+"z"}
      if (atai == 26) {text = text+"A"}
      if (atai == 27) {text = text+"B"}
      if (atai == 28) {text = text+"C"}
      if (atai == 29) {text = text+"D"}
      if (atai == 30) {text = text+"E"}
      if (atai == 31) {text = text+"F"}
      if (atai == 32) {text = text+"G"}
      if (atai == 33) {text = text+"H"}
      if (atai == 34) {text = text+"I"}
      if (atai == 35) {text = text+"J"}
      if (atai == 36) {text = text+"K"}
      if (atai == 37) {text = text+"L"}
      if (atai == 38) {text = text+"M"}
      if (atai == 39) {text = text+"N"}
      if (atai == 40) {text = text+"O"}
      if (atai == 41) {text = text+"P"}
      if (atai == 42) {text = text+"Q"}
      if (atai == 43) {text = text+"R"}
      if (atai == 44) {text = text+"S"}
      if (atai == 45) {text = text+"T"}
      if (atai == 46) {text = text+"U"}
      if (atai == 47) {text = text+"V"}
      if (atai == 48) {text = text+"W"}
      if (atai == 49) {text = text+"X"}
      if (atai == 50) {text = text+"Y"}
      if (atai == 51) {text = text+"Z"}
      if (atai == 52) {text = text+"0"}
      if (atai == 53) {text = text+"1"}
      if (atai == 54) {text = text+"2"}
      if (atai == 55) {text = text+"3"}
      if (atai == 56) {text = text+"4"}
      if (atai == 57) {text = text+"5"}
      if (atai == 58) {text = text+"6"}
      if (atai == 59) {text = text+"7"}
      if (atai == 60) {text = text+"8"}
      if (atai == 61) {text = text+"9"}
  }
  copybtn.value = "コピーする";
  resultbox.value = text;
  }
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

function generate_invite() {
	let result_invite = document.getElementById("result_invite")
	text = "https://discord.gg/"
    for (let step = 0; step < 10; step++){
      let atai = Math.floor(Math.random() * 62);
      if (atai == 0) {text = text+"a"}
      if (atai == 1) {text = text+"b"}
      if (atai == 2) {text = text+"c"}
      if (atai == 3) {text = text+"d"}
      if (atai == 4) {text = text+"e"}
      if (atai == 5) {text = text+"f"}
      if (atai == 6) {text = text+"g"}
      if (atai == 7) {text = text+"h"}
      if (atai == 8) {text = text+"i"}
      if (atai == 9) {text = text+"j"}
      if (atai == 10) {text = text+"k"}
      if (atai == 11) {text = text+"l"}
      if (atai == 12) {text = text+"m"}
      if (atai == 13) {text = text+"n"}
      if (atai == 14) {text = text+"o"}
      if (atai == 15) {text = text+"p"}
      if (atai == 16) {text = text+"q"}
      if (atai == 17) {text = text+"r"}
      if (atai == 18) {text = text+"s"}
      if (atai == 19) {text = text+"t"}
      if (atai == 20) {text = text+"u"}
      if (atai == 21) {text = text+"v"}
      if (atai == 22) {text = text+"w"}
      if (atai == 23) {text = text+"x"}
      if (atai == 24) {text = text+"y"}
      if (atai == 25) {text = text+"z"}
      if (atai == 26) {text = text+"A"}
      if (atai == 27) {text = text+"B"}
      if (atai == 28) {text = text+"C"}
      if (atai == 29) {text = text+"D"}
      if (atai == 30) {text = text+"E"}
      if (atai == 31) {text = text+"F"}
      if (atai == 32) {text = text+"G"}
      if (atai == 33) {text = text+"H"}
      if (atai == 34) {text = text+"I"}
      if (atai == 35) {text = text+"J"}
      if (atai == 36) {text = text+"K"}
      if (atai == 37) {text = text+"L"}
      if (atai == 38) {text = text+"M"}
      if (atai == 39) {text = text+"N"}
      if (atai == 40) {text = text+"O"}
      if (atai == 41) {text = text+"P"}
      if (atai == 42) {text = text+"Q"}
      if (atai == 43) {text = text+"R"}
      if (atai == 44) {text = text+"S"}
      if (atai == 45) {text = text+"T"}
      if (atai == 46) {text = text+"U"}
      if (atai == 47) {text = text+"V"}
      if (atai == 48) {text = text+"W"}
      if (atai == 49) {text = text+"X"}
      if (atai == 50) {text = text+"Y"}
      if (atai == 51) {text = text+"Z"}
      if (atai == 52) {text = text+"0"}
      if (atai == 53) {text = text+"1"}
      if (atai == 54) {text = text+"2"}
      if (atai == 55) {text = text+"3"}
      if (atai == 56) {text = text+"4"}
      if (atai == 57) {text = text+"5"}
      if (atai == 58) {text = text+"6"}
      if (atai == 59) {text = text+"7"}
      if (atai == 60) {text = text+"8"}
      if (atai == 61) {text = text+"9"}
  }
  result_invite.href = text;
  document.getElementById("result_invitel").textContent = text;
}

function generate_gift() {
	let result_gift = document.getElementById("result_gift")
	text = "https://discord.gift/"
    for (let step = 0; step < 16; step++){
      let atai = Math.floor(Math.random() * 62);
      if (atai == 0) {text = text+"a"}
      if (atai == 1) {text = text+"b"}
      if (atai == 2) {text = text+"c"}
      if (atai == 3) {text = text+"d"}
      if (atai == 4) {text = text+"e"}
      if (atai == 5) {text = text+"f"}
      if (atai == 6) {text = text+"g"}
      if (atai == 7) {text = text+"h"}
      if (atai == 8) {text = text+"i"}
      if (atai == 9) {text = text+"j"}
      if (atai == 10) {text = text+"k"}
      if (atai == 11) {text = text+"l"}
      if (atai == 12) {text = text+"m"}
      if (atai == 13) {text = text+"n"}
      if (atai == 14) {text = text+"o"}
      if (atai == 15) {text = text+"p"}
      if (atai == 16) {text = text+"q"}
      if (atai == 17) {text = text+"r"}
      if (atai == 18) {text = text+"s"}
      if (atai == 19) {text = text+"t"}
      if (atai == 20) {text = text+"u"}
      if (atai == 21) {text = text+"v"}
      if (atai == 22) {text = text+"w"}
      if (atai == 23) {text = text+"x"}
      if (atai == 24) {text = text+"y"}
      if (atai == 25) {text = text+"z"}
      if (atai == 26) {text = text+"A"}
      if (atai == 27) {text = text+"B"}
      if (atai == 28) {text = text+"C"}
      if (atai == 29) {text = text+"D"}
      if (atai == 30) {text = text+"E"}
      if (atai == 31) {text = text+"F"}
      if (atai == 32) {text = text+"G"}
      if (atai == 33) {text = text+"H"}
      if (atai == 34) {text = text+"I"}
      if (atai == 35) {text = text+"J"}
      if (atai == 36) {text = text+"K"}
      if (atai == 37) {text = text+"L"}
      if (atai == 38) {text = text+"M"}
      if (atai == 39) {text = text+"N"}
      if (atai == 40) {text = text+"O"}
      if (atai == 41) {text = text+"P"}
      if (atai == 42) {text = text+"Q"}
      if (atai == 43) {text = text+"R"}
      if (atai == 44) {text = text+"S"}
      if (atai == 45) {text = text+"T"}
      if (atai == 46) {text = text+"U"}
      if (atai == 47) {text = text+"V"}
      if (atai == 48) {text = text+"W"}
      if (atai == 49) {text = text+"X"}
      if (atai == 50) {text = text+"Y"}
      if (atai == 51) {text = text+"Z"}
      if (atai == 52) {text = text+"0"}
      if (atai == 53) {text = text+"1"}
      if (atai == 54) {text = text+"2"}
      if (atai == 55) {text = text+"3"}
      if (atai == 56) {text = text+"4"}
      if (atai == 57) {text = text+"5"}
      if (atai == 58) {text = text+"6"}
      if (atai == 59) {text = text+"7"}
      if (atai == 60) {text = text+"8"}
      if (atai == 61) {text = text+"9"}
  }
  result_gift.href = text;
  document.getElementById("result_giftl").textContent = text;
}