var toast = {

  toast_container: null,
  _timeout: null,

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

  remove: function(elem) {
    elem.parentNode.removeChild(elem)
  },

  timeout: function(elem) {
    var that = this
    setTimeout(function(){
      elem.classList.remove('slideInRight')
      elem.classList.add('slideOutRight')
      setTimeout(() => {
        that.remove(elem)
      }, 1000)
    }, this._timeout);
  },

  show: function(options) {
    if (options.type) {

    }
    else
      options.type = 'infos'


    if (options.timeout)
      this._timeout = options.timeout
    else
      this._timeout = 10000;
    this.init()


    new_toast = document.createElement('div')
    new_toast.classList.add('toast')

    new_toast_text = document.createElement('div')
    new_toast_text.classList.add('toast-txt')

    new_toast_icon = document.createElement('div')
    new_toast_icon.classList.add('toast-symbol')
    new_toast_icon.classList.add('toast-' + options.type)

    new_toast_text.innerHTML = options.text
    new_toast.append(new_toast_text)
    new_toast.prepend(new_toast_icon)

    new_toast.classList.add('slideInRight')
    this.toast_container.prepend(new_toast)

    this.timeout(new_toast)
    console.log('e')
  }
}
