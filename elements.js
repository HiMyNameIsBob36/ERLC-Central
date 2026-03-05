console.log("Loading custom header & footer.")

//OOP - Inheritence
class MyHeader extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
<div class="navbar">
<div class="logo">ERLC<span>X</span></div>

<div class="search"><input placeholder="Search creations, users, groups..."></div>

<div class="nav-right">
<button class="create-btn">+ Create New</button>
<div class="profile">HeyItBob36</div>
</div>
</div>`
  }
}


class MyFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `<footer>`
  }
}

customElements.define('my-header', MyHeader)
customElements.define('my-footer', MyFooter)
