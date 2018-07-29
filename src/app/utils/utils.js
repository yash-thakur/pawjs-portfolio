import _ from "lodash";
/**
 * Check if current script is running in browser or not
 * @returns {boolean}
 */
export const isBrowser = () => {
  return typeof window !== "undefined" && typeof document !== "undefined";
};


let loadPromises = {};

/**
 * Load javascript file by path
 * @param path
 * @param attributes
 * @returns {Promise}
 */
export const loadScript = (path, attributes = {}) => {
  const pathHash = generateStringHash(path, "JS").toString();
  if (loadPromises[pathHash]) return loadPromises[pathHash];
  
  loadPromises[pathHash] = new Promise((resolve, reject) => {
    if (!isBrowser()) {
      // If not a browser then do not allow loading of
      // css file, return with success->false
      reject("Cannot call from server. Function can be executed only from browser");
      return;
    }
    
    
    // Do not load script if already loaded
    const previousLink = document.getElementById(pathHash);
    if (previousLink) {
      resolve();
      return previousLink;
    }
    
    let s, r, t;
    r = false;
    s = document.createElement("script");
    s.type = "text/javascript";
    s.id = pathHash;
    s.src = path;
    s.defer = true;
    s.onload = s.onreadystatechange = function () {
      if (!r && (!this.readyState || this.readyState === "complete")) {
        r = true;
        resolve();
      }
    };
    // Add custom attribute added by user
    for(let attr in attributes) {
      s[attr] = attributes[attr];
    }
    t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(s, t);
    return s;
  });
  return loadPromises[pathHash];
};

/**
 * Simple numeric hash of a string, used for non-secure usage only
 * @param str
 * @param namespace
 * @returns {string}
 */
export const generateStringHash = (str, namespace) => {
  namespace = namespace || "";
  let hash = 0, i, chr;
  if (str.length === 0) return `${namespace}__${hash}`;
  str = `${namespace}_${str}`;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return `${namespace}__${hash}`;
};


/**
 * Smooth scroll of window
 */
// Get y position of window
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop) {
    return document.documentElement.scrollTop;
  }
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}

// Get y position of element
function elmYPosition(element) {
  const elm = element;
  let y = elm.offsetTop;
  let node = elm;
  while (node.offsetParent && node.offsetParent !== document.body) {
    node = node.offsetParent;
    y += node.offsetTop;
  } return y;
}

/**
 * utils
 * @param eID
 * @param padding
 * @param speedMultiplier
 */
export const smoothScroll = (eID, padding = 0, speedMultiplier = 1) => {
  const startY = currentYPosition();
  let stopY = 0;
  if (eID) {
    stopY = elmYPosition(eID) - padding;
  } else {
    stopY = stopY + padding;
  }
  const distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
    scrollTo(0, stopY); return;
  }
  let speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  
  speed /= speedMultiplier;
  const step = Math.round(distance / 25);
  let leapY = stopY > startY ? startY + step : startY - step;
  let timer = 0;
  if (stopY > startY) {
    for (let i = startY; i < stopY; i += step) {
      //eslint-disable-next-line
      setTimeout(`window.scrollTo(0, ${leapY})`, timer * speed);
      leapY += step; if (leapY > stopY) leapY = stopY; timer++;
    } return;
  }
  for (let i = startY; i > stopY; i -= step) {
    //eslint-disable-next-line
    setTimeout(`window.scrollTo(0, ${leapY})`, timer * speed);
    leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
};

/**
 *
 */
export const getHostName = () => applicationHostName;

/**
 *
 */
export const getWindowHost = () => {
  let host = getHostName();
  if (typeof window !== "undefined" && _.get(window, "location.hostname", "")) {
    if (_.isEmpty(host)) {
      host = `${window.location.protocol}//${window.location.hostname}`;
      setHostName(host);
    }
  }
  return host;
};

/**
 *
 * @type {string}
 */
let applicationHostName = "";
export const setHostName = (hostName = "") => {
  applicationHostName = hostName;
};


export const slugify = (string, separator = " +-", ignore = "^+-\\w\\d\\s") => {
  const ignoreReg = new RegExp(`[${ignore}]`, "g");
  const separatorReg = new RegExp(`[${separator}]`, "g");
  return string.replace(ignoreReg, "").replace(separatorReg, "-").trim().toLowerCase();
};



