import { Book, Shelf } from '../interfaces';

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
            size: 1,
            img: a,
            color: 'red',
          },
        },
        {
          book: {
            name: 'B',
            size: 1,
            img: b,
            color: 'red',
          },
        },
        {
          book: {
            name: 'C',
            size: 1,
            img: c,
            color: 'red',
          },
        },
        {
          book: {
            name: 'D',
            size: 1,
            img: d,
            color: 'red',
          },
        },
        {
          book: {
            name: 'E',
            size: 1,
            img: e,
            color: 'red',
          },
        },
        {
          book: {
            name: 'F',
            size: 1,
            img: f,
            color: 'red',
          },
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
      ],
    },
    {
      id: 2,
      top: 122,
      places: [
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {} as Book,
        },
        {
          book: {
            name: 'G',
            size: 1,
            img: g,
            color: 'red',
          },
        },
        {
          book: {
            name: 'H',
            size: 1,
            img: h,
            color: 'red',
          },
        },
        {
          book: {
            name: 'I',
            size: 1,
            img: i,
            color: 'red',
          },
        },
      ],
    },
  ];

  return shelfs;
}
