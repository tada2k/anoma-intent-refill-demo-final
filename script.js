const msg = `✅ Settled (simulated): gas top-up sent.\n\n` +
    `This demo shows how an intent → planned route → single action UX could feel on Anoma.`;
  $("result").textContent = msg;
}

function newTurn(){
  STATE.turn += 1;
  $("destAddr").value = "";
  $("needAmt").value = "";
  $("timeWin").value = 15;
  $("intentJson").textContent = "—";
  $("steps").innerHTML = "";
  $("est").textContent = "—";
  $("result").textContent = "";
  $("settle").disabled = true;
}

// Wire up
$("plan").addEventListener("click", ()=>{
  const i = buildIntent();
  if(!i) return;
  renderIntent(i);
  const r = planRoute(i);
  renderRoute(r);
});
$("copy").addEventListener("click", copyIntent);
$("settle").addEventListener("click", settle);
$("newTurn").addEventListener("click", newTurn);
$("reset").addEventListener("click", newTurn);

// Auto-init
newTurn();
