var endSlideinFoxkeh = function(){ //この下はスライドするのをやめる動きの一連
	var foxkeh = document.querySelector("#slidein-foxkeh img");
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein");
=======
	foxkeh.setAttribute("class", "");
};

var startSlideinFoxkeh = function(){ //この下はスライドする動きの一連
	var foxkeh = document.querySelector("#slidein-foxkeh img"); //ここでイメージ（画像、この場合はFoくすけの画像を選んでいる）の選択をしている
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh);
>>>>>>> origin/make_slidein_retriable
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh);
//アニメーション開始ボタンをクリックすると、startSlideinFoxekehを発動させる