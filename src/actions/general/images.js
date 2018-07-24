// Dota 2 CDN requests for images
const URL = 'http://cdn.dota2.com/apps/dota2/images/';

export function fetch_hero_icon(hero_uri) {
  return URL + 'heroes/' + hero_uri + '_icon.png'
};
export function fetch_hero_image_small(hero_uri) {
  return URL + 'heroes/' + hero_uri + '_sb.png'
};
export function fetch_hero_image_large(hero_uri) {
  return URL + 'heroes/' + hero_uri + '_lg.png'
};
export function fetch_item_image_large(item_uri) {
  return URL + 'items/' + item_uri + '_lg.png'
};
