import React from "react"
import carouselStyles from "./carouselStyles.module.css"
import { useStaticQuery, graphql } from "gatsby"
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Img from "gatsby-image"
import 'pure-react-carousel/dist/react-carousel.es.css';


const Carousel = () => {
    const data = useStaticQuery(graphql`
    query {
        allFile(filter: {extension: {regex: "/(jpg)|(png)/"}, relativeDirectory: {eq: "Carousel1"}}) {
          edges {
            node {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                    ...GatsbyImageSharpFluid
                    originalName
                }
              }
            }
          }
        }
      }
      
    `);

    var key = 0;
    var images = data.allFile.edges.map((el) => {
        key++;
        return (
        <Slide className={carouselStyles.slide}>
            <div className={carouselStyles.imageBlock} style={{maxWidth: `500px`, maxHeight: `500px`}}>
                <Img key={`slider-image-${key}`} fluid={el.node.childImageSharp.fluid} />
            </div>
        </Slide>);
    });

    console.log(data);
    return(
        <CarouselProvider
            className={carouselStyles.provider}
            naturalSlideWidth={500}
            naturalSlideHeight={500}
            totalSlides={4}
            visibleSlides={1}
        >
            <Slider className={carouselStyles.slider}>
            {[...images]}
            </Slider>

            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>);
}

export default Carousel;