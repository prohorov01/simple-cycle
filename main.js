let m = "";
let n = 20;
for (let i = 10; i <= n; i++) {
  m += i + (i < n ? "," : "");
}
console.log(m);

let b = "";
let nv = 20;
for (let iv = 10; iv <= nv; iv++) {
  b += iv ** 2 + (iv < nv ? "," : "");
}
console.log(b);

for (let a = 7; a <= 70; a += 7) {
  console.log(a);
}

let nm = 0;
let xc = 0;

while (nm < 15) {
  nm++;
  xc += nm;
  console.log("//", nm);

  console.log("////", xc);
}

let nq = 14;
let x = 35;

while (n < 34) {
  n++;
  x *= nq;
  console.log("/n/", nq);

  console.log("//x//", x);
}

let t = 0;
for (let i = 1; i <= 500; i++) {
  t += i / 500;
}
console.log(t);

let nk = 0;
let xs = 30;

while (nk < 25) {
  nk++;
  xs += 2;
  console.log("//", nk);

  console.log("////", xs);
}

let nh = 0;
let xf = 100;

while (nh < 33) {
  nh++;
  xf += 3;
  console.log("/nh/", nh);

  console.log("//xf//", xf);
}

for (let ti = 1; ti <= 100; ti++) {
  if (100 % ti == 0) {
    console.log(ti);
  }
}

let ul = 0;
for (let y = 1; y <= 100; y++) {
  if (100 % y === 0 && y % 2 === 0) {
    ul++;
  }
}
console.log(ul);

let yz = 0;
for (let i = 1; i <= 10; i++) {
  if (10 % i === 0 && i % 2 === 0) {
    yz += i;
  }
}
console.log(yz);

let w;
for (let q = 2; q <= 9; q++) {
  for (j = 1; j <= 10; j++) {
    w = q * j;
    console.log(`${q} * ${j} =${w} `);
  }
}
