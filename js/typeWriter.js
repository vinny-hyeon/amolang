
let i = 0;
let text1 = "안녕 송희야. ";
let text2 = "오늘은 송희의 28번째 생일이야! 우리가 만나구 벌써 사계절이 지났어. 송희는 사계절 언제나 이쁘구, 명랑하구, 귀엽구 감정이 풍부한 사랑스러운 사람이라는걸 느꼈어. 연애하면서 많은 크고 작은 소동들이 있었는데, 그때 우리의 감정들이 정말 소중하고 앞으로도 잊지못할 추억들로 남을거야. 평생 함께하며 오순도순 추억 이야기를 하며 행복하게 살고싶어. 사랑해 송희야! ❤️"
let speed = 100;

function typeWriter(text, para){
	if(ok == 2){
		clearInterval(typeInterval);
	}
	if(i < text.length){
		document.getElementById(para).innerHTML += text.charAt(i);
		i++;
		speed = Math.random() * 50 + 100;
	}
	else{
		if(ok == 0){
			i = 0;
		}
		ok += 1;
	}
}

var typeInterval;

//window.onload = function() {
//	window.onload = function(){};
   	typeInterval = setInterval(function(){
		if(ok == 0){
			typeWriter(text1, "txt1");
		}
		else if(ok == 1){
			typeWriter(text2, "txt1");
		} 
	}, 100);
//};
