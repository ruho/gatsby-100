import React from "react"
import {useStaticQuery, graphql} from "gatsby"

export default function IndexPage() {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulCity {
          edges {
            node {
              name
              description
              location {
                lat
                lon
              }
            }
          }
        }
      }
    `
  );

    return (
        <>
            <h1>Test Homepage</h1>
            <ul>
                {
                    data.allContentfulCity.edges.map(({node}) => (
                        <li key={node.name}>
                            <p>{node.name}</p>
                            <p>{node.description}</p>
                            {node.location.lat} - {node.location.lon}
                        </li>
                    ))
                }
            </ul>
        </>
    );
}
