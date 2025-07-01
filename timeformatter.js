/**
 * timeFormatter - Utility for Formatting and Handling Time Values
 * Author: ArenaDelMobile
 * License: Custom
 */

const timeFormatter = {
    /**
     * Converts seconds to HH:MM:SS format.
     * @param {number} totalSeconds - Total seconds to convert.
     * @returns {string}
     */
    toHHMMSS(totalSeconds) {
        if (typeof totalSeconds !== 'number' || totalSeconds < 0) {
            console.error('[timeFormatter] Invalid seconds input.');
            return '00:00:00';
        }
        const hours = Math.floor(totalSeconds / 3600).toString().padStart(2, '0');
        const minutes = Math.floor((totalSeconds % 3600) / 60).toString().padStart(2, '0');
        const seconds = Math.floor(totalSeconds % 60).toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    },

    /**
     * Converts milliseconds to MM:SS format.
     * @param {number} milliseconds - Total milliseconds.
     * @returns {string}
     */
    toMMSS(milliseconds) {
        if (typeof milliseconds !== 'number' || milliseconds < 0) {
            console.error('[timeFormatter] Invalid milliseconds input.');
            return '00:00';
        }
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
        const seconds = (totalSeconds % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }
};

// Example usage:
// console.log(timeFormatter.toHHMMSS(3661)); // '01:01:01'
// console.log(timeFormatter.toMMSS(125000)); // '02:05'

module.exports = timeFormatter;
