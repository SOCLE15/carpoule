/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Page from '../../components/Page';
<<<<<<< HEAD
import Map from '../../components/Map';
import about from './about.md';
=======
>>>>>>> b89a414e1f0cee4adb083b848b3b31615490761f

async function action({ locale }) {
  const data = await new Promise(resolve => {
    require.ensure(
      [],
      require => {
        try {
          resolve(require(`./about.${locale}.md`)); // eslint-disable-line import/no-dynamic-require
        } catch (e) {
          resolve(require('./about.md'));
        }
      },
      'about',
    );
  });

  return {
    chunks: ['about'],
    title: data.title,
    component: (
      <Layout>
<<<<<<< HEAD
        <Page {...about} />
        <Map />
=======
        <Page {...data} />
>>>>>>> b89a414e1f0cee4adb083b848b3b31615490761f
      </Layout>
    ),
  };
}

export default action;
