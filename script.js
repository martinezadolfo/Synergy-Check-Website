const substanceObject = {
  substanceOne: 'cannabis',
  substanceTwo: 'caffeine'
};

function fetchSubstanceInfo(substance, substanceName, substanceInfo) {
  fetch(`http://tripbot.tripsit.me/api/tripsit/getDrug?name=${substance}`)
    .then(resp => resp.json())
    .then((result) => {
      document.getElementById(substanceName).innerHTML = result.data[0].name;
      document.getElementById(substanceInfo).innerHTML = result.data[0].properties.summary;
    })
}

function fetchSynergyCheck(substances) {
  let substanceOne = substances.substanceOne;
  let substanceTwo = substances.substanceTwo;
  fetch(`http://tripbot.tripsit.me/api/tripsit/getDrug?name=${substanceOne}`)
    .then(resp => resp.json())
    .then((result) => {
      document.getElementById('synergyCheck').innerHTML = result.data[0].combos[substanceTwo].status;
    })
}

function updateObjectOne(event) {
  substanceObject['substanceOne'] = event;
}

function updateSubstanceOne() {
  fetchSubstanceInfo(substanceObject.substanceOne, 'substanceOneName', 'substanceOneInfo', 'substanceOne');
}

function updateObjectTwo(event) {
  substanceObject['substanceTwo'] = event;
}

function updateSubstanceTwo() {
  fetchSubstanceInfo(substanceObject.substanceTwo, 'substanceTwoName', 'substanceTwoInfo', 'substanceTwo');
}

function updateSynergyCheck() {
  fetchSynergyCheck(substanceObject);
}

updateSubstanceOne();
updateSubstanceTwo();
updateSynergyCheck(substanceObject);



