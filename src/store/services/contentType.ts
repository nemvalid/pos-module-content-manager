import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ContentType, ContentTypeFields } from '../../types/content';

// Define a service using a base URL and expected endpoints
export const contentTypeApi = createApi({
  reducerPath: 'contentTypeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://nemvalid-sandbox.staging.oregon.platform-os.com/admin/content/api/' }), // TODO
  endpoints: (builder) => ({
    getEditableContentTypes: builder.query<ContentType[], void>({
      query: () => 'getContentTypes.json'
    }),
    getEditableFieldsForContentType: builder.query<ContentTypeFields, string>({
      query: (model) => `getFieldsForModel.json?model=${model}`
    }),
    getContentByType: builder.query<[], string>({
      query: (model) => `getContentByModel.json?model=${model}`
    }),
    getContentById: builder.query<any, string | undefined>({
      query: (id) => `getContentById.json?id=${id}`
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEditableContentTypesQuery, useGetEditableFieldsForContentTypeQuery, useGetContentByTypeQuery, useGetContentByIdQuery } = contentTypeApi;
