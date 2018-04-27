exports.calcScroll = function (containers, diff) {
  containers.style.overflow = 'auto'
  containers.style.height = window.innerHeight - containers.getBoundingClientRect().top + document.documentElement.scrollTop - diff + 'px'
}
