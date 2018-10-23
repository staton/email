import Touch from '../models/touch';

class GestureHelper {

    /**
     * Converts a touch start event to a Touch object.
     * @param {object} e The touch start event.
     * @returns {Touch} The Touch object.
     */
    touchStartToTouch(e) {
        let data = e.touches ? e.touches[0] : e;
        return new Touch(Date.now(), data.pageX, data.pageY);
    }

    /**
     * Converts a touch end event to a Touch object.
     * @param {object} e The touch end event.
     * @returns {Touch} The Touch object.
     */
    touchEndToTouch(e) {
        let data = e.changedTouches ? e.changedTouches[0] : e;
        return new Touch(Date.now(), data.pageX, data.pageY);
    }

}

const GESTURE_HELPER = new GestureHelper();

export default GESTURE_HELPER;