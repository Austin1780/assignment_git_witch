class QuestionParser {
	constructor(){}
	parse(string){
		let wordArray = string.split(' ');
		let resultObject = {};
		resultObject.username = wordArray[wordArray.length - 2];
		let i=1;
		if(wordArray[1] === 'many'){
			i = 2;
		}

		if(wordArray[i] === 'repos'){
			resultObject.subject = 'repos';
		}else if(wordArray[i] === 'starred'){
			resultObject.subject = 'starred repos'
		}

		if(wordArray[0] === 'what'){
			resultObject.query = 'details';
		}else if(wordArray[0] === 'how'){
			resultObject.query = 'count';
		}
		return resultObject;
	}
}

module.exports = QuestionParser;
