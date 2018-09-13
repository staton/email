class Languages {

    get English() { return this._english; }
    get SimplifiedChinese() { return this._simplifiedChinese; }
    get TraditionalChineseHK() { return this._traditionalChineseHK; }
    get TraditionalChineseTW() { return this._traditionalChineseTW; }
    
    constructor() {
        this._english = 'EN';
        this._simplifiedChinese = 'CN';
        this._traditionalChineseHK = 'HK'
        this._traditionalChineseTW = 'TW';
    }
}

const LANGUAGES = new Languages();

export default LANGUAGES;