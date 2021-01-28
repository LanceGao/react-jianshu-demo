import { createGlobalStyle } from 'styled-components'

export const IconfontStyle = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1611845654404'); /* IE9 */
  src: url('./iconfont.eot?t=1611845654404#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
  url('./iconfont.woff?t=1611845654404') format('woff'),
  url('./iconfont.ttf?t=1611845654404') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1611845654404#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;
