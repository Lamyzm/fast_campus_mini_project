function getCookie(name) {
  return document.cookie.split(';')
    .map(cookie => cookie.trim())
    .filter(cookie => cookie.startsWith(name + '='))
    .map(cookie => decodeURIComponent(cookie.substring(name.length + 1)))
    .find(cookie => true) || null;
}
export default getCookie
