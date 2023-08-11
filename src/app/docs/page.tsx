'use client'
import React from 'react';
import { createSwaggerSpec } from 'next-swagger-doc';
import dynamic from 'next/dynamic';
import 'swagger-ui-react/swagger-ui.css';

// const SwaggerUI = dynamic<{
//   spec: any;
// }>(import('swagger-ui-react'), { ssr: false });

const SwaggerUI = dynamic(() => import('swagger-ui-react'), { ssr: false });


// const getSpecs = async () => {
//   const spec: Record<string, any> = createSwaggerSpec({
//     definition: {
//       openapi: '3.0.0',
//       info: {
//         title: 'Next Swagger API Example',
//         version: '1.0',
//       },
//     },
//   });
//   return spec
// }

export default async function ApiDoc() {
  // const spec = await getSpecs();
  return <SwaggerUI url='/api/docs' />;
}




