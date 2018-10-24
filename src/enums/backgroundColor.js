class BackgroundColor {

    get Gray() { return 'rgb(189, 189, 189)'; }
    get Red() { return 'rgb(248, 111, 77)'; }
    get Orange() { return 'rgb(248, 182, 77)'; }
    get Green() { return 'rgb(84, 223, 79)'; }
    get Turquoise() { return 'rgb(35, 200, 250)'; }
    get Blue() { return 'rgb(35, 146, 250)'; }
    get Purple() { return 'rgb(107, 61, 216)'; }
    get Pink() { return 'rgb(216, 61, 133)'; }

    /**
     * Gets a random color.
     */
    getRandomEmailColor() {
        let num = Math.floor((Math.random() * 7) + 1);

        switch (num) {
            case 1:
                return this.Red;
            case 2:
                return this.Orange;
            case 3:
                return this.Green;
            case 4:
                return this.Turquoise;
            case 5:
                return this.Blue;
            case 6:
                return this.Purple;
            case 7:
                return this.Pink
            default:
                return this.Gray
        }
    }

}

const BackgroundColors = new BackgroundColor();

export default BackgroundColors;