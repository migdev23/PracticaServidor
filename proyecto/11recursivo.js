const mult = (n, multiplicado) => {
  if (multiplicado > 10) {
    return null;
  }
  console.log(n * multiplicado);
  mult(n, multiplicado + 1);
};

mult(10,0)