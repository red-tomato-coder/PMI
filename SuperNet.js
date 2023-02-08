function supernet(){
    let R = parseInt(prompt("Опір між школами:"));
    let N = parseInt(prompt("Кількість шкіл:"));
    let counter = 0;
    for (let n1 = 1; n1 < N; n1++) {
        for (let n2 = n1 + 1; n2 <= N; n2++) {
        const measurement =R / (1/n1 + 1/n2);
    if (Number.isInteger(measurement)) {
        counter++;
    }
    }
    }
        alert(`Кількість шкіл з рівним значенням напр: ${counter}`);
}