import Touch from '../models/touch';
import _ from 'lodash';

const SWIPE_THRESHOLD = 800;
const LONG_PRESS_THRESHOLD = 1000;

class GestureManager {

    currentTimerId;
    touchEnd;
    touchStart;
    
    /**
     * Checks to see if the user actually swiped left or right.
     * @param {func} onSwipedLeft The function to call when the user swipes left.
     * @param {func} onSwipedRight The function to call when the user swipes right.
     */
    checkForSwipe(onSwipedLeft, onSwipedRight) {
        if (this.touchStart 
            && this.touchEnd
            && this.touchStart.Id === this.touchEnd.Id
            && this.touchEnd.Time - this.touchStart.Time <= SWIPE_THRESHOLD
            && Math.abs(this.touchStart.Y - this.touchEnd.Y) < 50) {

            if (this.touchStart.X - this.touchEnd.X >= 60) {
                if (_.isFunction(onSwipedLeft)) {
                    onSwipedLeft();
                }
            } else if (this.touchEnd.X - this.touchStart.X >= 60) {
                if (_.isFunction(onSwipedRight)) {
                    onSwipedRight();
                }
            }
        }
    }

    /**
     * Converts a touch end event to a Touch object.
     * @param {object} e The touch end event.
     * @returns {long} The touch identifier.
     */
    handleTouchEnded(e) {
        let data = e.changedTouches ? e.changedTouches[0] : e;
        if (data) {
            clearTimeout(this.currentTimerId);
            this.touchEnd = new Touch(data.identifier, Date.now(), data.pageX, data.pageY);
            return data.identifier;
        }
        return undefined;
    }

    /**
     * Called when a touch moves.
     * @param {object} e The touch move event.
     * @returns {long} The touch identifier.
     */
    handleTouchMoved(e) {
        if (this.touchStart && !this.touchStart.DidMove) {
            let data = e.changedTouches ? e.changedTouches[0] : e;
            if (data && data.identifier === this.touchStart.Id) {
                this.touchStart.DidMove = true;
                return data.identifier;
            }
        }
        return undefined;
    }

    /**
     * Converts a touch start event to a Touch object.
     * @param {object} e The touch start event.
     * @returns {long} The touch identifier.
     */
    handleTouchStarted(e) {
        let data = e.touches ? e.touches[0] : e;
        if (data) {
            this.touchStart = new Touch(data.identifier, Date.now(), data.pageX, data.pageY);
            return data.identifier;
        }
        return undefined;
    }

    /**
     * Starts the long press timer.
     * @param {long} id The identifier for this touch to start the timeout for.
     * @param {func} onLongPress The function that will be called upon a successful long press.
     */
    startLongPressTimer(id, onLongPress) {
        this.currentTimerId = setTimeout(() => {
            if (this.touchStart 
                && !this.touchStart.DidMove
                && id === this.touchStart.Id
                && _.isFunction(onLongPress)) {
                onLongPress();
            }
        }, LONG_PRESS_THRESHOLD);
    }

}

const GESTURE_MANAGER = new GestureManager();

export default GESTURE_MANAGER;