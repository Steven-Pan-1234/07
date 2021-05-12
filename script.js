document.getElementById('mp').addEventListener('click', fl)
let fn = 0
let sn = 0
let ct = 0
let as = 0
let nt = false
function fl () {
  fn = document.getElementById('fn').value
  fn = parseInt(fn)
  sn = document.getElementById('sn').value
  sn = parseInt(sn)
  if (fn < 0) {
    nt = !nt
    fn = Math.abs(fn)
  }
  if (sn < 0) {
    nt = !nt
    sn = Math.abs(sn)
  }
  for (ct = 0; ct < fn; ct++) {
    as = as + sn
  }
  if (nt) {
    as = 0 - as
  }
  document.getElementById('p').innerHTML = as
}