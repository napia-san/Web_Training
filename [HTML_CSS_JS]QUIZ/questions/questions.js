const choiceList = document.querySelectorAll('ol.choices li'); //全ての選択肢を取得

choiceList.forEach(li => li.addEventListener('click', checkCorrect)); //clickされたら，checkCorrectを呼ぶ

//正しい答えたち
const correctAnswers = {
	question1: 'C',
	question2: 'A',
	question3: 'D',
	question4: 'D',
};

function checkCorrect(event) {
	const clickedAnswerElement = event.currentTarget; //クリックされた部分のHTMLが代入される
	const selectedAnswer = clickedAnswerElement.dataset.answer; //選択された部分のHTMLのdata-answerのプロパティが代入される
	const questionID = clickedAnswerElement.closest('ol.choices').dataset.id; //クリックされた部分の親要素で'ol.choices'となるところを取得
	const correctAnswer = correctAnswers[questionID];

	let message;
	let colour_code;

	if (selectedAnswer === correctAnswer) {
		message = '正解です！';
		colour_code = '';
	} else {
		message = '不正解です．';
		colour_code = '#a00000';
	}

	alert(message);

	//答えを表示
	document.querySelector('div#section-answer').style.display = 'block';
}