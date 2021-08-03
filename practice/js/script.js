class Rectangle {
  // концепция
  constructor(height, width) {
    this.height = height;
    this.width = width; // если мы будем обращаться к this, мы будем обращаться к новому созданому обьекту
  }
  calckArea() {
    return this.height * this.width;
  }
}

class ColoredRectangleWithText extends Rectangle {
  constructor(height, width, text, bgColor) {
    super(height, width); // кпирует свойства у родителя, и нужные нужно передать
    this.text = text;
    this.bgColor = bgColor;
  }

  showMyProps() {
    console.log(`Text: ${this.text}, цвет: ${this.bgColor}`);
  }
}

const div = new ColoredRectangleWithText(25, 10, "Hello", "red");
div.showMyProps();
console.log(div.calckArea());

const square = new Rectangle(10, 10); //экземпляр
const long = new Rectangle(20, 100);
console.log(square.calckArea());
console.log(long.calckArea());
