import { getConfigValue } from "./configs";

function getAEMPublish() {
  return getConfigValue('aem.publish');
}

function getAEMAuthor() {
  return getConfigValue('aem.author');
}

export { getAEMPublish, getAEMAuthor };
