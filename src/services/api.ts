import { Shelf, EColors } from '../interfaces';

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
            color: EColors.Amarelo,
          },
        },
        {
          book: {
            name: 'B',
            size: 4,
            img: b,
            color: EColors.Vermelho,
          },
        },
        {
          book: {
            name: 'C',
            size: 8,
            img: c,
            color: EColors.Laranja,
          },
        },
        {
          book: {
            name: 'D',
            size: 7,
            img: d,
            color: EColors.Violeta,
          },
        },
        {
          book: {
            name: 'E',
            size: 1,
            img: e,
            color: EColors.AzulClaro,
          },
        },
        {
          book: {
            name: 'F',
            size: 2,
            img: f,
            color: EColors.RosaEscuro,
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
            color: EColors.Rosa,
          },
        },
        {
          book: {
            name: 'H',
            size: 9,
            img: h,
            color: EColors.AzulEscuro,
          },
        },
        {
          book: {
            name: 'I',
            size: 5,
            img: i,
            color: EColors.Verde,
          },
        },
      ],
    },
  ];

  return shelfs;
}
