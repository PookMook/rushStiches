/* eslint-disable no-useless-computed-key */
import { styled } from '@welbi/ds';

// Uncommenting the following line fix the not portable issue
// import * as Stitches from '@stitches/react';

export const EditorBox = styled('section', {
  border: '1px solid #ccc',
  borderRadius: '$normal',
  backgroundColor: '$background',
});

export const SlateBox = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$normal',
  padding: '$headerY $buttonX',
  ['& strong']: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 'inherit',
  },
  ['& em']: {
    fontStyle: 'italic',
    fontSize: 'inherit',
  },
  ['& u']: {
    textDecoration: 'underline',
    fontSize: 'inherit',
  },
  ['& s']: {
    textDecoration: 'line-through',
    fontSize: 'inherit',
  },
  ['& ol']: {
    listStyleType: 'decimal',
    marginLeft: '2rem',
  },
  ['& ul']: {
    listStyleType: 'disc',
    marginLeft: '2rem',
  },
  ['& li']: {
    margin: '0.5em 0',
  },
  ['& p']: {
    margin: '0.25rem 0 0.25rem 0',
  },
  ['& h1']: {
    margin: '0.5rem 0 0.75rem 0',
    fontSize: '1.5em',
  },
  ['& h2']: {
    margin: '0.25rem 0 0.5rem 0',
    fontSize: '1.25em',
  },
});

export const Toolbar = styled('nav', {
  borderBottom: '1px solid #ccc',
  padding: '$buttonY',
  display: 'flex',
  gap: '$headerX',
});

export const ButtonCollection = styled('section', {
  display: 'flex',
  gap: '$buttonX',
});
export const ButtonAction = styled('button', {
  backgroundColor: '$background',
  border: '1px solid #ccc',
  minWidth: '29px',
  textAlign: 'center',
  padding: '$buttonY $buttonX',
  borderRadius: '$normal',
  color: '$text',
  cursor: 'pointer',
  fontSize: '$text',
  variants: {
    Active: {
      true: {
        color: '$primary',
        backgroundColor: '$white',
      },
    },
    Format: {
      bold: {
        fontWeight: 'bold',
      },
      italic: {
        fontStyle: 'italic',
      },
      underline: {
        textDecoration: 'underline',
      },
      strike: {
        textDecoration: 'line-through',
      },
      colorValue: {},
      fontSize: {},
      fontFamily: {},
    },
  },
});
