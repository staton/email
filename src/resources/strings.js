import LANGUAGES from './languages';

class Strings {

    get Clear() { return this._clear; }
    get DeletedMenu() { return this._deletedMenu; }
    get DraftsMenu() { return this._draftsMenu; }
    get InboxMenu() { return this._inboxMenu; }
    get Search() { return this._search; }
    get SearchPlaceholder() { return this._searchPlaceholder; }
    get SentMenu() { return this._sentMenu; }
    get SpamMenu() { return this._spamMenu; }

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
        this._deletedMenu = 'Deleted';
        this._draftsMenu = 'Drafts';
        this._inboxMenu = 'Inbox';
        this._search = 'Search';
        this._searchPlaceholder = 'Search...';
        this._sentMenu = 'Sent';
        this._spamMenu = 'Spam';
    }

    /**
     * Sets the strings to Simplified Chinese.
     */
    setSimplifiedChineseStrings() {
        this._clear = '清白';
        this._deletedMenu = 'Deleted';
        this._draftsMenu = 'Drafts';
        this._inboxMenu = 'Inbox';
        this._search = '搜索';
        this._searchPlaceholder = '搜索...';
        this._sentMenu = 'Sent';
        this._spamMenu = 'Spam';
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