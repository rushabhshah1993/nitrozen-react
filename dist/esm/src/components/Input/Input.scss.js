import n from "../../../node_modules/style-inject/dist/style-inject.es.js";
var e =
  '@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Light_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Medium_0.ttf) format("truetype");\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-Bold_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-MediumItalic_0.ttf) format("truetype");\n  font-weight: bold;\n  font-style: italic;\n}\n@font-face {\n  font-family: "JioType";\n  src: url(https://cdn.pixelbin.io/v2/falling-surf-7c8bb8/fyprod/wrkr/misc/general/free/original/JioType-LightItalic_0.ttf) format("truetype");\n  font-weight: normal;\n  font-style: italic;\n}\n.n-input {\n  padding: 1px 0px 5px;\n  height: 2em;\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n  border: 0px;\n  min-width: 0px;\n  width: 100%;\n  background: none;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  position: relative;\n  outline: none;\n  box-sizing: border-box;\n  font-size: 14px;\n  -webkit-appearance: none;\n  display: block;\n  -webkit-tap-highlight-color: transparent;\n}\n\n.input-prefixed {\n  margin-left: 30px;\n  width: calc(100% - 30px);\n}\n\n.input-suffixed {\n  width: calc(100% - 30px);\n}\n\n.input-contained {\n  margin-left: 30px;\n  width: calc(100% - 60px);\n}\n\n.n-input-container {\n  width: inherit;\n}\n.n-input-container::before {\n  border-bottom: 2px solid var(--InactiveFieldBorder, rgba(0, 0, 0, 0.65));\n  left: 0px;\n  bottom: 0px;\n  content: " ";\n  position: absolute;\n  right: 0px;\n  transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;\n  pointer-events: none;\n}\n.n-input-container::after {\n  border-bottom: 2px solid var(--ActiveFieldBorder, #000093);\n  left: 0px;\n  bottom: 0px;\n  content: "";\n  position: absolute;\n  right: 0px;\n  transform: scaleX(0);\n  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n  pointer-events: none;\n}\n\n.n-border-focused::after {\n  transform: scaleX(1) translateX(0);\n}\n\n.n-input-grp {\n  display: flex;\n  position: relative;\n  -webkit-box-align: center;\n  align-items: center;\n  margin-top: 16px;\n  width: 100%;\n}\n\n.n-input-label-container {\n  display: flex;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.4375em;\n  letter-spacing: 0.00938em;\n  padding: 0px;\n  display: block;\n  transform-origin: left top;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%;\n  position: absolute;\n  top: 0px;\n  transform: translate(0px, 17px) scale(1);\n  transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;\n}\n\n.n-input-label-default {\n  left: 0;\n}\n\n.n-input-label-prefixed {\n  left: 30px;\n}\n\n.n-focused-label {\n  transform: none;\n}\n\n.n-focused-label-prefixed {\n  transform: translate(-30px, -2px) scale(1);\n}\n\n.n-input-textarea {\n  height: 9.6rem;\n  line-height: 2.1rem;\n  padding-top: 0.6rem;\n}\n\n.n-input:disabled {\n  background: #f3f3f3;\n  pointer-events: none;\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.n-input:disabled + .n-input-label {\n  opacity: 0.5;\n}\n\n.n-form-input {\n  outline: none;\n  flex-direction: column;\n  display: inline-flex;\n  min-width: 0px;\n  position: relative;\n  padding: 0px;\n  border: 0px;\n  vertical-align: top;\n  width: 100%;\n}\n\n.n-input-label {\n  color: --LabelColor, rgba(0, 0, 0, 0.65);\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n  font-size: 1.2rem;\n  font-weight: 500;\n  line-height: 2.1rem;\n  display: flex;\n  flex: 1;\n}\n\n.n-input-maxLength {\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n}\n\n.n-input-grp:focus-within + .n-input-label-container > .n-input-label {\n  color: var(--PrimaryColor, #2e31be) !important;\n}\n\n::-webkit-input-placeholder {\n  /* Edge */\n  color: #a4a4a4;\n  font-size: 1.2rem;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n}\n\n:-ms-input-placeholder {\n  /* Internet Explorer 10-11 */\n  color: #a4a4a4;\n  font-size: 1.2rem;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n}\n\n::placeholder {\n  color: #a4a4a4;\n  font-size: 1.2rem;\n  font-family: var(--PrimaryFont, "JioType", helvetica, arial, sans-serif);\n}\n\ninput[type=search]::-webkit-search-cancel-button {\n  position: relative;\n  right: 1rem;\n  font-size: 10.4px;\n  cursor: pointer;\n}\n\n.n-search-icon {\n  z-index: var(--ZIndex1, 1);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n\n.n-input-label-div {\n  display: flex;\n  justify-content: space-between;\n}\n\n.n-input-prefix,\n.n-input-suffix {\n  height: 2.5rem;\n  width: 2.5rem;\n  margin: auto;\n  box-sizing: border-box;\n  border-radius: 0.3rem;\n  background: none;\n  position: absolute;\n}\n\n.n-prefix-position {\n  top: 0px;\n}\n\n.n-suffix-position {\n  top: 0px;\n  right: 0px;\n}\n\n.n-remove-left-border {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  border-left-color: #ffffff;\n}\n\n.n-remove-right-border {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n  border-right-color: #ffffff;\n}\n\n.n-prefix-padding,\n.n-suffix-padding {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n/* Chrome, Safari, Edge, Opera */\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n/* Firefox */\ninput[type=number] {\n  -moz-appearance: textfield;\n}\n\ntextarea {\n  resize: vertical;\n}\n\n.search-icon {\n  font-size: 2.4rem;\n  color: #8f8f8f;\n}\n\n.n-input-underinfo {\n  color: var(--PrimaryGrey80, rgba(0, 0, 0, 0.65));\n  position: relative;\n  margin-top: calc(var(--SpacingXs, calc(var(--SpacingBase, 1rem) * 0.5)) + 1px);\n}\n\n.n-helper-text {\n  display: block;\n  font-weight: 500;\n  text-transform: none;\n  font-size: 1.1rem;\n  letter-spacing: -0.07px;\n  line-height: 1.4285714286;\n  word-wrap: break-word;\n  color: var(--TypographyPrimaryColor, rgba(0, 0, 0, 0.65));\n}\n\n.n-field-error {\n  color: var(--ColorFeedbackError80, #660014);\n}\n\n.n-field-success {\n  color: var(--ColorFeedbackSuccess80, #135610);\n}\n\n.n-field-warning {\n  color: var(--ColorFeedbackWarning80, #7d2f08);\n}\n\n.n-error-border::after {\n  border-bottom: 2px solid var(--ColorFeedbackError50, #f50031);\n}\n\n.n-warning-border::after {\n  border-bottom: 2px solid var(--ColorFeedbackWarning50, #f06d0f);\n}\n\n.n-success-border::after {\n  border-bottom: 2px solid var(--ColorFeedbackSuccess50, #25ab21);\n}\n\n.n-svg-container {\n  height: 12px;\n  width: 12px;\n  margin-right: 6px;\n}\n\n.n-state-container {\n  display: flex;\n  font-weight: 500;\n  text-transform: none;\n  font-size: 1.1rem;\n  letter-spacing: -0.07px;\n}\n.n-state-container img {\n  height: 100%;\n  width: 100%;\n}\n\n.n-password-eye {\n  cursor: pointer;\n}';
n(e);
export { e as default };
//# sourceMappingURL=Input.scss.js.map
