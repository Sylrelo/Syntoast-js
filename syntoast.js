var toast = {

  toast_container: null,
  _timeout: null,
  _dismissed: false,

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
    elem.classList.remove('slideInRight')
    elem.classList.add('slideOutRight')
    setTimeout(() => {
      elem.style.height = '0px'
      elem.style.padding = '0px'
      elem.style.margin = '0px'
    }, 500)
    setTimeout(() => {
      if (elem.parentNode)
        elem.parentNode.removeChild(elem)
    }, 1000)
  },

  timeout: function(elem) {
    var that = this
    setTimeout(function(){
      if (that._dismissed)
        return ;
        that.remove(elem)
    }, this._timeout);
  },

  show: function(options) {
    var that = this

    if (!options.type)
      options.type = 'infos'

    if (options.timeout)
      this._timeout = options.timeout
    else
      this._timeout = 10000;

    if (!options.animation_in)
      options.animation_in = 'slideInRight'
    if (!options.animation_out)
      options.animation_out = 'slideOutRight'


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

    new_toast.innerHTML = new_toast.innerHTML + '';

    new_toast.onclick = function() {
      //that._dismissed = true
      that.remove(this)
    }
    this.toast_container.prepend(new_toast)
    this.timeout(new_toast)
  }
}
