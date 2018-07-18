
function cleanSong(song) {
  let arraySong = song.toLowerCase().split('');
  let cleanSong = '';
  // for removing the punctuation
  for (let i = 0; i < arraySong.length; i++) {
    if (arraySong[i] === ',' || arraySong[i] === '.') {
      arraySong.splice(i, 1, ' ');
    } else {
      cleanSong += arraySong[i];
    }
  }
  // make an array with this clean song
   return cleanSong.split(' '); 
}

function generateWordPairs(array) {
  let songObj = {}
  for (let i = 0; i < array.length - 1; i++) {
    if (!songObj[array[i]]) {
      songObj[array[i]] = [array[i + 1]];
    } else {
      songObj[array[i]].push(array[i + 1]);
    }
  }
  return songObj;
}

function randomWord(array){
  return array[Math.floor(Math.random() * array.length)]
}

function writeLine(obj, wordNum){
  let wordsArr = Object.keys(obj)
  let firstWord = randomWord(wordsArr)

  let line = [firstWord]
  let previousWord = firstWord

  for (let i = 1; i < wordNum; i++){
    if(obj[previousWord]){
      previousWord = randomWord(obj[previousWord])
    } else {
      previousWord = randomWord(wordsArr)
    }
    line.push(previousWord)
  }
  return line.join(' ')
}

function generatePoem(song, lineNum){
  song = document.querySelector("#song").value
  lineNum = document.querySelector("#lineNumber").value
  let songArr = cleanSong(song)
  let wordPairs = generateWordPairs(songArr)
  let finalSong = ''
  for (let i = 0; i < lineNum; i++){
    let randomNum = Math.floor(Math.random() * (6 - 4)) + 4;
    finalSong += writeLine(wordPairs, randomNum) + "<br>"
  }
  return document.querySelector(".card-title").innerHTML = finalSong
 
}

