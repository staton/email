import LANGUAGES from './languages';

class Strings {

    get Clear() { return this._clear; }
    get Search() { return this._search; }

    constructor() {
        this.initializeStringsToBrowserLanguage();
    }

    /**
     * Initializes the language based on the user's browser language.
     */
    initializeStringsToBrowserLanguage() {
        
        this.setEnglishStrings();
        //this.setSimplifiedChineseStrings();
    
    }

    /**
     * Sets the language for the app.
     * @param {string} language The language to set (see: resources/languages.js).
     */
    setLanguage(language) {

        switch (language) {
            case LANGUAGES._simplifiedChinese:
                this.setSimplifiedChineseStrings();
                break;
            default:
                this.setEnglishStrings();
                break;
        }

    }

    /**
     * Sets the strings to English.
     */
    setEnglishStrings() {
        this._clear = 'Clear';
        this._search = 'Search';
    }

    /**
     * Sets the strings to Simplified Chinese.
     */
    setSimplifiedChineseStrings() {
        this._clear = '清白';
        this._search = '搜索';
    }

    /**
     * Sets the strings to Traditional Chinese (HK).
     */
    setTraditionalChineseHKStrings() {

    }

    /**
     * Sets the strings to TraditionalChinese (TW).
     */
    setTraditionalChineseTWStrings() {

    }
    
}

const STRINGS = new Strings();

export default STRINGS;