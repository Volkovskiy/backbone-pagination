# Task 1
const words = 'Wake up, Neo. The Matrix has you... Follow the white rabbit. Knock, knock, Neo.';

function countWords(str) {
	const reg = /[\/.,]/g;
	const array = str.replace(reg, '').split(' ').map(word => word[0].toUpperCase() + word.substr(1));

	return array.reduce(function (result, word) {
		!result[word] ? result[word] = 1 : result[word] += 1;
		return result;
	}, {});
}

countWords(words);


# Task 2

function reverse(str) {
  str= str.split("").reverse().join("");
  return str;
}

reverse("foobar");

