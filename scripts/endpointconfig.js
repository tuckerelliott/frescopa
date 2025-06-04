import { getConfigValue } from "./configs.js";

function getAEMPublish() {
  return getConfigValue('public.aem.publish');
}

function getAEMAuthor() {
  return getConfigValue('public.aem.author');
}

export { getAEMPublish, getAEMAuthor };
