/* =========================
   HAMBURGER MENU
========================= */
function toggleMenu(){
  document.getElementById("menu").classList.toggle("show");
}

/* =========================
   TABS KAMAR
========================= */
function showType(id, btn){
  document.querySelectorAll('.rooms').forEach(r=>{
    r.classList.remove('active');
  });
  document.querySelectorAll('.tab').forEach(t=>{
    t.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

/* =========================
   ROOM GENERATOR  ROOM)
========================= */
function rand(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function rp(n){
  return "Rp " + n.toLocaleString("id-ID") + " / bulan";
}

function genRooms(id, prefix, min, max){
  const box = document.getElementById(id);
  if(!box) return;

  box.innerHTML = "";
  for(let i=1;i<=4;i++){
    box.innerHTML += `
      <div class="room-card">
        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2">
        <h3>Kamar ${prefix}${i}</h3>
        <p class="harga">${rp(rand(min,max))}</p>
        <ul>
          <li>WiFi</li>
          <li>Kasur</li>
          <li>Lemari</li>
          <li>Bersih & Aman</li>
        </ul>
      </div>
    `;
  }
}

genRooms("t1","A",500000,900000);
genRooms("t2","B",1000000,2000000);
genRooms("t3","C",3000000,4000000);

/* =========================
   COUNTER ANIMATION
========================= */
document.querySelectorAll('.counter').forEach(counter=>{
  const update=()=>{
    const target = +counter.dataset.target;
    const current = +counter.innerText.replace("+","");
    const inc = Math.ceil(target/60);

    if(current < target){
      counter.innerText = current + inc;
      setTimeout(update,40);
    }else{
      counter.innerText = target + "+";
    }
  };
  update();
});

/* =========================
   TOUCH SUPPORT
========================= */
document.addEventListener("touchstart",()=>{}, {passive:true});
