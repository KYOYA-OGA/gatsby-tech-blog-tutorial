import React from 'react';
import { PortableText } from '@portabletext/react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import theme from 'react-syntax-highlighter/dist/cjs/styles/prism/vs-dark';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { getImageDimensions } from '@sanity/asset-utils';
import ParagraphText from './ParagraphText';
import { Title } from './Title';
import sanityConfig from '../../../sanity-config';
import { getSanityImageData } from '../../utils/getSanityImageData';

const myPortableTextComponents = {
  block: {
    normal: ({ children }) => <ParagraphText>{children}</ParagraphText>,
    h1: ({ children }) => <Title>{children}</Title>,
  },
  types: {
    customCode: ({ value }) => (
      <SyntaxHighlighter
        style={theme}
        className="bodyCode"
        language={value.code.language}
      >
        {String(value.code.code).replace(/\n$/, '')}
        {/* {value.code.code} */}
      </SyntaxHighlighter>
    ),
  },
  customImage: ({ value }) => {
    const imageData = getImage(value.asset, sanityConfig).asset;
    const { width, height } = getImageDimensions(value);
    const image = {
      url: imageData.url,
      height,
      width,
    };
    const gatsbyImageData = getSanityImageData({
      image,
      layout: 'constrained',
    });
    return (
      <GatsbyImage
        image={gatsbyImageData}
        alt={value.alt}
        className="bodyImage"
      />
    );
  },
};

function MyPortableText({ value }) {
  return <PortableText value={value} components={myPortableTextComponents} />;
}

export default MyPortableText;
