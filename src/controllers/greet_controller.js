import {
  Controller
} from "stimulus"
import StimulusReflex from 'stimulus_reflex';
import * as Turbo from "@hotwired/turbo"


export default class extends Controller {

  // connect() {
  //   StimulusReflex.register(this)
  // }

  static targets = ["result"]; // references resultTarget in scope

  greeting(event) {

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //   document.documentElement.classList.add('dark')
    // } else {
    //   document.documentElement.classList.remove('dark')
    // }
    
    // // Whenever the user explicitly chooses light mode
    // localStorage.theme = 'light'
    
    // // Whenever the user explicitly chooses dark mode
    // localStorage.theme = 'dark'
    
    // // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')

    event.preventDefault(); // disable form submit

    const form = this.element;
    console.log('...........................................')

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
    this.resultTarget.innerHTML = `<p>${text}</p>`
  }
}
