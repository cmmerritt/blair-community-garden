import * as React from 'react'
import { pageStyles, headingStyles, headingAccentStyles, paragraphStyles, codeStyles, listStyles, listItemStyles, linkStyle, docLinkStyle, descriptionStyle, docLink, badgeStyle } from '../styles/index-styles.js';

const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Blair Community Garden</title>
      <h1 style={headingStyles}>Welcome to Blair Community Garden!</h1>
      <p style={paragraphStyles}>A site for Blair gardeners. More coming soon!</p>
    </main>
  )
}

export default IndexPage
