var endSlideinFoxkeh = function(){ //この下はスライドを終了させる動きの一連
	var foxkeh = document.querySelector("#slidein-foxkeh img");　//ここでslidein-foxkeh imgの中からイメージ（画像、この場合はFふぉくすけの画像）の選択をしている
<<<<<<< HEAD
	foxkeh.setAttribute("class", "slidein"); 
=======
	foxkeh.setAttribute("class", "");
};

var startSlideinFoxkeh = function(){ //この下はスライドを始める動きの一連
	var foxkeh = document.querySelector("#slidein-foxkeh img"); //ここでslidein-foxkeh imgの中からイメージ（画像、この場合はふぉくすけの画像）の選択をしている
	foxkeh.setAttribute("class", "slidein");

	foxkeh.addEventListener("animationend", endSlideinFoxkeh); //新たに「ふぉくすけのスライドを終了させる動きの一連」と「ふぉくすけのフリップを開始する動きの一連」を追加している
>>>>>>> origin/make_slidein_retriable
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh); //アニメーション開始ボタンをクリックすると、startSlideinFoxekehを発動させる