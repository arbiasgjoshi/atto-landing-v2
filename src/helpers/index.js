import React from 'react';
import parse, { domToReact } from 'html-react-parser';

export const isBrowser = () => typeof window !== 'undefined';

export const placeholders = [
  { id: 0 },
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
];

export const apiUrl = 'https://staging.attotime.com';

export const deleteInvitation = (data) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email: data.email }),
  };
  fetch(`${apiUrl}/delete-invite`, requestOptions);
};

export const parseHTML = (bodyText) => {
  const parsedContent = parse(bodyText, {
    trim: true,
  });
  return parsedContent;
};

export const parseTitleList = (bodyText) => {
  const parsedContent = parse(bodyText);
};

export const paginationList = (currentPage, pageCount) => {
  const delta = 2;
  const left = currentPage - delta;
  const right = currentPage + delta + 1;
  let result = [];

  result = Array.from({ length: pageCount }, (v, k) => k + 1).filter(
    (i) => i && i >= left && i < right
  );

  if (result.length > 1) {
    // Add first page and dots
    if (result[0] > 1) {
      if (result[0] > 2) {
        result.unshift('...');
      }
      result.unshift(1);
    }

    // Add dots and last page
    if (result[result.length - 1] < pageCount) {
      if (result[result.length - 1] !== pageCount - 1) {
        result.push('...');
      }
      result.push(pageCount);
    }
  }

  return result;
};
