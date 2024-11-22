/* // AsyncAPIDocumentation.tsx
import React from 'react';
import AsyncApiComponent, { ConfigInterface } from '@asyncapi/react-component';
import '@asyncapi/react-component/lib/styles/fiori.css';

// Configuración para AsyncAPI
const asyncApiConfig: ConfigInterface = {
  show: {
    info: true,
    servers: true,
    operations: true,
    messages: true,
    schemas: true,
  },
  schemaID: 'unique-id',
};

const AsyncAPIDocumentation: React.FC = () => {
  const specUrl = 'https://raw.githubusercontent.com/asyncapi/spec/master/examples/2.0.0/streetlights.yml';

  return (
    <div style={{ height: '80vh', padding: '20px' }}>
      <AsyncApiComponent schema={specUrl} config={asyncApiConfig} />
    </div>
  );
};

export default AsyncAPIDocumentation;
 */

import React from 'react'

const AsyncAPIDocumentation = () => {
  return (
    <div>
      
    </div>
  )
}

export default AsyncAPIDocumentation
