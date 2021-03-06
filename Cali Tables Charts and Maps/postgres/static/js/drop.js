class Drop {
    constructor(xPosition, yPosition, dropSpeed, dropWidth, dropHeight) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.dropSpeed = dropSpeed;
        this.dropWidth = dropWidth;
        this.dropHeight = dropHeight;
        this.element;
    }

    show() {
        this.element = document.createElement("div");
        this.element.className += "rainDrop";
        this.element.style.top = this.yPosition + "px";
        this.element.style.left = this.xPosition + "px";
        this.element.style.width = this.dropWidth + "px";
        this.element.style.height = this.dropHeight + "1px";

        let el = document.getElementById("drops-section");
        el.appendChild(this.element);
    }

    fall() {
        const makeItRain = () => {
            this.yPosition = this.yPosition + this.dropSpeed;
            this.element.style.top = this.yPosition + "px";

            if (this.yPosition < window.innerHeight) {
                requestAnimationFrame(makeItRain);
            } else {
                this.yPosition = -10;
                requestAnimationFrame(makeItRain);
            }

        }

        requestAnimationFrame(makeItRain);
    }
}