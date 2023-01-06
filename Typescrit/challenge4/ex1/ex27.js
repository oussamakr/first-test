var t = [];
t = [5, 6, 9, 0, 1, 2, 3, 5, 1,];
for (var i = 1; i < t.length; i++) {
    if (t[i] < t[0]) {
        t[0] = t[i];
    }
}
console.log(t[0]);
