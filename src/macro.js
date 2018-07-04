const { createMacro } = require('babel-plugin-macros')
const transform = require('./transform')
const parseMedia = require('./parseMedia')

function cssToRNMacro({
  references: { default: defaultRefs, parseMedia: mediaRefs = [] },
  state,
  babel: { types: t },
}) {
  // Basic css to reast-native stylesheets
  defaultRefs.forEach(referencePath =>
    transform(referencePath.parentPath, state, t),
  )

  // react-native-css-media-query-processor for media
  mediaRefs.forEach(referencePath => parseMedia(referencePath, state, t))
}

module.exports = createMacro(cssToRNMacro);