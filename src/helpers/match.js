/**
 * Verify if an event checks all the boxes
 * of an expectation generated by `parse_event.js`
 * @param {Object} expectation
 * @param {Event} DOMEvent
 * @returns {boolean} whether the event matches
 */
module.exports = function(expectation, event) {
    for (var p in expectation) {
        if (event[p] != expectation[p]) { return false; }
    }
    return true;
};