import type {MetadataRoute} from 'next';
export const dynamic='force-static';
export default function sitemap():MetadataRoute.Sitemap{return ['','/services','/services/battery-replacement','/services/jump-start','/services/battery-trade-in','/location'].map(path=>({url:`https://fastcarbattery.com${path}/`}))}
