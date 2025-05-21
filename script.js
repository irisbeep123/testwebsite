// Array om huidige hoogste biedingen bij te houden, index 1 t/m 9 gebruiken
const bids = Array(10).fill(0); 

function placeBid(itemNumber) {
  const input = document.getElementById('input' + itemNumber);
  const bidDisplay = document.getElementById('bid' + itemNumber);
  const newBid = parseFloat(input.value);

  if (isNaN(newBid) || newBid <= bids[itemNumber]) {
    alert('Voer een hoger bod in dan het huidige bod (€' + bids[itemNumber] + ')');
    return;
  }

  // Update het bod
  bids[itemNumber] = newBid;
  bidDisplay.textContent = newBid.toFixed(2);
  
  // Maak input leeg
  input.value = '';

  alert('Je bod van €' + newBid.toFixed(2) + ' is geplaatst!');
}


