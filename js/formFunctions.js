const MaakCheckboxen = (titel, keuzes, name, doelDiv) => {
      divOpties.innerHTML = `<h2>${titel}</h2>`;
      keuzes.forEach(keuze => {
            let htmlCheckBox = document.createElement('input');
            htmlCheckBox.type = 'checkbox';
            htmlCheckBox.name = name;
            htmlCheckBox.id = keuze;
            htmlCheckBox.value = keuze;
            console.log(htmlCheckBox);
            doelDiv.appendChild(htmlCheckBox);
            doelDiv.innerHTML += `${keuze} <br />`;
      });
}

const ToonKeuzeCheckboxen = (aanTeVinken, checkBoxesName) => {
      MaakCheckBoxenLeeg(checkBoxesName);
      aanTeVinken.forEach(keuze => {
        let checkBox = document.getElementById(keuze);
        checkBox.checked = true;
      });
}

const MaakCheckBoxenLeeg = (checkBoxesName) => {
      let checkBoxes = document.getElementsByName(checkBoxesName);
      checkBoxes.forEach(checkBox => {
            checkBox.checked = false;
      });
}

const GeefGekozenValuesCheckBoxes = (name) => {
      let checkBoxen = document.getElementsByName(name);
      let gemaakteKeuzes = [];
      checkBoxen.forEach(checkbox => {
        if (checkbox.checked) gemaakteKeuzes.push(checkbox.value);
      });
      return gemaakteKeuzes;
}

const GeefRadioButtons = (titel, keuzes, name, doelDiv) => {
      divMotor.innerHTML = `<h2>${titel}</h2>`;
      for (let index = 0; index < keuzes.length; index++) {
        const keuze = keuzes[index];
        let htmlKeuzeRondje = `<input type="radio" name="${name}" value="${index}"/>${keuze}`;
        doelDiv.innerHTML += htmlKeuzeRondje;
      }
      return document.getElementsByName(name);
}

const GeefIndexGekozenRadioButton = (name) => {
      let indexKeuze = -1;
      let radioButtons = document.getElementsByName(name);
      for (let index = 0; index < radioButtons.length; index++) {
        const optie = radioButtons[index];
        if (optie.checked) {
          indexKeuze = index;
          break;
        }
      }
      return indexKeuze;
}

const MaakAlleControlsLeeg = (parentElement) => {
      let childrenOfParent = Array.from(parentElement.children);
      if (childrenOfParent.length > 0) {
            childrenOfParent.forEach(childElement => {
                  let inputType = childElement.type;
                  if (inputType == 'text' || inputType == 'number') {
                        childElement.value = "";
                  } else if (inputType == 'checkbox' || inputType == 'radio') {
                        childElement.checked = false;
                  }
            });
      }
      childrenOfParent.forEach(descendant => {
            MaakAlleControlsLeeg(descendant);
      });
}