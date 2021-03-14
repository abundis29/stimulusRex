import {
  Controller
} from "stimulus"
import StimulusReflex from 'stimulus_reflex';
import * as Turbo from "@hotwired/turbo"


export default class extends Controller {

  static targets = ["result"]; // references resultTarget in scope

  sender(event) {
    event.preventDefault(); // disable form submit
        console.log(`Hello, ${this.text}!`)

    const form = this.element;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(form) // https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
      })
      .then(response => response.text())
      .then(text => this.result = text)
      .catch(error => console.error(error));

  }

  set result(text) {
    console.log(text, "MONONO")

    this.resultTarget.innerHTML = `${text}`
  }
}
