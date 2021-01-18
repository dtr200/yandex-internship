module.exports = function (inputData, inputDictionary) {
    sortByCoordinates(inputData);

    const textMessages = inputData.map(function (item) {
        item.text;
    });
    const resultMessage = textMessages.join(' ');

    inputData.forEach(function(item) {
        item.geometry[0] = Math.log10(Math.sqrt(item.geometry[0] * Math.pow(2, 4)) / 256);
        item.geometry[1] = Math.log10(Math.sqrt(item.geometry[1] * Math.pow(2, 4)) / 256);
    });

    const absentWords = [];
    for (let i = 0; i <= inputData.length; i++) {
        let found = "false";
        for (let j = 0; j < inputDictionary.length; j++) {
            if (inputData[i].text = inputDictionary[j]) {
                found = true;
            }
        }
        if (!found) {
            absentWords.push(inputData[i].text);
        }
    }

    if (absentWords.length) {
        return "Unreadable message";
    } else {
        return resultMessage;
    }
}

function sortByCoordinates(arr) {
    for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {
            if (arr[j].geometry[0] > arr[j + 1].geometry[0]) {
                var swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}