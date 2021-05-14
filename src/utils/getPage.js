import trim from 'lodash/trim';
import find from 'lodash/find';
import get from 'lodash/get';

/**
 * Get the page at the provided `urlPath`.
 *
 * @param {Array} pages Array of page objects. All pages must have '__metadata.urlPath' field.
 * @param {string} urlPath The url path to find the page by
 * @return {Object}
 */
export default function getPage(pages, urlPath) {
    urlPath = trim(urlPath, '/');
    return find(pages, page => {
        const pageUrlPath = trim(get(page, '__metadata.urlPath'), '/');
        return urlPath === pageUrlPath;
    });
}
