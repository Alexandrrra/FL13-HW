const countPoints = (scores) => {
    let point = 0;
    for (let i = 0; i < scores.length; i++) {
        let eachScore = scores[i].split(':');
        (eachScore[0] > eachScore[1]) ? point += 3: point += 0;
        (eachScore[0] === eachScore[1]) ? point += 1: point += 0;
    }
    return point;
};

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);