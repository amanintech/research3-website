import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '25edee023f774a96854ade7023ecae5e',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Researh3 | Research OS for decentralized future',
  domain: 'research3.xyz',
  author: 'Research3 DAO',

  // open graph metadata (optional)
  description: 'Research OS for decentralized future',

  // social usernames (optional)
  twitter: 'research3_xyz',
  github: '',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://research3.xyz/_next/image?url=https%3A%2F%2Fwww.notion.so%2Fimage%2Fhttps%253A%252F%252Fs3-us-west-2.amazonaws.com%252Fsecure.notion-static.com%252F6b1c0ea3-76d0-4916-97a5-fae8efad254a%252FkwYlpxVYdbIDthEiw1mnOwV0muADvLWwSERfLvwAo5rRvbHZE5oZJdsya1FYaLgYw9rau7UldTxg6X_9um20hToSHHtbgO4VAiVIJXtLewQtjBL02Jfx83FQLQfMN7e8kwO1gYF7IHnKV2Q9YalQIEB7znfwTCYQve42A3IqXdYljWFQovH3dhFRzwUGtp14nxBLJSmju5gy8rdlYt2fGimBkPCTZMG5xespPyxD_8.jpeg%3Ftable%3Dblock%26id%3D43d0f1b7-e973-4ba5-9947-8789ade378cf%26cache%3Dv2&w=828&q=75',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
   navigationLinks: [
    {
    title: '🎯 Goal',
    pageId: 'd7496259ebde4828963558c4106a1b3d'
  },
    {
       title: '🏗 Project',
       pageId: 'b46bf64bdd9b4ff3a1eca47f80e714aa'
     },

     {
            title: '🤝 Join',
            pageId: 'c79115a4816047469198048605b65e27'
          }]

})

