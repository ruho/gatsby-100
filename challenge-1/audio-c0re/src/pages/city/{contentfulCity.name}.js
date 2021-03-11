import React from "react"
import {graphql} from "gatsby"

export const query = graphql`
	query ($id: String = "") {
		contentfulCity(id: {eq:$id}) {
			name
			description
			location {
				lat
				lon
			}
		}
	}
`

export default function city({data}) {
	return (
		<div>
			<p>{data.contentfulCity.name}</p>
			<p>{data.contentfulCity.description}</p>
			<p>{data.contentfulCity.location.lat}</p>
			<p>{data.contentfulCity.location.lon}</p>
		</div>
	)
}
