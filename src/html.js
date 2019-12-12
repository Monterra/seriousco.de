import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="en">
      <head>
        <meta name="referrer" content="origin" />
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>seriousco.de</title>
        <meta name="description" content="It's all about software - serious code." />
        <meta property="og:title" content="seriousco.de" />
        <meta property="og:description" content="It's all about software - serious code." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://seriousco.de/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@dominiksumer" />
        <meta name="twitter:title" content="seriousco.de" />
        <meta name="twitter:description" content="It's all about software - serious code." />
        <meta name="keywords" content="seriousco.de, Dominik Sumer, react" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
