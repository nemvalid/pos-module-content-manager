import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { ContentType, ContentTypeFields } from '../../types/content';

const API_URL = `${(window as any).POS_INSTANCE_BASE_URL}/admin/content/api/`;

// Define a service using a base URL and expected endpoints
export const contentTypeApi = createApi({
  reducerPath: 'contentTypeApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
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
