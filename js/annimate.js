var endFlipFoxkeh = function(){ //この下はふぉくすけのフリップを終了させる動きの一連
	var foxkeh = document.querySelector("#slidein-foxkeh img");　//ここでslidein-foxkeh imgの中からイメージ（画像、この場合はふぉくすけの画像）の選択をしている
	foxkeh.setAttribute("class", "slidein");
	foxkeh.removeEventListener("animationend", endFlipFoxkeh); //removeEventListenerとは登録されているイベントをなくすこと。ここではendFlipFoxkeh（ふぉくすけのフリップを終了させる動きの一連）をなくしている

	foxkeh.setAttribute("class", "");
};

var endSlideinFoxkehAndStartFlipFoxkeh = function(){ //この下は「ふぉくすけのスライドを終了させる動きの一連」と「ふぉくすけのフリップを開始する動きの一連」
	var foxkeh = document.querySelector("#slidein-foxkeh img");　//ここでslidein-foxkeh imgの中からイメージ（画像、この場合はふぉくすけの画像）の選択をしている
	foxkeh.setAttribute("class", "slidein");

	foxkeh.removeEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh);
	foxkeh.addEventListener("animationend", endFlipFoxkeh);

	foxkeh.setAttribute("class", "flip");
};

var startSlideinFoxkeh = function(){ //この下はstartSlideinfoxkehに関する説明
	var foxkeh = document.querySelector("#slidein-foxkeh img"); //ここでslidein-foxkeh imgの中からイメージ（画像、この場合はふぉくすけの画像）の選択をしている
	foxkeh.setAttribute("class", "slidein"); //

	foxkeh.addEventListener("animationend", endSlideinFoxkehAndStartFlipFoxkeh); //新たに「ふぉくすけのスライドを終了させる動きの一連」と「ふぉくすけのフリップを開始する動きの一連」を追加している
};

var slideinFoxkehButton = document.querySelector("#slidein-foxkeh button");　//この下はslideinFockehButtonに関する説明
slideinFoxkehButton.addEventListener("click", startSlideinFoxkeh); //slideinFockehButtonがクリックされると、startSlideinfoxkehをいう動きが発動する
