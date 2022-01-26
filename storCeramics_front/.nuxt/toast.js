import { createToastInterface } from "vue-toastification";

export default function (ctx, inject) {
  const toast = createToastInterface({"cssFile":"\u002Fhome\u002Foleg\u002FDocuments\u002FstorCeramics\u002FstorCeramics_front\u002Fnode_modules\u002Fvue-toastification\u002Fdist\u002Findex.css"});
  inject('toast', toast);
}
