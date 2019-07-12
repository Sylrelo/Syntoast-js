var toast = {

  toast_container: null,
  _timeout: null,
  _dismissed: false,
  options: null,

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
    elem.classList.remove(this.options.animation_in)
    elem.classList.add(this.options.animation_out)
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
      options.animation_out = 'bounceOut'

    this.options = options;

    this.init()

    new_toast = document.createElement('div')
    new_toast.classList.add('toast')

    if (options.title) {
      new_toast_title = document.createElement('div')
      new_toast_title.classList.add('toast-title')
      new_toast_title.innerHTML = options.title
      new_toast.append(new_toast_title)
    }

    new_toast_text = document.createElement('div')
    new_toast_text.classList.add('toast-txt')
    new_toast_icon = document.createElement('div')
    new_toast_icon.classList.add('toast-symbol')
    new_toast_icon.classList.add('toast-' + options.type)
    new_toast_text.innerHTML = options.text
    new_toast_progress = document.createElement('div')
    new_toast_progress.classList.add('toast-progress')
    new_toast_progress.style.animationDuration = this._timeout + 'ms'
    new_toast.append(new_toast_text)
    new_toast.prepend(new_toast_icon)
    new_toast.append(new_toast_progress)
    new_toast.classList.add(options.animation_in)
    new_toast.onclick = function() {
      that.remove(this)
      if (options.callback)
        callback()
    }
    this.toast_container.prepend(new_toast)
    this.timeout(new_toast)
  }
}
