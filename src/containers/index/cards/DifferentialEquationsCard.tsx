import { graphql, Link, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import React from "react";

import { Card } from "../../../components/card/Card";

export const DifferentialEquationsCard: React.FC = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "images/armand-khoury-4cBVro7SHLs-unsplash.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `);

  return (
    <Link to="project/differential-equations">
      <Card
        title="Phase Diagram Visualiser"
        subtitle="Interactive differential equation tool"
        cover={<Img fluid={image.childImageSharp.fluid} className="w-full h-full" />}
        tags={["WebGL", "Interactive", "Math"]}
      >
        A pretty awesome way to visualise differential equations.
      </Card>
    </Link>
  );
};