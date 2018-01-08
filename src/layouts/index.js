import React from 'react'
import { css, injectGlobal } from 'emotion'
import Link from 'gatsby-link'
import Bio from '../components/Bio'
import Nav from '../components/Nav'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    return (
      <div className={layoutStyles}>
        <header className={headerStyles}>
          <Bio />
          <Nav />
          <section className={contactStyles}>
            <p>Email me at <a href="mailto:mike@herchel.com" target="_blank">mike@herchel.com</a></p>
            <p>Follow me at <a href="http://twitter.com/mikeherchel" target="_blank">@mikeherchel</a></p>
            <p>I'm on github at <a href="https://github.com/mherchel" target="_blank">github.com/mherchel</a></p>
            <p>Facebook profile is <a href="http://www.facebook.com/mherchel" target="_blank">facebook.com/mherchel</a></p>
            <p>Find me on D.O at <a href="http://drupal.org/user/118428" target="_blank">drupal.org/user/118428</a></p>
            <p>I don't use LinkedIn <a href="http://www.linkedin.com/in/mherchel" target="_blank">linkedin.com/in/mherchel</a></p>
            </section>
        </header>
        <main role="main">
          {children()}
        </main>
      </div>
    )
  }
}

injectGlobal`
  * {
    box-sizing: border-box;

    &:before,
    &:after {
      box-sizing: inherit;
    }
  }

  :root {
    --primary: deepskyblue;
    --gray: #333;
    --white: white;
  }

  body {
    margin: 10px;
    background: var(--primary);
    line-height: 1.7;
    overflow: scroll;
    font-family: helvetica, arial, sans-serif;
  }

  h1, h2, h3 {
    line-height: 1.4;
    color: var(--gray);
    margin: 1em 0 0.5em;

    &:first-child {
      margin-top: 0;
    }
  }

  .content {
    position: relative;
    min-height: calc(100vh - 20px);
    padding: 40px;
    background: var(--white);
    font-family: georgia;
    color: #666;
    font-size: 22px;
    line-height: 2;

    &:before {
      content: "";
      position: absolute;
      right: 100%;
      top: 70px;
      transform: translatey(-50%);
      height: 0;
      width: 0;
      border-top: solid transparent 20px;
      border-right: solid var(--white) 20px;
      border-bottom: solid transparent 20px;
    }

    em {
      color: #777;
    }

    a {
      color: var(--primary);
      filter: brightness(0.8);
    }
  }
`

const layoutStyles = css`
  display: flex;
  width: 94%;
  max-width: 1200px;
  margin: 0 auto;

  header {
    flex-basis: 320px;
    flex-shrink: 0;
    margin-right: 60px;
  }

  main {
    flex-grow: 1;
    width: calc(100% - 320px);
  }
`

const headerStyles = css`
  text-align: right;
  color: white;
`

const contactStyles = css`
  color: rgba(255, 255, 255, 0.8);

  a {
    color: white;
  }
`

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
