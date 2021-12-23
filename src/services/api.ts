import { Shelf } from '../interfaces';

import a from '../assets/book_a.svg';
import b from '../assets/book_b.svg';
import c from '../assets/book_c.svg';
import d from '../assets/book_d.svg';
import e from '../assets/book_e.svg';
import f from '../assets/book_f.svg';
import g from '../assets/book_g.svg';
import h from '../assets/book_h.svg';
import i from '../assets/book_i.svg';

export function loadShelfs(): Shelf[] {
  const shelfs: Shelf[] = [
    {
      id: 1,
      top: 74,
      places: [
        {
          book: {
            name: 'A',
            size: 6,
            img: a,
            color: 1,
          },
        },
        {
          book: {
            name: 'B',
            size: 4,
            img: b,
            color: 3,
          },
        },
        {
          book: {
            name: 'C',
            size: 8,
            img: c,
            color: 2,
          },
        },
        {
          book: {
            name: 'D',
            size: 7,
            img: d,
            color: 6,
          },
        },
        {
          book: {
            name: 'E',
            size: 1,
            img: e,
            color: 8,
          },
        },
        {
          book: {
            name: 'F',
            size: 2,
            img: f,
            color: 5,
          },
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
      ],
    },
    {
      id: 2,
      top: 122,
      places: [
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: undefined,
        },
        {
          book: {
            name: 'G',
            size: 3,
            img: g,
            color: 4,
          },
        },
        {
          book: {
            name: 'H',
            size: 9,
            img: h,
            color: 7,
          },
        },
        {
          book: {
            name: 'I',
            size: 5,
            img: i,
            color: 9,
          },
        },
      ],
    },
  ];

  return shelfs;
}
