// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width = 80, height = 60) {
  this.width = width;
  this.height = height;
}
Size.prototype.resize = function(newWidth, newHeight) {
  this.width = newWidth;
  this.height =newHeight;
}
export function Position(x = 0, y = 0) {
  this.x = x;
  this.y = y;
}
Position.prototype.move = function(newX, newY) {
  this.x = newX;
  this.y = newY;
}
export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600);
    this.size = new Size();
    this.position = new Position();
  }
  resize(newSize) {
    let requestedWidth = newSize.width;
    let requestedHeight = newSize.height;
    if (requestedWidth < 1) {
      requestedWidth = 1
    }
    if (requestedHeight < 1) {
      requestedHeight = 1
    }
    const maxWidth = this.screenSize.width - this.position.x;
    const maxHeight = this.screenSize.height - this.position.y;
    if (requestedWidth > maxWidth) {
      requestedWidth = maxWidth
    }
    if (requestedHeight > maxHeight) {
      requestedHeight = maxHeight
    }
    this.size.width = requestedWidth;
    this.size.height = requestedHeight
  }
  move(newPosition){
    let requestedX = newPosition.x;
    let requestedY = newPosition.y;
    if (requestedX < 0) {
      requestedX = 0
    }
    if (requestedY < 0) {
      requestedY = 0
    }
    const maxX = this.screenSize.width - this.size.width
    if (requestedX > maxX) {
      requestedX = maxX
    }
    const maxY = this.screenSize.height - this.size.height
    if (requestedY > maxY) {
      requestedY = maxY
    }
    this.position.x = requestedX;
    this.position.y = requestedY
  }
}
export function changeWindow(programWindow) {
  programWindow.resize(new Size(400, 300))
  programWindow.move(new Position(100, 150))
  return programWindow
}