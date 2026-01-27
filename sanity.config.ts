import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './sanity/schemaTypes';
import { projectId, dataset } from './sanity/config';

export default defineConfig({
  name: 'autoservis-katanovic-blog',
  title: 'Autoservis Katanović Blog',
  basePath: '/studio',
  projectId,
  dataset,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
