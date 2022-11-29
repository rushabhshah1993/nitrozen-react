import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var t =
  '/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 300;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 400;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 500;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 600;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 700;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n/* cyrillic-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;\n}\n/* cyrillic */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;\n}\n/* greek-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+1F00-1FFF;\n}\n/* greek */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0370-03FF;\n}\n/* vietnamese */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB;\n}\n/* latin-ext */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2) format("woff2");\n  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;\n}\n/* latin */\n@font-face {\n  font-family: "Inter";\n  font-style: normal;\n  font-weight: 800;\n  src: url(https://fonts.gstatic.com/s/inter/v2/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2) format("woff2");\n  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;\n}\n.nitrozen-dialog-backdrop {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  z-index: var(--ZIndex3, 999);\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog {\n  font-family: var(--PrimaryFont, "Inter", sans-serif);\n  background: #ffffff;\n  border: 0.1rem solid var(--SecondaryDisabledColor, #e0e0e0);\n  border-radius: 1rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 2.5rem;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-header,\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer {\n  display: flex;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-header {\n  padding: 1rem 2.4rem;\n  line-height: 2.4rem;\n  font-size: 1.6rem;\n  font-weight: bold;\n  color: var(--TypographyPrimaryColor, #41434c);\n  justify-content: space-between;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-header .nitrozen-inline-svg {\n  width: 1.4rem;\n  height: 1.4rem;\n  cursor: pointer;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer {\n  margin: 2.4rem 0 0;\n  justify-content: flex-end;\n  width: 100%;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-negative-button {\n  color: #fa3f4d;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-footer-button-margin {\n  width: 100%;\n  margin: 1rem;\n  max-width: 60%;\n  margin-bottom: 0;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-footer-button-margin:first-child {\n  margin-left: 0;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-footer .nitrozen-dialog-footer-button-margin:last-child {\n  margin-right: 0;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body {\n  position: relative;\n  font-size: 1.2rem;\n  line-height: 1.6rem;\n  text-align: center;\n  color: var(--TypographySecondaryColor, #666666);\n  word-break: break-word;\n  /* scrollbar */\n  /* Track */\n  /* Handle */\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body::-webkit-scrollbar {\n  width: 0.5rem;\n  background-color: #ffffff;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 0.6rem rgba(0, 0, 0, 0.4);\n  background-color: #ffffff;\n}\n.nitrozen-dialog-backdrop .nitrozen-dialog-body::-webkit-scrollbar-thumb {\n  border-radius: 0.25rem;\n  background-color: #6b6b6b;\n}\n@media screen and (max-width: 768px) {\n  .nitrozen-dialog-backdrop .nitrozen-dialog-body {\n    width: 70vw;\n  }\n}\n\n.nitrozen-dialog-fade-enter,\n.nitrozen-dialog-fade-leave-active {\n  opacity: 0;\n}\n\n.nitrozen-dialog-fade-enter-active,\n.nitrozen-dialog-fade-leave-active {\n  transition: opacity 0.5s ease;\n}\n\n.nitrozen-dialog-icon {\n  height: 5rem;\n  width: 5rem;\n}\n\n.nitrozen-dialog-footer-container {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}';
n(t);
export { t as default };
//# sourceMappingURL=Dialog.scss.js.map