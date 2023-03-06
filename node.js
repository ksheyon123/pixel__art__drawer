const a = () => {
  let r = 0;
  let g = 0;
  let b = 0;
  let newArr = [];
  for (let i = 0; r <= 255; i++) {
    for (let j = 0; g <= 255; j++) {
      for (let k = 0; b <= 255; k++) {
        newArr.push(`${r}, ${g}, ${b}`);
        b = k * 3;
      }
      g = j * 3;
    }
    r = i * 3;
  }
  console.log(newArr);
};

a();
