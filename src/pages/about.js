import React from 'react'
import Helmet from 'react-helmet'
const pageName = 'About Me'

export default ({ data }) =>
  <div className='content'>
    <Helmet title={`${pageName} | ${data.site.siteMetadata.title}`} />
    <h1>{pageName}</h1>
    <p>Hi. I'm Mike, and I love what I do. </p>
    <p>I work as a senior front-end web developer at <a href="https://www.lullabot.com/" target="_blank">Lullabot</a>, where I create  kick-ass websites. I specialize in <a href="https://www.drupal.org/" target="_blank">Drupal</a> front-end development, but also love and work with many other web technologies.</p>
    <p>I'm very involved with local web-dev communities. I'm the lead organizer for the <a href="http://www.meetup.com/Gainesville-Front-End-Dev-Meetup/" target="_blank">Gainesville Front-end Developers Meetup</a>, and I help organize the annual <a href="https://www.fldrupal.camp/" target="_blank">Florida DrupalCamp conference</a>.  I try to attend (and present at) as many  conferences as possible.</p>
    <p>Outside of computers, I have a deep appreciation for nature. At any given  point in time,  I'd rather be hiking, fishing, or hammocking. I also love good food, and  a good beer.</p>
    <p>I also have an awesome telescope (a Celestron orange tube C8) from which I  look at the clouds of Jupiter and the rings of Saturn. I enjoy hanging with my golden retriever mix, and I am also the ultimate tailgating enthusiast and Florida Gator fanatic.</p>
  </div>

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`