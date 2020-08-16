#!/usr/bin/env node .

import { min, version } from '@games/foo';

console.log('lodash versiob', version());
console.log('Min of 5 and 4: ', min(5, 4));
