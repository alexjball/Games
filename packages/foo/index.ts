import { min as _min, VERSION } from 'lodash';

export const version = (): string => VERSION;
export const min = (a: number, b: number): number => _min([a, b]);

export interface Foo {
  name: string;
}
