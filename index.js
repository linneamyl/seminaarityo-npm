function shout(str) {
    return str.toUpperCase()
};

function whisper(str) {
    return str.toLowerCase()
};

function trimTheString(str) {
    return str.trim()
}

function wrapWithLove(str) {
    return `❤️${str}❤️`
}

module.exports = { shout, whisper, trimTheString, wrapWithLove };
