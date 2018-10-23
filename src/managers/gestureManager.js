import Touch from '../models/touch';
import _ from 'lodash';

class GestureManager {

    touchEnd;
    touchStart;
    
    /**
     * Checks to see if the user actually swiped left or right.
     * @param {func} swipedLeft The function to call when the user swipes left.
     * @param {func} swipedRight The function to call when the user swipes right.
     */
    checkForSwipe(swipedLeft, swipedRight) {
        const SWIPE_THRESHOLD = 1000;

        if (this.touchStart 
            && this.touchEnd
            && this.touchEnd.Time - this.touchStart.Time <= SWIPE_THRESHOLD
            && Math.abs(this.touchStart.Y - this.touchEnd.Y) < 50) {

            if (this.touchStart.X - this.touchEnd.X >= 60) {
                if (_.isFunction(swipedLeft)) {
                    swipedLeft();
                }
            } else if (this.touchEnd.X - this.touchStart.X >= 60) {
                if (_.isFunction(swipedRight)) {
                    swipedRight();
                }
            }
        }
    }

    /**
     * Converts a touch end event to a Touch object.
     * @param {object} e The touch end event.
     */
    handleTouchEnd(e) {
        let data = e.changedTouches ? e.changedTouches[0] : e;
        this.touchEnd = new Touch(Date.now(), data.pageX, data.pageY);
    }

    /**
     * Converts a touch start event to a Touch object.
     * @param {object} e The touch start event.
     */
    handleTouchStart(e) {
        let data = e.touches ? e.touches[0] : e;
        this.touchStart = new Touch(Date.now(), data.pageX, data.pageY);
    }

}

const GESTURE_MANAGER = new GestureManager();

export default GESTURE_MANAGER;