function triangle(){
    let a = parseInt(prompt("Введіть довжину сторони A"));
    let b = parseInt(prompt("Введіть довжину сторони B"));
    let c = parseInt(prompt("Введіть довжину сторони C"));
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    let h = 2 * area / a;
    let mn = h;
    let np = h;
    let maxArea = mn * np;
    alert("Максимальна площа MNPQ: " + maxArea);
}