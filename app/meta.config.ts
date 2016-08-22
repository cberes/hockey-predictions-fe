import { OpaqueToken } from '@angular/core';

import { MetaConfig } from 'ng2-meta';

export let META_CONFIG = 'meta.config';

export const META_DI_CONFIG: MetaConfig = {
  useTitleSuffix: false,
  defaults: {
    title: 'Hockey Predictions',
    description: 'Hockey game predictions via statistics',
    'og:image': 'https://hockeyscor.es/img/preview.jpg',
    'og:type': 'website',
  }
};

