var toast = {

  toast_container: null,

  init: function() {
    e_container = document.querySelector('.syntoast-container')
    if (typeof(e_container) == 'undefined' || e_container == null) {
      new_elem = document.createElement('div')
      new_elem.classList.add('syntoast-container')
      document.body.prepend(new_elem)
      this.toast_container = new_elem
    }
    else
      this.toast_container = e_container
  },

  show: function(options) {
    if (options.type) {

    }
    else
      options.type = 'infos'

    this.init()


    new_toast = document.createElement('div')

    new_toast_text = document.createElement('div')

    new_toast_icon = document.createElement('div')
    new_toast_icon.classList.add('toast-symbol')
    new_toast_icon.classList.add('toast-' + options.type)

    new_toast_text.innerHTML = options.text
    new_toast.append(new_toast_text)
    new_toast.prepend(new_toast_icon)
    this.toast_container.prepend(new_toast)

    console.log('e')
  }
}
