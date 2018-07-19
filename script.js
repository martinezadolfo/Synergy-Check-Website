const substanceObject = {};

function fetchSynergyCheck(substances) {
  let substanceOne = substances.substanceOne;
  let substanceTwo = substances.substanceTwo;
  fetch(`http://tripbot.tripsit.me/api/tripsit/getDrug?name=${substanceOne}`)
    .then(res => res.json())
    .then((result) => {
      let synergyCheck = document.getElementById('synergyBox');
      let endInfo = document.createElement('p');
      let endInfoText = document.createTextNode(' information provided by TripSit http://substances.tripsit.me/ ')
      synergyCheck.innerHTML = result.data[0].combos[substanceTwo].status;
      endInfo.appendChild(endInfoText);
      synergyCheck.appendChild(endInfo);
    })



}

function fetchDrugInfo(substancee, id, el) {
  fetch(`http://tripbot.tripsit.me/api/tripsit/getDrug?name=${substancee}`)
    .then(res => res.json())
    .then((result) => {
      let substance = document.getElementById(id);
      let substanceName = document.createElement(el);
      let drugNameText = document.createTextNode(result.data[0].name);
      let drugNameInfo = document.createElement(el);
      let drugInformation = document.createTextNode(result.data[0].properties.summary);
      substanceName.appendChild(drugNameText);
      drugNameInfo.appendChild(drugInformation);
      substance.appendChild(substanceName);
      substance.appendChild(drugNameInfo);
    })

  substanceObject[id] = substancee;
}

fetchDrugInfo('cannabis', 'substanceOne', 'p');
fetchDrugInfo('caffeine', 'substanceTwo', 'p');
fetchSynergyCheck(substanceObject);

console.log(substanceObject);




