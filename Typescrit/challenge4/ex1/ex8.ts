function incr(n: number) {
  let str: number
  for (let i = 1; i <=10; i++) {
    str = n + i
    console.log(str)
  }
}
let n = Number(prompt('saise un nombre n'))
incr(n)


