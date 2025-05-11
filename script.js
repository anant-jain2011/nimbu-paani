// for (let i = 0; i <= 1000; i++) {
//   const div = document.createElement("div");
//   div.className = "box";
//   div.style.width = `${i}px`;
//   div.style.height = `${i}px`;
//   div.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
//   div.style.position = "absolute";
//   div.style.top = `${Math.random() * window.innerHeight}px`;
//   div.style.left = `${Math.random() * window.innerWidth}px`;
//   div.style.transition = "all 1ms ease-in-out";
//   div.style.zIndex = -i;
//   document.body.appendChild(div);
// }

// setInterval(() => {
//     const boxes = document.querySelectorAll(".box");
//     boxes.forEach((box) => {
//         box.style.transform = `rotate(${Math.random() * 360}deg)`;
//         box.style.opacity = Math.random();
//     });
// }, 1);