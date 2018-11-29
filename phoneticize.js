//输入单词 输出音标
//------------------------------------------------------------------
function isConsonant(letter) {
    if (/b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|z/.test(letter)) {
        return true;
    } else if (letter == "") {
        return false;
    } else {
        return false;
    }

}

//---------------------------
function phoneticize(word) {
    word = word.toLowerCase();
    wordLength = word.length;
    pronunciation = "";

    for (var i = 0; i < wordLength; i++) {

        letter = word[i];
        isEnd = (i == (wordLength - 1)) ? true: false;
        isHead = (i == 0) ? true: false;
        isEnd2 = (i == (wordLength - 2)) ? true: false;
        isEnd3 = (i == (wordLength - 3)) ? true: false;
        existNext1 = (i < (wordLength - 1)) ? true: false;
        existNext2 = (i < (wordLength - 2)) ? true: false;

        switch (letter) {
            //--------------------------------
        case "a":
            if (isEnd) {
                pronunciation += "ə";
                break;
            } else if (isEnd2 && isConsonant(word[i + 1])) {
                if (word[i + 1] == "r") {
                    pronunciation += "ɑː";
                    i++;
                    break;
                } else {
                    pronunciation += "æ";
                    break;
                }
            } else if (existNext2 && isConsonant(word[i + 1]) && isConsonant(word[i + 2])) {
                if (word[i + 1] == "r") {
                    pronunciation += "ɑː";
                    i++;
                    break;
                } else {
                    pronunciation += "æ";
                    break;
                }
            } else if (existNext2 && isConsonant(word[i + 1]) && (!isConsonant(word[i + 2]))) {
                pronunciation += "eɪ";
                break;
            } else if (word[i + 1] == "a") {
                pronunciation += "ɑː";
                i++;
                break;
            } else if (word[i + 1] == "e") {
                pronunciation += "iː";
                i++;
                break;
            } else if (word[i + 1] == "i") {
                pronunciation += "eɪ";
                i++;
                break;
            } else if (word[i + 1] == "o") {
                pronunciation += "aʊ";
                i++;
                break;
            } else if (word[i + 1] == "u") {
                pronunciation += "ɔː";
                i++;
                break;
            } else if (word[i + 1] == "y") {
                pronunciation += "eɪ";
                i++;
                break;
            } else {
                pronunciation += "ə";
                break;
            }
            break;
            //--------------------------------
        case "b":
            if (isHead && (word[i + 1] == "h")) {
                pronunciation += "b";
                i++;
            } else {
                pronunciation += "b";
                break;
            }
            break;
            //--------------------------------
        case "c":
			if (isEnd) {
				pronunciation += "k";
                break;	
			} else if (/chr|char/.test(word.substr(i,4))){
				pronunciation += "k";
				i++;
                break;
			} else if (/ch/.test(word.substr(i,2))){
				pronunciation += "tʃ";
				i++;
                break;
			} else if (/ce|ci|cy/.test(word.substr(i,2))){
				pronunciation += "s";
                break;
			} else {
				pronunciation += "k";
                break;				
			}			
            break;

            //--------------------------------
        case "d":
            if (/^dge|^dged|^dges|^dging/.test(word.substr(i, 5))) {
                pronunciation += "dʒ";
                i++;
                break;
            } else {
                pronunciation += "d";
            }
            break;
            //--------------------------------
        case "e":
            if (isEnd) {
                pronunciation += ""
                break;
            } else if (word.substr(i + 1, 1) == "a") {
                pronunciation += "iː";
                i++;
                break;
            } else if (word.substr(i + 1, 1) == "e") {
                pronunciation += "iː";
                i++;
                break;
            } else if (word.substr(i + 1, 1) == "i") {
                pronunciation += "aɪ";
                i++;
                break;
            } else if (word.substr(i + 1, 1) == "o") {
                pronunciation += "ɪə";
                i++;
                break;
            } else if (word.substr(i + 1, 1) == "u") {
                pronunciation += "jʊ";
                i++;
                break;
            } else if (isEnd2 && (word.substr(i + 1, 1) == "y")) {
                pronunciation += "eɪ";
                i++;
                break;
            } else if (isEnd2 && (isConsonant(word.substr(i + 1, 1)))) {
                if (word.substr(i + 1, 1) == "r") {
                    pronunciation += "ə";
                    i++;
                    break;
                } else if (word.substr(i + 1, 1) == "d") {
                    pronunciation += "ɪ";
                    break;
                } else {
                    pronunciation += "e";
                    break;
                }
            } else if ((isConsonant(word.substr(i + 1, 1))) && (!isConsonant(word.substr(i + 2, 1)))) {
                pronunciation += "ɪ";
                break;
            } else if ((isConsonant(word.substr(i + 1, 1))) && (isConsonant(word.substr(i + 2, 1)))) {
                if (word.substr(i + 1, 1) == "r") {
                    pronunciation += "ə";
                    i++;
                    break;
                } else {
                    pronunciation += "e";
                    break;
                }
            } else if ((word.substr(i + 1, 1) == "y") && (isConsonant(word.substr(i + 2, 1)))) {
                pronunciation += "eɪ";
                i++;
                break;
            } else if ((word.substr(i + 1, 1) == "y") && (!isConsonant(word.substr(i + 2, 1)))) {
                pronunciation += "ɪ";
                break;
            } else if ((word.substr(i + 1, 1) == "r") && (isConsonant(word.substr(i + 2, 1)))) {
                pronunciation += "ə";
                i++;
                break;
            } else if ((word.substr(i + 1, 1) == "r") && isEnd2) {
                pronunciation += "ə";
                i++;
                break;
            } else {
                pronunciation += "ə";
                break;
            }
            break;
            //--------------------------------
        case "f":
            pronunciation += "f";
            break;
            //--------------------------------
        case "g":
            if (isHead && (word.substr(i + 1, 1) == "h")) {
                pronunciation += "g";
                i++;
                break;
            } else if (word.substr(i + 1, 1) == "e") {
                pronunciation += "dʒ";
                break;
            } else if (/^ghs|^ghter|^ghs|^ghed|^ghing|^gh$/.test(word.substr(i, 5))) {
                pronunciation += "f";
                i++;
                break;
            } else {
                pronunciation += "g";
                break;
            }
            break;
            //--------------------------------
        case "h":
            if (isEnd) {
                break;
            } else {
                pronunciation += "h";
                break;
            }
            //--------------------------------
        case "i":
            if (isEnd) {
                pronunciation += "aɪ";
                break;
            } else if (isEnd2 && isConsonant(word.substr(i + 1, 1))) {
                pronunciation += "ɪ";
                break;
            } else if (word.substr(i, 2) == "ir" && isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "ɜː";
                i++;
                break;
            } else if (isConsonant(word.substr(i + 1, 1)) && isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "ɪ";
                break;
            } else if (isConsonant(word.substr(i + 1, 1)) && !isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "aɪ";
                break;
            } else if (word.substr(i + 1, 1) == "e") {
                pronunciation += "aɪ";
                i++;
                break;
            } else if (word.substr(i + 1, 1) == "a") {
                pronunciation += "ɪə";
                i++;
                break;
            } else {
                pronunciation += "aɪ";
                break;
            }
            break;
            //--------------------------------			
        case "j":
            pronunciation += "dʒ";
            break;
            //--------------------------------
        case "k":
            if (isHead && word.substr(i + 1, 1) == "h") {
                pronunciation += "k";
                i++;
                break;
            } else {
                pronunciation += "k";
                break;
            }
            break;
            //--------------------------------
        case "l":
            if (word.substr(i, 3) == "low") {
                pronunciation += "ləʊ";
                i += 2;
                break;
            } else {
                pronunciation += "l";
                break;
            }
            break;
            //--------------------------------
        case "m":
            pronunciation += "m";
            break;
            //--------------------------------
        case "n":
            if (isEnd2 && (word[i + 1] == "g")) {
                pronunciation += "ŋ";
                i++;
                break;
            } else {
                pronunciation += "n";
                break;
            }
            break;
            //--------------------------------
        case "o":
            if (isEnd) {
                pronunciation += "əʊ";
                break;
            } else if (word.substr(i + 1, 1) == "w") {
                pronunciation += "aʊ";
                i++;
                break;
            } else if (isEnd2 && (word.substr(i + 1, 1) == "r")) {
                pronunciation += "ə";
                i++;
                break;
            } else if (isEnd2 && isConsonant(word.substr(i + 1, 1))) {
                pronunciation += "ɒ";
                break;
            } else if ((word.substr(i + 1, 1) == "r") && isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "ɔː";
                i++;
                break;
            } else if (isConsonant(word.substr(i + 1, 1)) && isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "ɒ";
                break;
            } else if (isConsonant(word.substr(i + 1, 1)) && !isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "əʊ";
                break;
            } else if (/a|e/.test(word.substr(i + 1, 1))) {
                pronunciation += "əʊ";
                i++;
                break;
            } else if (/i|y/.test(word.substr(i + 1, 1))) {
                pronunciation += "ɒɪ";
                i++;
                break;
            } else if (/o/.test(word.substr(i + 1, 1))) {
                pronunciation += "uː";
                i++;
                break;
            } else if (/u/.test(word.substr(i + 1, 1))) {
                pronunciation += "aʊ";
                i++;
                break;
            } else {
                pronunciation += "ə";
                break;
            }
            break;
            //--------------------------------
        case "p":
            if (word.substr(i + 1, 1) == "h") {
                pronunciation += "f";
                i++;
                break;
            } else {
                pronunciation += "p";
                break;
            }
            break;
            //--------------------------------
        case "q":
            if (isHead && (word.substr(i, 3) == "qua")) {
                pronunciation += "kwɒ";
                i += 2;
                break;
            } else if (isEnd3 && (word.substr(i, 3) == "qua")) {
                pronunciation += "kwə";
                i += 2;
                break;
            } else if (word.substr(i, 3) == "que") {
                pronunciation += "kwiː";
                i += 2;
                break;
            } else if (/quit$|quitted|quitting/.test(word.substr(i, 8))) {
                pronunciation += "kwiː";
                i += 2;
                break;
            } else if (word.substr(i, 3) == "qui") {
                pronunciation += "kwaɪ";
                i += 2;
                break;
            } else if (word.substr(i, 3) == "quo") {
                pronunciation += "kwəʊ";
                i += 2;
                break;
            } else {
                pronunciation += "k";
                break;
            }
            break;
            //--------------------------------
        case "r":
            if (isEnd) {
                pronunciation += "ə";
                break;
            } else {
                pronunciation += "r";
                break;
            }
            break;
            //--------------------------------
        case "s":
            if (word.substr(i, 2) == "sh") {
                pronunciation += "ʃ";
                i++;
                break;
            } else if (/scha|sche|schi|schu/.test(word.substr(i, 4))) {
                pronunciation += "ʃ";
                i += 2;
                break;
            } else if (/scho/.test(word.substr(i, 4))) {
                pronunciation += "sk";
                i += 2;
                break;
            } else if (/sce|sci/.test(word.substr(i, 3))) {
                pronunciation += "s";
                i++;
                break;
            } else {
                pronunciation += "s";
                break;
            }
            break;
            //--------------------------------
        case "t":
            if (word.substr(i + 1, 3) == "ion") {
                pronunciation += "ʃən";
                i += 3;
                break;
            } else if (word.substr(i + 1, 2) == "ia") {
                pronunciation += "ʃə";
                i += 2;
                break;
            } else if (/th/.test(word.substr(i, 2)) && isConsonant(word.substr(i + 2, 1))) {
                pronunciation += "θ";
                i++;
                break;
            } else if (/thi|thr|thu|th$/.test(word.substr(i, 3))) {
                pronunciation += "θ";
                i++;
                break;
            } else if (/tha|the|tho|thy/.test(word.substr(i, 3))) {
                pronunciation += "ð";
                i++;
                break;
            } else {
                pronunciation += "t";
                break;
            }
            break;
            //--------------------------------
        case "u":
            if ((!isEnd) && isConsonant(word[i + 1]) && isConsonant(word[i + 2])) {
                pronunciation += "ʌ";
                break;
            } else if (isEnd) {
                pronunciation += "juː";
                break;
            } else if (isEnd2 && isConsonant(word[i + 1])) {
                pronunciation += "ʌ";
                break;
            } else if (isConsonant(word[i + 1]) && (!isConsonant(word[i + 2]))) {
                pronunciation += "juː";
                break;
            } else if (word[i + 1] == "a") {
                pronunciation += "wə";
                i++;
                break;
            } else if (word[i + 1] == "e") {
                pronunciation += "juː";
                i++;
                break;
            } else if (word[i + 1] == "i") {
                pronunciation += "ɪ";
                i++;
                break;
            } else if (word[i + 1] == "o") {
                pronunciation += "juːəʊ";
                i++;
                break;
            } else if (word[i + 1] == "y") {
                pronunciation += "aɪ";
                i++;
                break;
            } else {
                pronunciation += "juː";
            }
            break;
            //--------------------------------
        case "v":
            pronunciation += "v";
            break;
            //--------------------------------
        case "w":
			if (isHead&&word.substr(i,2)=="wh"){
				pronunciation += "w";
				i++;
				break;
			} else if (isHead&&word.substr(i,2)=="wr"){
				pronunciation += "r";
				i++;
				break;
			} else {
				pronunciation += "w";
				break;				
			}
			break;            
            //--------------------------------
        case "x":
            if (isEnd) {
                pronunciation += "ks";
                break;
            } else if (isHead) {
                pronunciation += "z";
                break;
            } else {
                pronunciation += "ks";
                break;
            }
            break;
            //--------------------------------
        case "y":
            if (isEnd) {
                pronunciation += "ɪ";
                break;
            } else if (isConsonant(word[i + 1])) {
                pronunciation += "aɪ";
                break;
            } else {
                pronunciation += "j";
                break;
            }
            break;
            //--------------------------------
        case "z":
            pronunciation += "z";
            break;
            //--------------------------------
        default:
            break;

        }
    }

    return pronunciation;

}