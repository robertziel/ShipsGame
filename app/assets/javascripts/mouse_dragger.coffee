# target elements with the "draggable" class

dragMoveListener = (event) ->
  target = event.target
  x = (parseFloat(target.getAttribute('data-x')) or 0) + event.dx
  y = (parseFloat(target.getAttribute('data-y')) or 0) + event.dy
  # translate the element
  target.style.left = x + 'px'
  target.style.top = y + 'px'
  # update the posiion attributes
  target.setAttribute 'data-x', x
  target.setAttribute 'data-y', y
  return

interact('#dragable').draggable
  inertia: true
  restrict:
    endOnly: true
    elementRect:
      top: 0
      left: 0
      bottom: 1
      right: 1
  autoScroll: true
  onmove: dragMoveListener
# this is used later in the resizing and gesture demos
window.dragMoveListener = dragMoveListener
