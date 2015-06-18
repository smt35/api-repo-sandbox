/**
 * Create a copy of an object.
 * @param {number} [depth=-1] The number of levels of depth to copy. Use -1 to do a full depth copy.
 * @param {object} source The object to copy.
 * @returns {object} The copied object.
 */
exports.copy = function(depth, source) {

    //make sure that enough arguments were passed in
    if (arguments.length < 1) throw new Error('core.object.copy() requires at least one parameter');
    if (arguments.length < 2 && !isNaN(depth)) throw new Error('core.object.copy() requires two parameters when the first parameter is not an object.');

    if (arguments.length === 1) {
        source = depth;
        depth = -1;
    }
    
    return exports.extend(depth, {}, source);
};

/**
 * Compare two objects to determine if they are equal. The objects are only considered equal
 * if all properties and sub properties of the object are equal in value.
 * @param {*} first The first object to compare.
 * @param {*} second The second object to compare.
 * @returns {boolean} of true if equal, otherwise false.
 */
exports.equal = function(first, second) {
    var i, same;

    if (first === second) return true;

    if (Array.isArray(first) && Array.isArray(second)) {
        if (first.length !== second.length) return false;
        for (i = 0; i < first.length; i++) {
            same = exports.equal(first[i], second[i]);
            if (!same) return false;
        }
        return true;

    } else if (typeof first === 'object' && typeof second === 'object' && !Array.isArray(first) && !Array.isArray(second)) {
        if (Object.keys(first).length !== Object.keys(second).length) return false;
        for (i in first) {
            same = exports.equal(first[i], second[i]);
            if (!same) return false;
        }
        return true

    }

    return false;
};

/**
 * Extend an object into another object. This will essentially merge two or more objects into the first.
 * @param {name} [depth=-1] The number of levels of depth to extend. Use -1 to do a full depth copy.
 * @param {object} target The object to populate.
 * @param {object} source The object to extend from.
 * @returns {object} The populated target object.
 */
exports.extend = function(depth, target, source) {
    var sources;

    //make sure that enough arguments were passed in
    if (arguments.length < 1) throw new Error('core.object.extend() requires at least two parameters.');
    if (arguments.length < 2 && !isNaN(depth)) throw new Error('core.object.extend() requires at least three parameters when the first parameter is not an object.');

    //get target and sources
    if (!isNaN(depth)) {
        depth = parseInt(depth);
        target = arguments[1];
        sources = Array.prototype.slice.call(arguments, 2);
    } else {
        depth = 0;
        target = arguments[0];
        sources = Array.prototype.slice.call(arguments, 1);
    }

    //copy from sources to target
    sources.forEach(function(source) {
        extend(target, source, depth);
    });

    return target;
};

function extend(target, source, depth) {
    var key, o;

    //copy over data
    for (key in source) {
        if (source.hasOwnProperty(key)) {
            o = source[key];
            if (depth === 0) {
                target[key] = o;
            } else if (Array.isArray(o)) {
                target[key] = extendArray(o, depth - 1);
            } else if (o && typeof o === 'object') {
                target[key] = extend({}, o, depth - 1);
            } else {
                target[key] = o;
            }
        }
    }

    return target;
}

function extendArray(ar, depth) {
    var result, i, o;
    result = ar.slice(0);
    if (depth !== 0) {
        for (i = 0; i < result.length; i++) {
            o = result[i];
            if (Array.isArray(o)) {
                result[i] = extendArray(o, depth - 1);
            } else if (o && typeof o === 'object') {
                result[i] = extend({}, o, depth - 1);
            }
        }
    }
    return result;
}