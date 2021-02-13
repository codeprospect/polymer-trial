/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

// import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { LitElement, html } from "lit-element";
import './shared-styles.js';

// class MyView1 extends PolymerElement {
//   static get template() {
//     return html`
//       <style include="shared-styles">
//         :host {
//           display: block;

//           padding: 10px;
//         }
//       </style>

//       <div class="card">
//         <div class="circle">1</div>
//         <h1>View One</h1>
//         <p>Ut labores minimum atomorum pro. Laudem tibique ut has.</p>
//         <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.Cu mei vide viris gloriatur, at populo eripuit sit.</p>
//       </div>
//     `;
//   }
// }


export class MyView1 extends LitElement {
  static get properties() {
    return {
      name: {type: String},
      email: {type: String},
      phoneNumber: {type: String},
      count: {type: Number}
    }
  }

  constructor() {
    super();
    this.name = '';
    this.email = '';
    this.phoneNumber = '';
    this.count = 0;

    this._onClick = () => {
      this.count++;
    };

  }
  
  render() {
    return html`
      <style>
        .form {
          box-sizing: border-box;
          background: white;
          width: 500px;
          display: flex;
          flex-direction: column;
          margin: 10px;
          padding: 5px;
        }
        .form input {
          margin: 10px;
        }
        .form button {
          border: none;
          background: #fed000;
          padding: 0.5rem 0;
          border-radius: 50px;
          font-weight: bolder;
          margin-bottom: 1rem;
          cursor: pointer;
        }
      </style>
      <form action="" class="form">
        <label for="name">Name</label>
        <input type="text" name="" id="name" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" />
        <label for="phoneNumber">Phone Number</label>
        <input type="text" name="" id="phoneNumber" />
        <button @click="${this.submitEvent}" type="submit">Submit</button>
      </form>
  `;  
  }

  
  submitEvent(e) {
    e.preventDefault();

  }
}


window.customElements.define('my-view1', MyView1);