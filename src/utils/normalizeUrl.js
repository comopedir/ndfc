const normalizeUrl = href =>
  href && !href.match(/^http(s)?:\/\//) ? `http://${href}` : href

export default normalizeUrl
