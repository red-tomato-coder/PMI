function matche(){
    let matchCount = 37;
    let currentMove;
    let minMatch;
    if(Math.random() <0.5){
        currentMove = 1;
    } else{
        currentMove = 2;
    }

    while(matchCount > 0){
        if(currentMove == 1){
            let recom = 0;
            if(matchCount > 10){
                recom = 5;
            } else if(matchCount <= 10 && matchCount >= 5){
                recom = matchCount - 6;
            } else if(matchCount < 5){
                recom = matchCount;
            }
            minMatch = Number(prompt(`Залишилось ${matchCount} сірників. Рекомендовано взяти: ${recom}. Скільки бере гравець ${currentMove}:`));
            currentMove = 2;
        } else {
            minMatch = Number(prompt(`Залишилось ${matchCount} сірників. Скільки бере гравець ${currentMove}:`));
            currentMove = 1;
        }
        if(minMatch<0){
            alert("Взято від'ємне число. Хід пропущено")
            minMatch = 0;
        }

        if(minMatch > 5){
            alert("Взято більше 5 сірників. Взято 5.");
            minMatch = 5;
        }
        if(minMatch > matchCount){
            minMatch = matchCount;
        }
        matchCount = matchCount - minMatch;
    }
    if(matchCount == 0){
        if(currentMove == 1){
            currentMove = 2;
        } else {
            currentMove = 1;
        }
        alert(`Гравець ${currentMove} виграв`);
    }
}