import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Banner = () => {
    const data = useStaticQuery(graphql`
    query {
      cat: file(relativePath: { eq: "cat-bw.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gig: file(relativePath: { eq: "gig.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hongKong: file(relativePath: { eq: "hong-kong.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
    return (
        <div className="banner">
            <div className="container">
                <div className="row">
                    <div className="side-image left">
                    <Img fluid={data.cat.childImageSharp.fluid} />
                    </div>
                    <div className="main-text">Sophie Scott-Maunder</div>
                    <div className="main-image">
                        <Img fluid={data.gig.childImageSharp.fluid} />
                    </div>
                    <div className="side-image right">
                        <Img fluid={data.hongKong.childImageSharp.fluid} />

                    </div>
                </div>
                <div className="scroll">
                    <span>Scroll down</span>
                </div>
            </div>
        </div>
    )
}

export default Banner