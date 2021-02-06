import React from 'react'
import { ExternalLink } from 'react-external-link';

const link = {
    position: "absolute",
    bottom: "75px"

}

const Nps = () => {
    return (
        <div>
            <ExternalLink
            href='https://www.nps.gov/index.htm'
            style = {link}
            >National Park Service Link
            </ExternalLink>
        </div>
    )
}

export default Nps;
