// const parser = new DOMParser();
// function createWidget(brandColor, brandName, accountID) {
//   const fontFamilyName = "inter";
//   const WidgetContainer = document.createElement("div");
//   WidgetContainer.style.position = "fixed";
//   WidgetContainer.style.zIndex = "9999";
//   WidgetContainer.style.backgroundColor = brandColor;
//   WidgetContainer.style.color = "#fff";
//   WidgetContainer.style.cursor = "pointer";
//   WidgetContainer.style.bottom = "10px";
//   WidgetContainer.style.width = "60px";
//   WidgetContainer.style.height = "60px";
//   WidgetContainer.style.textAlign = "center";
//   WidgetContainer.style.borderRadius = "50%";
//   WidgetContainer.style.left = "15px";
//   WidgetContainer.onclick = openMainScreen;

//   const StarSvgElement = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "svg"
//   );
//   StarSvgElement.setAttribute("width", "72");
//   StarSvgElement.setAttribute("height", "68");
//   StarSvgElement.setAttribute("viewBox", "0 0 72 68");
//   StarSvgElement.setAttribute("fill", "none");
//   StarSvgElement.style.width = "35px";
//   StarSvgElement.style.height = "35px";
//   StarSvgElement.style.position = "relative";
//   StarSvgElement.style.top = "12px";

//   const StarPathElement = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "path"
//   );
//   StarPathElement.setAttribute(
//     "d",
//     "M34.05 2L43.7062 21.5625L65.3 24.7188L49.675 39.9375L53.3625 61.4375L34.05 51.2812L14.7375 61.4375L18.425 39.9375L2.79999 24.7188L24.3937 21.5625L34.05 2Z"
//   );
//   StarPathElement.setAttribute("fill", "white");

//   const filterElement = document.createElementNS(
//     "http://www.w3.org/2000/svg",
//     "filter"
//   );
//   filterElement.setAttribute("id", "filter0_d_1295_5129");
//   // Add filter elements here if needed

//   StarSvgElement.appendChild(filterElement);
//   StarSvgElement.appendChild(StarPathElement);
//   WidgetContainer.appendChild(StarSvgElement);

//   document.body.appendChild(WidgetContainer);

//   // Widget ends here
//   // Create widget-childContainer element
//   const WidgetChildContainer = document.createElement("div");
//   WidgetChildContainer.id = "widget-childContainer";
//   WidgetChildContainer.style.visibility = "hidden";
//   WidgetChildContainer.style.display = "none";
//   WidgetChildContainer.style.border = "1px solid #f0f0f0";
//   WidgetChildContainer.style.borderRadius = "16px";

//   // Create mainPanelSection element
//   const mainPanelSection = document.createElement("section");
//   mainPanelSection.style.display = "block";
//   mainPanelSection.style.width = "100%";
//   mainPanelSection.style.height = "100%";
//   mainPanelSection.style.position = "fixed";
//   // mainPanelSection.style.background = "rgba(0, 0, 0, 0.6)";
//   mainPanelSection.style.top = "0px";
//   mainPanelSection.style.left = "0px";
//   mainPanelSection.style.zIndex = "2147483647";
//   // mainPanelSection.style.fontSize = "16px !important";
//   // Create main-panel element
//   const mainPanel = document.createElement("div");
//   mainPanel.className = "main-panel";
//   mainPanel.id = "main-panel";
//   mainPanel.style.position = "fixed";
//   mainPanel.style.bottom = "75px";
//   mainPanel.style.width = "375px";
//   mainPanel.style.height = "600px";
//   mainPanel.style.maxHeight = "600px";
//   mainPanel.style.backgroundColor = "#ffffff";
//   mainPanel.style.boxShadow = "0px 2px 9px -1px rgba(0, 0, 0, 0.17)";
//   mainPanel.style.boxSizing = "border-box";
//   mainPanel.style.color = "#333333";
//   mainPanel.style.zIndex = "2147483647";
//   mainPanel.style.left = "10px";
//   mainPanel.style.borderRadius = "16px";
//   mainPanel.style.overflow = "auto";

//   // Create scroll-div element
//   const scrollDiv = document.createElement("div");
//   scrollDiv.className = "scroll-div";
//   scrollDiv.style.display = "flex";
//   scrollDiv.style.position = "relative";
//   scrollDiv.style.flexDirection = "column";
//   scrollDiv.style.msOverflowStyle = "none";
//   scrollDiv.style.scrollbarWidth = "none";
//   scrollDiv.style.overflow = "none";
//   scrollDiv.style.borderRadius = "16px";
//   scrollDiv.style.height = "600px";
//   scrollDiv.style.maxHeight = "600px";

//   // Append scroll-div to main-panel
//   mainPanel.appendChild(scrollDiv);

//   // Append main-panel to mainPanelSection
//   mainPanelSection.appendChild(mainPanel);

//   // Append mainPanelSection to widget-childContainer
//   WidgetChildContainer.appendChild(mainPanelSection);

//   // Append widget-childContainer to the document body
//   document.body.appendChild(WidgetChildContainer);

//   const headerContainer = document.createElement("div");
//   headerContainer.style.display = "flex";
//   headerContainer.style.position = "relative";
//   headerContainer.style.flexDirection = "row";
//   headerContainer.style.alignItems = "center";
//   headerContainer.style.padding = "16px";
//   headerContainer.style.gap = "8px";
//   headerContainer.style.width = "auto";
//   headerContainer.style.fontFamily = fontFamilyName;
//   headerContainer.style.height = "60px";
//   headerContainer.style.background = "#FFFFFF";
//   headerContainer.style.flex = "none";
//   headerContainer.style.order = "0";
//   headerContainer.style.alignSelf = "stretch";
//   headerContainer.style.flexGrow = "0";
//   // earnRewardsContainer.style.margin = "0px 0px 8px 0px";
//   headerContainer.style.borderRadius = "8px 8px 0px 0px";
//   headerContainer.style.borderBottom = "1px solid #f0f0f0";
//   // Set the container to relative position

//   // Create a new div element
//   const headerString = document.createElement("div");

//   headerString.style.display = "flex";
//   headerString.style.flexDirection = "column";
//   headerString.style.alignItems = "flex-start";
//   headerString.style.padding = "0px";
//   headerString.style.justifyContent = "space-between";
//   headerString.style.gap = "2px";
//   headerString.style.width = "259px";
//   // headerString.style.height = "24px";
//   headerString.style.flex = "none";
//   headerString.style.order = "0";
//   headerString.style.flexGrow = "0";

//   // Set the text content for the div
//   headerString.textContent = "My rewards";
//   headerString.style.fontSize = "16px";
//   // headerString.style.lineHeight = "19px";
//   headerString.style.color = "#1A1A1A";
//   headerString.style.fontWeight = "600";
//   headerString.style.fontFamily = fontFamilyName;
//   headerContainer.appendChild(headerString);

//   const crossButtonSvg = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M15 5L5 15" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M5 5L15 15" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;

//   const crossButton = parser
//     .parseFromString(crossButtonSvg, "image/svg+xml")
//     .querySelector("svg");
//   crossButton.style.position = "absolute"; // Set cross button to absolute position
//   crossButton.style.top = "18px"; // Align at the top
//   crossButton.style.right = "18px"; // Align at the right
//   crossButton.onclick = toggleWidget;
//   crossButton.style.cursor = "pointer";
//   headerContainer.appendChild(crossButton);
//   scrollDiv.appendChild(headerContainer);

//   const mainScreenContainer = document.createElement("div");
//   const phoneNumberEntryContainer = document.createElement("div");
//   phoneNumberEntryContainer.style.display = "flex";
//   phoneNumberEntryContainer.style.justifyContent = "space-between";
//   phoneNumberEntryContainer.style.position = "relative";
//   phoneNumberEntryContainer.style.gap = "8px";
//   phoneNumberEntryContainer.style.margin = "8px 16px 0px 16px";

//   const countryCodeContainer = document.createElement("div");
//   countryCodeContainer.style.display = "flex";
//   countryCodeContainer.style.flexDirection = "column";
//   countryCodeContainer.style.alignItems = "flex-start";
//   countryCodeContainer.style.padding = "0px";
//   // countryCodeContainer.style.gap = "10px";
//   // countryCodeContainer.style.width = "281px";
//   // countryCodeContainer.style.setProperty("outline", "none", "important");
//   countryCodeContainer.style.height = "49px";
//   // countryCodeContainer.style.border = "2px solid rgba(235, 154, 136, 0.2)";
//   countryCodeContainer.style.borderRadius = "12px";

//   const countryCode = document.createElement("input");
//   countryCode.setAttribute("type", "text");
//   countryCode.setAttribute("inputmode", "numeric");
//   countryCode.setAttribute("value", "+ 91");
//   countryCode.setAttribute("maxlength", "10");
//   countryCode.style.boxSizing = "border-box";
//   countryCode.style.display = "flex";
//   countryCode.style.flexDirection = "row";
//   countryCode.style.alignItems = "center";
//   countryCode.style.padding = "16px 12px";
//   countryCode.style.gap = "12px";
//   countryCode.style.width = "58px";
//   countryCode.style.color = "#4d4d4d";
//   countryCode.style.height = "49px";
//   countryCode.style.background = "#FFFFFF";
//   // countryCode.style.border = `1px solid ${brandColor}`;
//   countryCode.style.borderRadius = "12px";
//   countryCode.style.fontSize = "14px";
//   countryCode.style.fontFamily = fontFamilyName;
//   // countryCode.style.boxShadow = `0px 0px 2px ${brandColor}`;
//   countryCode.style.border = `2px solid ${brandColor}`;
//   countryCode.style.boxShadow = "none";
//   // countryCode.style.outline = `1px solid ${brandColor}`;
//   countryCode.style.setProperty("outline", "none", "important");
//   countryCode.style.lineHeight = "17px";
//   // countryCode.style.color = ;
//   countryCode.addEventListener("input", function (event) {
//     const numericValue = countryCode.value.replace(/\D/g, "");
//     countryCode.value = "+ " + numericValue;
//   });
//   countryCode.addEventListener("focus", function () {
//     countryCode.style.border = `1px solid ${brandColor}`; // or set it to the default value
//     countryCode.style.boxShadow = `0px 0px 2px ${brandColor}`;
//   });

//   countryCode.addEventListener("blur", function () {
//     countryCode.style.border = `2px solid ${brandColor}`;
//     countryCode.style.boxShadow = "none";
//     // Reset border when focus is lost
//   });

//   countryCodeContainer.appendChild(countryCode);

//   const phoneNumberContainer = document.createElement("div");
//   phoneNumberContainer.style.display = "flex";
//   phoneNumberContainer.style.flexDirection = "column";
//   phoneNumberContainer.style.alignItems = "flex-start";
//   phoneNumberContainer.style.padding = "0px";
//   // phoneNumberContainer.style.gap = "10px";
//   phoneNumberContainer.style.width = "281px";
//   phoneNumberContainer.style.height = "49px";
//   // phoneNumberContainer.style.border = "2px solid rgba(235, 154, 136, 0.2)";
//   phoneNumberContainer.style.borderRadius = "12px";

//   const phoneNumber = document.createElement("input");
//   phoneNumber.setAttribute("type", "text");
//   phoneNumber.setAttribute("inputmode", "numeric");
//   phoneNumber.setAttribute("placeholder", "Enter phone number");
//   phoneNumber.style.boxSizing = "border-box";
//   phoneNumber.style.display = "flex";
//   phoneNumber.style.fontFamily = fontFamilyName;
//   phoneNumber.style.flexDirection = "row";
//   phoneNumber.style.alignItems = "center";
//   phoneNumber.style.padding = "16px 12px";
//   phoneNumber.style.gap = "12px";
//   phoneNumber.style.width = "100%";
//   phoneNumber.style.height = "49px";
//   phoneNumber.style.background = "#FFFFFF";
//   // phoneNumber.style.border = `1px solid ${brandColor}`;
//   phoneNumber.style.borderRadius = "12px";
//   phoneNumber.style.fontSize = "14px";
//   phoneNumber.style.lineHeight = "17px";
//   phoneNumber.style.color = "#949494";
//   phoneNumber.style.outline = "none";
//   // phoneNumber.style.boxShadow = `0px 0px 2px ${brandColor}`;
//   phoneNumber.style.border = `2px solid ${brandColor}`;
//   phoneNumber.style.boxShadow = "none";

//   phoneNumber.addEventListener("input", function (event) {
//     phoneNumber.value = phoneNumber.value.replace(/\D/g, "");
//     if (phoneNumber.value) {
//       phoneNumber.style.color = "#4d4d4d";
//     }
//   });
//   phoneNumber.addEventListener("focus", function () {
//     phoneNumber.style.boxShadow = `0px 0px 2px ${brandColor}`;
//     phoneNumber.style.border = `1px solid ${brandColor}`;
//   });

//   phoneNumber.addEventListener("blur", function () {
//     // Reset border when focus is lost
//     phoneNumber.style.border = `2px solid ${brandColor}`;
//     phoneNumber.style.boxShadow = "none";
//   });
//   phoneNumber.addEventListener("click", function () {
//     if (countryCode.value === "+ 91") {
//       phoneNumber.setAttribute("maxlength", "10");
//     } else {
//       phoneNumber.setAttribute("maxlength", "25");
//     }
//   });
//   phoneNumberContainer.appendChild(phoneNumber);

//   // const svgElement4 = pa

//   phoneNumberEntryContainer.appendChild(countryCodeContainer);

//   phoneNumberEntryContainer.appendChild(phoneNumberContainer);
//   mainScreenContainer.appendChild(phoneNumberEntryContainer);
//   // Create a div element
//   var errormessage = document.createElement("div");

//   // Set the content and class name for the div element
//   errormessage.textContent = "Please enter a valid phone number and try again.";
//   errormessage.className = "error-text";

//   // Apply the CSS styles directly to the style property of the errormessage element
//   errormessage.style.width = "auto";
//   errormessage.style.height = "15px";
//   errormessage.style.fontWeight = "400";
//   errormessage.style.fontFamily = fontFamilyName;
//   errormessage.style.fontSize = "12px";
//   errormessage.style.lineHeight = "15px";
//   errormessage.style.color = "#CB2711";
//   errormessage.style.flex = "none";
//   errormessage.style.order = "1";
//   errormessage.style.flexGrow = "0";
//   errormessage.style.margin = "8px 0px 0px 0px";
//   errormessage.style.textAlign = "center";

//   // Append the div element to the body of the document

//   // Create a button element
//   const checkBalancebutton = document.createElement("div");
//   checkBalancebutton.style.display = "flex";
//   checkBalancebutton.style.flexDirection = "row";
//   checkBalancebutton.style.fontFamily = fontFamilyName;
//   checkBalancebutton.style.fontStyle = "normal";
//   checkBalancebutton.style.justifyContent = "center";
//   checkBalancebutton.style.alignItems = "center";
//   checkBalancebutton.style.width = "100%";

//   // Create a span element for the label text
//   const checkBalanceLabel = document.createElement("button");
//   checkBalanceLabel.innerText = "Check balance";
//   checkBalanceLabel.style.width = "100%";
//   checkBalanceLabel.style.height = "55px";
//   checkBalanceLabel.style.borderRadius = "12px";
//   checkBalanceLabel.style.background = brandColor;
//   checkBalanceLabel.style.boxShadow = `inset 0px -1px 4px ${brandColor}`;
//   // checkBalanceLabel.style.fontWeight = "600";
//   checkBalanceLabel.style.fontSize = "16px";
//   checkBalanceLabel.style.lineHeight = "19px";
//   checkBalanceLabel.style.fontFamily = fontFamilyName;
//   checkBalanceLabel.style.fontStyle = "normal";
//   checkBalanceLabel.style.display = "flex";
//   checkBalanceLabel.style.alignItems = "center";
//   checkBalanceLabel.style.justifyContent = "center";
//   checkBalanceLabel.style.color = "#FFFFFF";
//   checkBalanceLabel.style.border = `1px solid ${brandColor}`;
//   checkBalanceLabel.style.margin = "8px 16px";
//   checkBalanceLabel.style.cursor = "pointer";
//   checkBalancebutton.onclick = checkRewardPoints;
//   checkBalancebutton.style.borderBottom = "1px solid #f0f0f0";
//   // Append the label text to the button
//   checkBalancebutton.appendChild(checkBalanceLabel);

//   mainScreenContainer.appendChild(checkBalancebutton);

//   const earnRewardsContainer = document.createElement("div");
//   earnRewardsContainer.style.display = "flex";
//   earnRewardsContainer.style.position = "relative";
//   earnRewardsContainer.style.flexDirection = "row";
//   earnRewardsContainer.style.alignItems = "center";
//   earnRewardsContainer.style.padding = "16px";
//   earnRewardsContainer.style.gap = "12px";
//   earnRewardsContainer.style.width = "100%";
//   earnRewardsContainer.style.fontFamily = fontFamilyName;
//   earnRewardsContainer.style.height = "60px";
//   earnRewardsContainer.style.background = "#FFFFFF";
//   earnRewardsContainer.style.flex = "none";
//   earnRewardsContainer.style.order = "0";
//   earnRewardsContainer.style.alignSelf = "stretch";
//   earnRewardsContainer.style.flexGrow = "0";
//   earnRewardsContainer.style.margin = "0px 0px 8px 0px";
//   earnRewardsContainer.style.borderBottom = "1px solid #f0f0f0";
//   earnRewardsContainer.onclick = openEarnRewards;
//   const earnRewardsSvg = `<svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path fill-rule="evenodd" clip-rule="evenodd" d="M13.0024 10.9893C10.833 10.9893 9.07227 12.75 9.07227 14.9194C9.07227 17.0889 10.833 18.8496 13.0024 18.8496C15.1719 18.8496 16.9326 17.0889 16.9326 14.9194C16.9326 12.75 15.1719 10.9893 13.0024 10.9893ZM13.0024 12.8032C14.1706 12.8032 15.1187 13.7513 15.1187 14.9194C15.1187 16.0876 14.1706 17.0357 13.0024 17.0357C11.8343 17.0357 10.8862 16.0876 10.8862 14.9194C10.8862 13.7513 11.8343 12.8032 13.0024 12.8032Z" fill="#4D4D4D"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M26 8.87501C26 8.31382 25.7775 7.7757 25.3797 7.37911C24.9831 6.9813 24.445 6.75879 23.8838 6.75879H2.11622C1.55503 6.75879 1.01691 6.98129 0.620324 7.37911C0.222506 7.77571 0 8.31382 0 8.87501V20.9679C0 21.5291 0.222496 22.0672 0.620324 22.4638C1.01692 22.8616 1.55503 23.0841 2.11622 23.0841H23.8838C24.445 23.0841 24.9831 22.8617 25.3797 22.4638C25.7775 22.0672 26 21.5291 26 20.9679V8.87501ZM24.186 8.87501V20.9679C24.186 21.0477 24.1547 21.1252 24.0978 21.1819C24.0409 21.2388 23.9635 21.2702 23.8838 21.2702H2.11622C2.03645 21.2702 1.95891 21.2388 1.90223 21.1819C1.84534 21.125 1.81396 21.0477 1.81396 20.9679V8.87501C1.81396 8.79524 1.84534 8.7177 1.90223 8.66102C1.95912 8.60413 2.03645 8.57275 2.11622 8.57275H23.8838C23.9635 8.57275 24.0411 8.60413 24.0978 8.66102C24.1547 8.71791 24.186 8.79524 24.186 8.87501Z" fill="#4D4D4D"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M23.5936 7.28138C23.5936 7.28138 21.7023 3.22769 20.7674 1.22274C20.274 0.163332 19.0151 -0.29503 17.9557 0.198523L3.70782 6.84229C3.25311 7.05385 3.05712 7.59441 3.2689 8.0479C3.48046 8.5014 4.01978 8.6986 4.47327 8.48682L18.7212 1.84305C18.8736 1.77179 19.0526 1.83698 19.1238 1.98942L21.9489 8.04806C22.1604 8.50155 22.701 8.69875 23.1545 8.48698C23.608 8.27542 23.8039 7.73486 23.5934 7.28136L23.5936 7.28138Z" fill="#4D4D4D"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0476 15.8276H21.4663C21.967 15.8276 22.3733 15.4213 22.3733 14.9207C22.3733 14.42 21.967 14.0137 21.4663 14.0137H19.0476C18.5469 14.0137 18.1406 14.42 18.1406 14.9207C18.1406 15.4213 18.5469 15.8276 19.0476 15.8276Z" fill="#4D4D4D"/>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M4.53589 15.8276H6.95457C7.45524 15.8276 7.86156 15.4213 7.86156 14.9207C7.86156 14.42 7.45524 14.0137 6.95457 14.0137H4.53589C4.03522 14.0137 3.62891 14.42 3.62891 14.9207C3.62891 15.4213 4.03522 15.8276 4.53589 15.8276Z" fill="#4D4D4D"/>
// </svg>
// `;

//   const earnRewardsSvgElement = parser
//     .parseFromString(earnRewardsSvg, "image/svg+xml")
//     .querySelector("svg");
//   earnRewardsSvgElement.style.flexDirection = "column";

//   earnRewardsContainer.appendChild(earnRewardsSvgElement);

//   const earnRewardsText = document.createElement("div");
//   earnRewardsText.style.display = "flex";
//   earnRewardsText.style.flexDirection = "column";
//   earnRewardsText.style.alignItems = "flex-start";
//   earnRewardsText.style.padding = "0px";
//   earnRewardsText.style.justifyContent = "space-between";
//   earnRewardsText.style.gap = "2px";
//   earnRewardsText.style.width = "259px";
//   earnRewardsText.style.height = "24px";
//   earnRewardsText.style.flex = "none";
//   earnRewardsText.style.fontFamily = fontFamilyName;
//   earnRewardsText.style.fontSize = "14px";
//   earnRewardsText.style.order = "0";
//   earnRewardsText.style.flexGrow = "0";
//   earnRewardsText.style.color = "#4D4D4D";

//   // Set the text content for the earnRewardsText
//   earnRewardsText.textContent = "How to earn rewards";
//   earnRewardsContainer.appendChild(earnRewardsText);

//   const earnRewardsActionDiv = document.createElement("div");
//   earnRewardsActionDiv.style.cursor = "pointer";
//   earnRewardsActionDiv.style.display = "flex";
//   earnRewardsActionDiv.style.flexDirection = "column";
//   earnRewardsActionDiv.style.alignItems = "flex-start";
//   earnRewardsActionDiv.style.padding = "0px";
//   earnRewardsActionDiv.style.justifyContent = "center";
//   earnRewardsActionDiv.style.gap = "2px";
//   earnRewardsActionDiv.style.width = "16px";
//   earnRewardsActionDiv.style.height = "24px";
//   earnRewardsActionDiv.style.flex = "none";
//   earnRewardsActionDiv.style.fontFamily = fontFamilyName;
//   earnRewardsActionDiv.style.fontSize = "14px";
//   earnRewardsActionDiv.style.order = "0";
//   earnRewardsActionDiv.style.marginLeft = "auto";
//   earnRewardsActionDiv.style.flexGrow = "0";
 
//   const earnRewardsActionSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.33337 8H12.6667" stroke="#4D4D4D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="#4D4D4D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// `;

//   const earnRewardsActionSvgElement = parser
//     .parseFromString(earnRewardsActionSvg, "image/svg+xml")
//     .querySelector("svg");
//   earnRewardsActionDiv.appendChild(earnRewardsActionSvgElement);
//   earnRewardsContainer.appendChild(earnRewardsActionDiv);
//   mainScreenContainer.appendChild(earnRewardsContainer);

//   //   const faqContainer = document.createElement("div");
//   //   faqContainer.style.display = "flex";
//   //   faqContainer.style.position = "relative";
//   //   faqContainer.style.flexDirection = "row";
//   //   faqContainer.style.alignItems = "center";
//   //   faqContainer.style.padding = "14px";
//   //   faqContainer.style.gap = "12px";
//   //   faqContainer.style.width = "100%";
//   //   faqContainer.style.fontFamily = fontFamilyName;
//   //   faqContainer.style.height = "60px";
//   //   faqContainer.style.background = "#FFFFFF";
//   //   faqContainer.style.flex = "none";
//   //   faqContainer.style.order = "0";
//   //   faqContainer.style.alignSelf = "stretch";
//   //   faqContainer.style.flexGrow = "0";
//   //   faqContainer.style.margin = "0px 0px 8px 0px";
//   //   faqContainer.style.borderBottom = "1px solid #f0f0f0";

//   //   const faqSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
//   // <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
//   // </svg>
//   // `;

//   //   const faqSvgElement = parser
//   //     .parseFromString(faqSvg, "image/svg+xml")
//   //     .querySelector("svg");
//   //   faqSvgElement.style.flexDirection = "column";

//   //   faqContainer.appendChild(faqSvgElement);

//   //   const faqText = document.createElement("div");
//   //   faqText.style.display = "flex";
//   //   faqText.style.flexDirection = "column";
//   //   faqText.style.alignItems = "flex-start";
//   //   faqText.style.padding = "0px";
//   //   faqText.style.justifyContent = "space-between";
//   //   faqText.style.gap = "2px";
//   //   faqText.style.width = "259px";
//   //   faqText.style.height = "24px";
//   //   faqText.style.flex = "none";
//   //   faqText.style.fontFamily = fontFamilyName;
//   //   faqText.style.fontSize = "14px";
//   //   faqText.style.order = "0";
//   //   faqText.style.flexGrow = "0";
//   //   faqText.style.color = "#4D4D4D";
//   //   // Set the text content for the faqText
//   //   faqText.textContent = "FAQ";
//   //   faqContainer.appendChild(faqText);

//   //   const faqActionDiv = document.createElement("div");
//   //   faqActionDiv.style.cursor = "pointer";
//   //   faqActionDiv.style.display = "flex";
//   //   faqActionDiv.style.flexDirection = "column";
//   //   faqActionDiv.style.alignItems = "flex-start";
//   //   faqActionDiv.style.padding = "0px";
//   //   faqActionDiv.style.justifyContent = "center";
//   //   faqActionDiv.style.gap = "2px";
//   //   faqActionDiv.style.width = "16px";
//   //   faqActionDiv.style.height = "24px";
//   //   faqActionDiv.style.flex = "none";
//   //   faqActionDiv.style.fontFamily = fontFamilyName;
//   //   faqActionDiv.style.fontSize = "16px";
//   //   faqActionDiv.style.order = "0";
//   //   faqActionDiv.style.flexGrow = "0";
//   //   faqActionDiv.style.marginLeft = "auto";
//   //   faqActionDiv.onclick = openFaq;

//   //   const faqActionSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   // <path d="M3.33337 8H12.6667" stroke="#4D4D4D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
//   // <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="#4D4D4D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
//   // </svg>
//   // `;

//   //   const faqActionSvgElement = parser
//   //     .parseFromString(faqActionSvg, "image/svg+xml")
//   //     .querySelector("svg");
//   //   faqActionSvgElement.style.flexDirection = "column";

//   //   faqActionDiv.appendChild(faqActionSvgElement);
//   //   faqContainer.appendChild(faqActionDiv);
//   //   mainScreenContainer.appendChild(faqContainer);

//   //   // FAQ data
//   //   const faqPoints = [
//   //     {
//   //       number: 1,
//   //       text: "How to earn Reward points?",
//   //       answer:
//   //         "Your brand will be setting up ways for you to earn reward points. These could be the following:<br> 1. On every purchase with the brand <br> 2. Manually adding reward points to your wallet on special occasions \n Please reach out to the brand in case you have concerns or questions.",
//   //     },
//   //     {
//   //       number: 2,
//   //       text: "How to redeem Reward points?",
//   //       answer:
//   //         "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
//   //     },
//   //     {
//   //       number: 3,
//   //       text: "Can I use all my reward points for a single order?",
//   //       answer:
//   //         "You will be allowed to chose the amount your want to redeem against the payables upto the maximum allowed limit set by the brand",
//   //     },
//   //     {
//   //       number: 4,
//   //       text: "What is the expiry for my rewards points?",
//   //       answer:
//   //         "You can check for the expiry of you rewards under My Rewards on the brand website. Click here to redirect to My Rewards page",
//   //     },
//   //     {
//   //       number: 5,
//   //       text: "Can I redeem my rewards for cash? ",
//   //       answer: "No, you can use your reward points only against a purchase",
//   //     },
//   //     {
//   //       number: 6,
//   //       text: "How does reward points work? ",
//   //       answer:
//   //         "Reward points are store credits issued by the brand that can be used by you as a payment method while making a purchase. These rewards will be stored in your wallet issued by the brand. ",
//   //     },
//   //     {
//   //       number: 7,
//   //       text: "Where can I check my reward points? ",
//   //       answer:
//   //         "You can check the amount of reward points you have under My Rewards on the brand website. Click here to redirect to My Rewards page You can check your redemption history under My Transactions",
//   //     },
//   //     {
//   //       number: 8,
//   //       text: "Can I top up my wallet using cash ? ",
//   //       answer:
//   //         "No, your wallet is a place for you to store reward points or store credits issues by the brands. The brand will be topping up the wallet every time your make a purchase based on their terms and conditions or manually on special occasions",
//   //     },
//   //   ];

//   //   // Create FAQ items and append to the container
//   //   const faqContainerPoints = document.createElement("div");
//   //   faqContainerPoints.style.fontFamily = "inter";
//   //   // faqContainerPoints.style.padding = "12px 16px";
//   //   faqContainerPoints.style.fontSize = "14px";
//   //   faqContainerPoints.style.maxHeight = "414px";
//   //   faqContainerPoints.style.overflow = "auto";
//   //   faqContainerPoints.style.color = "#4D4D4D";
//   //   faqPoints.forEach((faq, index) => {
//   //     const faqItemOuter = document.createElement("div");
//   //     faqItemOuter.style.display = "inline-flex";
//   //     faqItemOuter.style.justifyContent = "center";
//   //     faqItemOuter.style.alignItems = "baseline";
//   //     faqItemOuter.style.gap = "8px";
//   //     const faqNumber = document.createElement("div");
//   //     faqNumber.textContent = `${faq.number}.`;
//   //     faqNumber.style.marginLeft = "16px";
//   //     const faqItem = document.createElement("div");
//   //     faqItem.textContent = `${faq.text}`;
//   //     faqItem.style.cursor = "pointer";
//   //     // faqItem.style.marginBottom = "4px";
//   //     // faqItem.style.padding = "0px 16px";
//   //     // faqItem.style.height = "51px";
//   //     faqItem.style.width = "300px";
//   //     faqItem.style.fontFamily = "inter";
//   //     faqItem.style.lineHeight = "19.36px";
//   //     // faqItem.style.border = "1px solid #ccc";
//   //     const dropdownArrowSvg = ` <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//   // <path d="M4 6L8 10L12 6" stroke="#4D4D4D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
//   // </svg>
//   // `;

//   //     const dropdownArrow = parser
//   //       .parseFromString(dropdownArrowSvg, "image/svg+xml")
//   //       .querySelector("svg");
//   //     // dropdownArrow.style.position = "absolute";
//   //     dropdownArrow.style.right = "10px";
//   //     dropdownArrow.style.transition = "transform 0.3s";
//   //     dropdownArrow.style.marginRight = "16px";
//   //     const faqAnswer = document.createElement("div");
//   //     faqAnswer.innerHTML = faq.answer;
//   //     faqAnswer.style.display = "none";
//   //     // faqAnswer.style.borderBottom = "1px solid #f0f0f0";
//   //     faqAnswer.style.fontSize = "14px";
//   //     faqAnswer.style.color = "#949494";
//   //     faqAnswer.style.fontWeight = "400";
//   //     faqItem.style.padding = "16px 0px";
//   //     faqAnswer.style.justifyContent = "center";
//   //     faqAnswer.style.alignItems = "center";
//   //     faqAnswer.style.lineHeight = "16.94px";
//   //     faqAnswer.style.padding = "0px 12px 4px 12px";
//   //     // Toggle answer visibility on click

//   //     const faqBR = document.createElement("div");
//   //     faqBR.style.height = "1px";
//   //     faqBR.style.borderBottom = "1px solid #f0f0f0";
//   //     faqBR.style.padding = "0px";
//   //     faqBR.style.margin = "0px";
//   //     faqBR.style.display = "none";

//   //     faqItemOuter.addEventListener("click", () => {
//   //       faqAnswer.style.display =
//   //         faqAnswer.style.display === "none" ? "inline-flex" : "none";
//   //       dropdownArrow.style.transform =
//   //         faqAnswer.style.display === "none" ? "rotate(0deg)" : "rotate(-180deg)";
//   //       // faqBR.style.display = faqBR.style.display === "none" ? "block" : "none";
//   //       faqItem.style.padding =
//   //         faqItem.style.padding === "16px 0px" ? "16px 0px 8px 0px" : "16px 0px";
//   //     });
//   //     faqItemOuter.appendChild(faqNumber);
//   //     faqItemOuter.appendChild(faqItem);
//   //     faqItemOuter.appendChild(dropdownArrow);
//   //     faqContainerPoints.appendChild(faqItemOuter);
//   //     faqContainerPoints.appendChild(faqAnswer);
//   //     // faqContainerPoints.appendChild(faqBR);
//   //   });

//   /////////////////////////////////////////////////////////////
//   scrollDiv.appendChild(mainScreenContainer);
//   ////////////////////////////////////////////////////////////////
//   // Create the main container div
//   const balanceContainer = document.createElement("div");
//   balanceContainer.style.display = "flex";
//   balanceContainer.style.flexDirection = "column";
//   balanceContainer.style.alignItems = "flex-start";
//   balanceContainer.style.padding = "0px";
//   balanceContainer.style.gap = "8px";
//   balanceContainer.style.width = "100";
//   balanceContainer.style.height = "auto";
//   balanceContainer.style.flex = "none";
//   balanceContainer.style.order = "1";
//   // balanceContainer.style.alignSelf = "stretch";
//   balanceContainer.style.flexGrow = "0";
//   balanceContainer.style.margin = "16px";

//   // Create Blisscoins balance element
//   const rewardBalanceText = document.createElement("div");
//   rewardBalanceText.style.width = "auto";
//   rewardBalanceText.style.height = "15px";
//   rewardBalanceText.style.fontFamily = fontFamilyName;
//   rewardBalanceText.style.fontStyle = "normal";
//   rewardBalanceText.style.fontWeight = "400";
//   rewardBalanceText.style.fontSize = "12px";
//   rewardBalanceText.style.lineHeight = "15px";
//   rewardBalanceText.style.textTransform = "uppercase";
//   rewardBalanceText.style.color = "rgba(0, 0, 0, 0.42)";
//   rewardBalanceText.style.flex = "none";
//   rewardBalanceText.style.order = "0";
//   rewardBalanceText.style.flexGrow = "0";
//   // Set the text content for Blisscoins balance element

//   // Create Wallet balance container
//   const walletBalanceContainer = document.createElement("div");
//   walletBalanceContainer.style.display = "flex";
//   walletBalanceContainer.style.flexDirection = "column";
//   walletBalanceContainer.style.alignItems = "flex-start";
//   walletBalanceContainer.style.padding = "8px 16px";
//   walletBalanceContainer.style.gap = "4px";
//   walletBalanceContainer.style.width = "100%";
//   walletBalanceContainer.style.height = "auto";
//   walletBalanceContainer.style.background = "#FFFFFF";
//   walletBalanceContainer.style.border = "1px solid #F0F0F0";
//   walletBalanceContainer.style.borderRadius = "8px";
//   walletBalanceContainer.style.flex = "none";
//   walletBalanceContainer.style.order = "1";
//   walletBalanceContainer.style.alignSelf = "stretch";
//   walletBalanceContainer.style.flexGrow = "0";

//   // Create Wallet balance text
//   const walletBalanceText = document.createElement("div");
//   walletBalanceText.style.width = "311px";
//   walletBalanceText.style.height = "17px";
//   walletBalanceText.style.fontFamily = fontFamilyName;
//   walletBalanceText.style.fontStyle = "normal";
//   walletBalanceText.style.fontWeight = "400";
//   walletBalanceText.style.fontSize = "14px";
//   walletBalanceText.style.lineHeight = "17px";
//   walletBalanceText.style.color = "#949494";
//   walletBalanceText.style.flex = "none";
//   walletBalanceText.style.order = "0";
//   walletBalanceText.style.alignSelf = "stretch";
//   walletBalanceText.style.flexGrow = "0";

//   // Set the text content for Wallet balance text
//   walletBalanceText.textContent = "Wallet balance";

//   // Create ₹63.39 element
//   const amountElement = document.createElement("div");
//   amountElement.style.width = "311px";
//   amountElement.style.height = "34px";
//   amountElement.style.fontFamily = fontFamilyName;
//   amountElement.style.fontStyle = "normal";
//   amountElement.style.fontWeight = "400";
//   amountElement.style.fontSize = "28px";
//   amountElement.style.lineHeight = "34px";
//   amountElement.style.color = "#4D4D4D";
//   amountElement.style.flex = "none";
//   amountElement.style.order = "1";
//   amountElement.style.alignSelf = "stretch";
//   amountElement.style.flexGrow = "0";

//   const expirationElement = document.createElement("div");
//   expirationElement.style.width = "311px";
//   expirationElement.style.height = "17px";
//   expirationElement.style.fontFamily = fontFamilyName;
//   expirationElement.style.fontStyle = "normal";
//   expirationElement.style.fontWeight = "400";
//   expirationElement.style.fontSize = "14px";
//   expirationElement.style.lineHeight = "17px";
//   expirationElement.style.color = "#C7981F";
//   expirationElement.style.flex = "none";
//   expirationElement.style.order = "2";
//   expirationElement.style.alignSelf = "stretch";
//   expirationElement.style.flexGrow = "0";

//   // expirationElement.textContent = "Expiring in 30 days";

//   // Append child elements to the main container
//   balanceContainer.appendChild(rewardBalanceText);
//   balanceContainer.appendChild(walletBalanceContainer);
//   walletBalanceContainer.appendChild(walletBalanceText);
//   walletBalanceContainer.appendChild(amountElement);

//   const footerDiv = document.createElement("div");
//   footerDiv.style.display = "flex";
//   footerDiv.style.botton = "14";
//   footerDiv.style.height = "54px";
//   footerDiv.style.alignItems = "center";
//   footerDiv.style.justifyContent = "center";
//   footerDiv.style.width = "100%;";
//   footerDiv.style.position = "relative";
//   footerDiv.style.marginTop = "auto";
//   footerDiv.style.order = "2";

//   const footerSvg = `<svg width="111" height="14" viewBox="0 0 111 14" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
// <path d="M0.5 11.7H10.5V1.7H0.5V11.7Z" fill="url(#pattern0)"/>
// <path d="M14.88 11.12C14.4067 11.12 13.9667 11.0333 13.56 10.86C13.16 10.6867 12.8133 10.4467 12.52 10.14C12.2333 9.82667 12.0233 9.46333 11.89 9.05L13.02 8.56C13.2 8.98667 13.46 9.32333 13.8 9.57C14.14 9.81 14.5233 9.93 14.95 9.93C15.19 9.93 15.3967 9.89333 15.57 9.82C15.75 9.74 15.8867 9.63333 15.98 9.5C16.08 9.36667 16.13 9.20667 16.13 9.02C16.13 8.8 16.0633 8.62 15.93 8.48C15.8033 8.33333 15.61 8.22 15.35 8.14L13.92 7.68C13.34 7.5 12.9033 7.23 12.61 6.87C12.3167 6.51 12.17 6.08667 12.17 5.6C12.17 5.17333 12.2733 4.79667 12.48 4.47C12.6933 4.14333 12.9867 3.89 13.36 3.71C13.74 3.52333 14.1733 3.43 14.66 3.43C15.1067 3.43 15.5167 3.51 15.89 3.67C16.2633 3.82333 16.5833 4.04 16.85 4.32C17.1233 4.59333 17.3267 4.91667 17.46 5.29L16.34 5.79C16.1933 5.41667 15.9733 5.13 15.68 4.93C15.3867 4.72333 15.0467 4.62 14.66 4.62C14.4333 4.62 14.2333 4.66 14.06 4.74C13.8867 4.81333 13.75 4.92 13.65 5.06C13.5567 5.19333 13.51 5.35333 13.51 5.54C13.51 5.74667 13.5767 5.93 13.71 6.09C13.8433 6.24333 14.0467 6.36333 14.32 6.45L15.69 6.88C16.2833 7.07333 16.7267 7.34 17.02 7.68C17.32 8.02 17.47 8.44 17.47 8.94C17.47 9.36667 17.36 9.74333 17.14 10.07C16.92 10.3967 16.6167 10.6533 16.23 10.84C15.8433 11.0267 15.3933 11.12 14.88 11.12ZM20.9646 11.12C20.4046 11.12 19.9146 10.9933 19.4946 10.74C19.0746 10.4867 18.7479 10.1433 18.5146 9.71C18.2813 9.27667 18.1646 8.79667 18.1646 8.27C18.1646 7.72333 18.2813 7.24 18.5146 6.82C18.7546 6.39333 19.0779 6.05667 19.4846 5.81C19.8979 5.56333 20.3579 5.44 20.8646 5.44C21.2913 5.44 21.6646 5.51 21.9846 5.65C22.3113 5.79 22.5879 5.98333 22.8146 6.23C23.0413 6.47667 23.2146 6.76 23.3346 7.08C23.4546 7.39333 23.5146 7.73333 23.5146 8.1C23.5146 8.19333 23.5079 8.29 23.4946 8.39C23.4879 8.49 23.4713 8.57667 23.4446 8.65H19.2446V7.65H22.7046L22.0846 8.12C22.1446 7.81333 22.1279 7.54 22.0346 7.3C21.9479 7.06 21.8013 6.87 21.5946 6.73C21.3946 6.59 21.1513 6.52 20.8646 6.52C20.5913 6.52 20.3479 6.59 20.1346 6.73C19.9213 6.86333 19.7579 7.06333 19.6446 7.33C19.5379 7.59 19.4979 7.90667 19.5246 8.28C19.4979 8.61333 19.5413 8.91 19.6546 9.17C19.7746 9.42333 19.9479 9.62 20.1746 9.76C20.4079 9.9 20.6746 9.97 20.9746 9.97C21.2746 9.97 21.5279 9.90667 21.7346 9.78C21.9479 9.65333 22.1146 9.48333 22.2346 9.27L23.2946 9.79C23.1879 10.05 23.0213 10.28 22.7946 10.48C22.5679 10.68 22.2979 10.8367 21.9846 10.95C21.6779 11.0633 21.3379 11.12 20.9646 11.12ZM26.9277 11.12C26.3877 11.12 25.901 10.9967 25.4677 10.75C25.041 10.4967 24.7043 10.1567 24.4577 9.73C24.211 9.29667 24.0877 8.81 24.0877 8.27C24.0877 7.73 24.211 7.24667 24.4577 6.82C24.7043 6.39333 25.041 6.05667 25.4677 5.81C25.901 5.56333 26.3877 5.44 26.9277 5.44C27.3143 5.44 27.6743 5.51 28.0077 5.65C28.341 5.78333 28.6277 5.97 28.8677 6.21C29.1143 6.44333 29.291 6.72333 29.3977 7.05L28.2477 7.55C28.1477 7.27667 27.9777 7.05667 27.7377 6.89C27.5043 6.72333 27.2343 6.64 26.9277 6.64C26.641 6.64 26.3843 6.71 26.1577 6.85C25.9377 6.99 25.7643 7.18333 25.6377 7.43C25.511 7.67667 25.4477 7.96 25.4477 8.28C25.4477 8.6 25.511 8.88333 25.6377 9.13C25.7643 9.37667 25.9377 9.57 26.1577 9.71C26.3843 9.85 26.641 9.92 26.9277 9.92C27.241 9.92 27.5143 9.83667 27.7477 9.67C27.981 9.50333 28.1477 9.28 28.2477 9L29.3977 9.52C29.291 9.82667 29.1177 10.1033 28.8777 10.35C28.6377 10.59 28.351 10.78 28.0177 10.92C27.6843 11.0533 27.321 11.12 26.9277 11.12ZM32.1316 11.12C31.7116 11.12 31.345 11.0267 31.0316 10.84C30.725 10.6533 30.4883 10.3933 30.3216 10.06C30.1616 9.72667 30.0816 9.33667 30.0816 8.89V5.56H31.3916V8.78C31.3916 9.00667 31.435 9.20667 31.5216 9.38C31.615 9.54667 31.745 9.68 31.9116 9.78C32.085 9.87333 32.2783 9.92 32.4916 9.92C32.705 9.92 32.895 9.87333 33.0616 9.78C33.2283 9.68 33.3583 9.54333 33.4516 9.37C33.545 9.19667 33.5916 8.99 33.5916 8.75V5.56H34.9016V11H33.6616V9.93L33.7716 10.12C33.645 10.4533 33.435 10.7033 33.1416 10.87C32.855 11.0367 32.5183 11.12 32.1316 11.12ZM35.9194 11V5.56H37.1494V6.77L37.0494 6.59C37.176 6.18333 37.3727 5.9 37.6394 5.74C37.9127 5.58 38.2394 5.5 38.6194 5.5H38.9394V6.66H38.4694C38.096 6.66 37.796 6.77667 37.5694 7.01C37.3427 7.23667 37.2294 7.55667 37.2294 7.97V11H35.9194ZM42.0396 11.12C41.4796 11.12 40.9896 10.9933 40.5696 10.74C40.1496 10.4867 39.8229 10.1433 39.5896 9.71C39.3563 9.27667 39.2396 8.79667 39.2396 8.27C39.2396 7.72333 39.3563 7.24 39.5896 6.82C39.8296 6.39333 40.1529 6.05667 40.5596 5.81C40.9729 5.56333 41.4329 5.44 41.9396 5.44C42.3663 5.44 42.7396 5.51 43.0596 5.65C43.3863 5.79 43.6629 5.98333 43.8896 6.23C44.1163 6.47667 44.2896 6.76 44.4096 7.08C44.5296 7.39333 44.5896 7.73333 44.5896 8.1C44.5896 8.19333 44.5829 8.29 44.5696 8.39C44.5629 8.49 44.5463 8.57667 44.5196 8.65H40.3196V7.65H43.7796L43.1596 8.12C43.2196 7.81333 43.2029 7.54 43.1096 7.3C43.0229 7.06 42.8763 6.87 42.6696 6.73C42.4696 6.59 42.2263 6.52 41.9396 6.52C41.6663 6.52 41.4229 6.59 41.2096 6.73C40.9963 6.86333 40.8329 7.06333 40.7196 7.33C40.6129 7.59 40.5729 7.90667 40.5996 8.28C40.5729 8.61333 40.6163 8.91 40.7296 9.17C40.8496 9.42333 41.0229 9.62 41.2496 9.76C41.4829 9.9 41.7496 9.97 42.0496 9.97C42.3496 9.97 42.6029 9.90667 42.8096 9.78C43.0229 9.65333 43.1896 9.48333 43.3096 9.27L44.3696 9.79C44.2629 10.05 44.0963 10.28 43.8696 10.48C43.6429 10.68 43.3729 10.8367 43.0596 10.95C42.7529 11.0633 42.4129 11.12 42.0396 11.12ZM47.9127 11.12C47.386 11.12 46.916 10.9967 46.5027 10.75C46.0893 10.4967 45.7627 10.1533 45.5227 9.72C45.2827 9.28667 45.1627 8.80667 45.1627 8.28C45.1627 7.74667 45.2827 7.26667 45.5227 6.84C45.7627 6.41333 46.0893 6.07333 46.5027 5.82C46.9227 5.56667 47.3893 5.44 47.9027 5.44C48.316 5.44 48.6827 5.52333 49.0027 5.69C49.3293 5.85 49.586 6.07667 49.7727 6.37L49.5727 6.64V3.43H50.8827V11H49.6427V9.95L49.7827 10.21C49.596 10.5033 49.336 10.73 49.0027 10.89C48.6693 11.0433 48.306 11.12 47.9127 11.12ZM48.0527 9.92C48.3527 9.92 48.616 9.85 48.8427 9.71C49.0693 9.57 49.246 9.37667 49.3727 9.13C49.506 8.88333 49.5727 8.6 49.5727 8.28C49.5727 7.96667 49.506 7.68667 49.3727 7.44C49.246 7.18667 49.0693 6.99 48.8427 6.85C48.616 6.71 48.3527 6.64 48.0527 6.64C47.7593 6.64 47.496 6.71333 47.2627 6.86C47.0293 7 46.846 7.19333 46.7127 7.44C46.586 7.68 46.5227 7.96 46.5227 8.28C46.5227 8.6 46.586 8.88333 46.7127 9.13C46.846 9.37667 47.0293 9.57 47.2627 9.71C47.496 9.85 47.7593 9.92 48.0527 9.92ZM56.4488 11.12C56.0554 11.12 55.6921 11.0433 55.3588 10.89C55.0321 10.73 54.7721 10.5033 54.5788 10.21L54.7088 9.95V11H53.4788V3.43H54.7888V6.64L54.5888 6.37C54.7754 6.07667 55.0288 5.85 55.3488 5.69C55.6688 5.52333 56.0388 5.44 56.4588 5.44C56.9721 5.44 57.4354 5.56667 57.8488 5.82C58.2621 6.07333 58.5888 6.41333 58.8288 6.84C59.0754 7.26667 59.1988 7.74667 59.1988 8.28C59.1988 8.80667 59.0788 9.28667 58.8388 9.72C58.5988 10.1533 58.2721 10.4967 57.8588 10.75C57.4454 10.9967 56.9754 11.12 56.4488 11.12ZM56.2988 9.92C56.5988 9.92 56.8654 9.85 57.0988 9.71C57.3321 9.57 57.5121 9.37667 57.6388 9.13C57.7721 8.88333 57.8388 8.6 57.8388 8.28C57.8388 7.96 57.7721 7.68 57.6388 7.44C57.5121 7.19333 57.3321 7 57.0988 6.86C56.8654 6.71333 56.5988 6.64 56.2988 6.64C56.0121 6.64 55.7521 6.71 55.5188 6.85C55.2921 6.99 55.1121 7.18667 54.9788 7.44C54.8521 7.68667 54.7888 7.96667 54.7888 8.28C54.7888 8.6 54.8521 8.88333 54.9788 9.13C55.1121 9.37667 55.2921 9.57 55.5188 9.71C55.7521 9.85 56.0121 9.92 56.2988 9.92ZM60.5598 13.21C60.4132 13.21 60.2698 13.1967 60.1298 13.17C59.9898 13.15 59.8632 13.1133 59.7498 13.06V11.96C59.8365 11.98 59.9398 12 60.0598 12.02C60.1865 12.04 60.3032 12.05 60.4098 12.05C60.7098 12.05 60.9265 11.98 61.0598 11.84C61.1998 11.7 61.3232 11.5167 61.4298 11.29L61.7898 10.45L61.7698 11.55L59.3998 5.56H60.8098L62.4698 9.98H61.9698L63.6198 5.56H65.0398L62.6698 11.55C62.5298 11.9033 62.3598 12.2033 62.1598 12.45C61.9598 12.6967 61.7265 12.8833 61.4598 13.01C61.1998 13.1433 60.8998 13.21 60.5598 13.21Z" fill="#949494"/>
// <g clip-path="url(#clip0_1295_5057)">
// <path d="M72.439 5.40364L69.7543 8.08682C69.2387 8.60221 68.4024 8.60221 67.8868 8.08682C67.3711 7.57143 67.3711 6.73566 67.8868 6.22027L69.6378 4.47053C70.1535 3.95514 70.9897 3.95514 71.5054 4.47053L72.439 5.40364Z" fill="#949494"/>
// <path d="M68.8336 10.6491L71.5183 7.96589C72.034 7.4505 72.8702 7.4505 73.3859 7.96589C73.9016 8.48128 73.9016 9.31705 73.3859 9.83244L71.6352 11.5822C71.1195 12.0976 70.2833 12.0976 69.7676 11.5822L68.8339 10.6491H68.8336Z" fill="#949494"/>
// </g>
// <path fill-rule="evenodd" clip-rule="evenodd" d="M102.008 3H101.125V3.00733C99.9391 3.00988 99.1778 3.79047 99.1778 4.99282V5.6004V6.83726V10.9384H100.64V6.97605H101.768V5.6004H100.64V5.01452C100.64 4.41778 101.066 4.27674 101.393 4.27674H102.007V3.23757H102.008V3ZM82.4567 7.80288C82.4894 7.217 82.8496 6.76131 83.4607 6.76131C84.1591 6.76131 84.4537 7.22785 84.4537 7.82458V10.9384H85.9051V7.57504C85.9051 6.40327 85.2722 5.45935 83.9081 5.45935C83.3952 5.45935 82.8059 5.63295 82.4567 6.04523V3.00732L81.0053 3.37218V10.9384H82.4567V7.80288ZM75.9535 9.45203C76.019 10.0596 76.5755 11.1012 78.1906 11.1012C79.5983 11.1012 80.2749 10.2115 80.2749 9.34354C80.2749 8.56236 79.7402 7.92223 78.6816 7.70524L77.9178 7.54249C77.6231 7.48824 77.4267 7.3255 77.4267 7.0651C77.4267 6.76131 77.7322 6.53347 78.1142 6.53347C78.7253 6.53347 78.9545 6.93491 78.9981 7.24955L80.2094 6.97831C80.1439 6.40327 79.631 5.43765 78.1033 5.43765C76.9465 5.43765 76.0954 6.22968 76.0954 7.18445C76.0954 7.93308 76.5646 8.55151 77.6013 8.77935L78.3106 8.9421C78.7253 9.0289 78.889 9.22419 78.889 9.46288C78.889 9.74498 78.6598 9.99452 78.1797 9.99452C77.5467 9.99452 77.2303 9.60393 77.1975 9.18079L75.9535 9.45203ZM87.9892 8.26942C87.9892 9.26759 88.644 9.78837 89.3533 9.78837C90.0626 9.78837 90.7174 9.27844 90.7174 8.26942C90.7174 7.2604 90.0626 6.75046 89.3533 6.75046C88.644 6.75046 87.9892 7.2604 87.9892 8.26942ZM86.5378 8.26942C86.5378 6.62027 87.7491 5.43765 89.3533 5.43765C90.9574 5.43765 92.1687 6.62027 92.1687 8.26942C92.1687 9.90772 90.9574 11.1012 89.3533 11.1012C87.7491 11.1012 86.5378 9.90772 86.5378 8.26942ZM94.3293 12.9999V10.4177C94.5912 10.7757 95.1368 11.0686 95.8788 11.0686C97.3957 11.0686 98.4106 9.87517 98.4106 8.25857C98.4106 6.67452 97.5048 5.48105 95.9334 5.48105C95.1259 5.48105 94.5257 5.83909 94.2856 6.25138L93.9865 5.6655L92.8779 5.90961V12.9999H94.3293ZM96.981 8.26942C96.981 9.22419 96.3917 9.77752 95.6497 9.77752C94.9076 9.77752 94.3074 9.21334 94.3074 8.26942C94.3074 7.3255 94.9076 6.77216 95.6497 6.77216C96.3917 6.77216 96.981 7.3255 96.981 8.26942ZM104.028 10.9384V3.00732L102.576 3.33824V10.9384H104.028ZM106.193 8.26942C106.193 9.26759 106.848 9.78837 107.557 9.78837C108.266 9.78837 108.921 9.27844 108.921 8.26942C108.921 7.2604 108.266 6.75046 107.557 6.75046C106.848 6.75046 106.193 7.2604 106.193 8.26942ZM104.741 8.26942C104.741 6.62027 105.953 5.43765 107.557 5.43765C109.161 5.43765 110.372 6.62027 110.372 8.26942C110.372 9.90772 109.161 11.1012 107.557 11.1012C105.953 11.1012 104.741 9.90772 104.741 8.26942Z" fill="#949494"/>
// <defs>
// <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
// <use xlink:href="#image0_1295_5057" transform="scale(0.00625)"/>
// </pattern>
// <clipPath id="clip0_1295_5057">
// <rect width="6.27229" height="8.13535" fill="white" transform="translate(67.5 4.08398)"/>
// </clipPath>
// <image id="image0_1295_5057" width="160" height="160" xlink:href="data:image/png;base64,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"/>
// </defs>
// </svg>
// `;

//   const footerElement = parser
//     .parseFromString(footerSvg, "image/svg+xml")
//     .querySelector("svg");
//   footerDiv.appendChild(footerElement);
//   scrollDiv.appendChild(footerDiv);

//   const backButtonSvg = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M19 12H5" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M12 19L5 12L12 5" stroke="#6E6E6E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>`;

//   const backButton = parser
//     .parseFromString(backButtonSvg, "image/svg+xml")
//     .querySelector("svg");
//   backButton.style.position = "relative";
//   backButton.onclick = goBack;
//   backButton.style.cursor = "pointer";
//   backButton.style.flexDirection = "column";

//   const earnRewardsTextContainer = document.createElement("div");
//   earnRewardsTextContainer.style.width = "auto";
//   earnRewardsTextContainer.style.height = "auto";
//   earnRewardsTextContainer.style.fontFamily = fontFamilyName;
//   earnRewardsTextContainer.style.fontStyle = "normal";
//   earnRewardsTextContainer.style.fontWeight = "500";
//   earnRewardsTextContainer.style.fontSize = "16px";
//   earnRewardsTextContainer.style.lineHeight = "19px";
//   earnRewardsTextContainer.style.color = "#4D4D4D";
//   earnRewardsTextContainer.style.flex = "none";
//   earnRewardsTextContainer.style.order = "1";
//   earnRewardsTextContainer.style.alignSelf = "stretch";
//   earnRewardsTextContainer.style.flexGrow = "0";
//   earnRewardsTextContainer.style.margin = "16px";

//   // Set the text content for the text container

//   const transactionContainer = document.createElement("div");
//   transactionContainer.style.display = "flex";
//   transactionContainer.style.position = "relative";
//   transactionContainer.style.flexDirection = "row";
//   transactionContainer.style.alignItems = "center";
//   transactionContainer.style.padding = "16px";
//   transactionContainer.style.gap = "12px";
//   transactionContainer.style.width = "100%";
//   transactionContainer.style.fontFamily = fontFamilyName;
//   transactionContainer.style.height = "60px";
//   transactionContainer.style.background = "#FFFFFF";
//   transactionContainer.style.flex = "none";
//   transactionContainer.style.order = "0";
//   transactionContainer.style.alignSelf = "stretch";
//   transactionContainer.style.flexGrow = "0";
//   transactionContainer.style.margin = "0px 0px 8px 0px";
//   transactionContainer.style.borderBottom = "1px solid #f0f0f0";
//   transactionContainer.style.borderTop = "1px solid #f0f0f0";
//   const transactionSvg = `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0_1307_7592)">
// <path d="M1.08972 4.68652V10.6865H7.08972" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M3.59972 15.6865C4.24812 17.5268 5.47706 19.1067 7.10138 20.1878C8.7257 21.269 10.6574 21.7931 12.6054 21.6809C14.5535 21.5688 16.4123 20.8266 17.9018 19.5662C19.3914 18.3058 20.431 16.5954 20.8639 14.6928C21.2969 12.7902 21.0998 10.7984 20.3023 9.01757C19.5049 7.23672 18.1502 5.76327 16.4426 4.81924C14.7349 3.87521 12.7666 3.51174 10.8344 3.78359C8.90217 4.05544 7.11063 4.94789 5.72972 6.32647L1.08972 10.6865" stroke="#4D4D4D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
// </g>
// <defs>
// <clipPath id="clip0_1307_7592">
// <rect width="24" height="24" fill="white" transform="translate(0.0897217 0.686523)"/>
// </clipPath>
// </defs>
// </svg>
// `;

//   const transactionSvgElement = parser
//     .parseFromString(transactionSvg, "image/svg+xml")
//     .querySelector("svg");
//   transactionSvgElement.style.flexDirection = "column";

//   transactionContainer.appendChild(transactionSvgElement);

//   const transactionText = document.createElement("div");
//   transactionText.style.display = "flex";
//   transactionText.style.flexDirection = "column";
//   transactionText.style.alignItems = "flex-start";
//   transactionText.style.padding = "0px";
//   transactionText.style.justifyContent = "space-between";
//   transactionText.style.gap = "2px";
//   transactionText.style.width = "259px";
//   transactionText.style.height = "24px";
//   transactionText.style.flex = "none";
//   transactionText.style.fontFamily = fontFamilyName;
//   transactionText.style.fontSize = "14px";
//   transactionText.style.order = "0";
//   transactionText.style.flexGrow = "0";
//   transactionText.style.color = "#4D4D4D";

//   // Set the text content for the transactionText
//   transactionText.textContent = "View transactions";
//   transactionContainer.appendChild(transactionText);

//   const transactionActionDiv = document.createElement("div");
//   transactionActionDiv.style.cursor = "pointer";
//   transactionActionDiv.style.display = "flex";
//   transactionActionDiv.style.flexDirection = "column";
//   transactionActionDiv.style.alignItems = "flex-start";
//   transactionActionDiv.style.padding = "0px";
//   transactionActionDiv.style.justifyContent = "center";
//   transactionActionDiv.style.gap = "2px";
//   transactionActionDiv.style.width = "16px";
//   transactionActionDiv.style.height = "24px";
//   transactionActionDiv.style.flex = "none";
//   transactionActionDiv.style.fontFamily = fontFamilyName;
//   transactionActionDiv.style.fontSize = "16px";
//   transactionActionDiv.style.order = "0";
//   transactionActionDiv.style.flexGrow = "0";
//   transactionActionDiv.style.marginLeft = "auto";
//   transactionActionDiv.onclick = openTransaction;

//   const transactionActionSvg = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M3.33337 8H12.6667" stroke="#4D4D4D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
// <path d="M8 3.33325L12.6667 7.99992L8 12.6666" stroke="#4D4D4D" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>
// </svg>
// `;

//   const transactionActionSvgElement = parser
//     .parseFromString(transactionActionSvg, "image/svg+xml")
//     .querySelector("svg");
//   transactionActionSvgElement.style.flexDirection = "column";

//   transactionActionDiv.appendChild(transactionActionSvgElement);
//   transactionContainer.appendChild(transactionActionDiv);

//   const transactionDetailsContainer = document.createElement("div");
//   transactionDetailsContainer.style.display = "flex";
//   transactionDetailsContainer.style.flexDirection = "column";
//   transactionDetailsContainer.style.alignItems = "flex-start";
//   transactionDetailsContainer.style.padding = "0px";
//   transactionDetailsContainer.style.gap = "8px";
//   // transactionDetailsContainer.style.width = "100%";
//   transactionDetailsContainer.style.height = "286px";
//   transactionDetailsContainer.style.flex = "none";
//   transactionDetailsContainer.style.order = "1";
//   // transactionDetailsContainer.style.alignSelf = "stretch";
//   transactionDetailsContainer.style.flexGrow = "0";
//   transactionDetailsContainer.style.margin = "16px";

//   const transactionDetailsText = document.createElement("div");
//   transactionDetailsText.style.width = "auto";
//   transactionDetailsText.style.height = "auto";
//   transactionDetailsText.style.fontFamily = fontFamilyName;
//   transactionDetailsText.style.fontStyle = "normal";
//   transactionDetailsText.style.fontWeight = "500";
//   transactionDetailsText.style.fontSize = "12px";
//   transactionDetailsText.style.lineHeight = "15px";
//   transactionDetailsText.style.textTransform = "uppercase";
//   transactionDetailsText.style.color = "rgba(0, 0, 0, 0.42)";
//   transactionDetailsText.style.flex = "none";
//   transactionDetailsText.style.order = "0";
//   transactionDetailsText.style.flexGrow = "0";
//   transactionDetailsText.style.padding = "0px 4px";
//   transactionDetailsText.textContent = "Transactions";

//   // Create Wallet balance container
//   const wallettransactionDetailsContainer = document.createElement("div");
//   wallettransactionDetailsContainer.style.display = "flex";
//   wallettransactionDetailsContainer.style.flexDirection = "column";
//   // wallettransactionDetailsContainer.style.border = "1px solid #F0F0F0";
//   // wallettransactionDetailsContainer.className = "scroll-div";
//   wallettransactionDetailsContainer.style.msOverflowStyle = "none";
//   wallettransactionDetailsContainer.style.scrollbarWidth = "none";
//   // wallettransactionDetailsContainer.style.overflow = "auto";
//   // wallettransactionDetailsContainer.style.borderRadius = "16px";
//   wallettransactionDetailsContainer.style.height = "234px";

//   // Create table element
//   const table = document.createElement("table");
//   table.style.borderCollapse = "collapse";
//   table.style.width = "100%";
//   table.style.boxShadow = "none";
//   table.style.fontFamily = fontFamilyName;
//   // Create table header
//   const thead = document.createElement("thead");
//   const headerRow = document.createElement("tr");

//   const headers = ["AMOUNT", "EVENT"];
//   headers.forEach((headerText, index) => {
//     const th = document.createElement("th");
//     th.style.border = "1px solid #F0F0F0F";
//     th.style.textAlign = "start";
//     // th.style.borderRadius = "0px 8px 0px 8px";
//     th.style.background = "#FAFAFA";
//     th.style.padding = "0px 12px 0px";
//     th.style.borderWidth = "0px 0px";
//     th.style.color = "rgba(0, 0, 0, 0.42)";
//     th.style.fontSize = "10px";
//     // th.style.padding = "0px 8px";
//     th.textContent = headerText;
//     if (index === 0) {
//       th.style.width = "32%";
//       th.style.borderRadius = "8px 0px 0px 0px";
//     } else {
//       th.style.width = "68%";
//       th.style.borderRadius = "0px 8px 0px 0px";
//     }

//     headerRow.appendChild(th);
//   });

//   thead.appendChild(headerRow);
//   thead.style.height = "26px";
//   // thead.style.position = "sticky";
//   // thead.style.top = "0";
//   // thead.style.zIndex = "1";
//   thead.style.display = "table";
//   thead.style.tableLayout = "fixed";
//   thead.style.width = "100%";
//   // thead.style.position = "fixed";
//   table.appendChild(thead);

//   // Create table body with sample data

//   const tbody = document.createElement("tbody");
//   tbody.style.maxHeight = "208px";
//   tbody.style.overflowY = "scroll";
//   tbody.style.display = "block";
//   tbody.style.borderRadius = "0px 0px 8px 8px";
//   tbody.style.border = "1px solid #f0f0f0";
//   table.appendChild(tbody);

//   wallettransactionDetailsContainer.appendChild(table);

//   transactionDetailsContainer.appendChild(transactionDetailsText);
//   transactionDetailsContainer.appendChild(wallettransactionDetailsContainer);

//   function resizeCss() {
//     const mediaQueryWidth = window.matchMedia("(max-width: 600px)");
//     const mediaQueryHeight = window.matchMedia("(max-height: 660px)");
//     // console.log(mediaQuery);
//     if (mediaQueryWidth.matches) {
//       mainPanel.style.minWidth = "100vw";
//       mainPanel.style.minHeight = "100vh";
//       scrollDiv.style.minWidth = "100vw";
//       scrollDiv.style.minHeight = "100vh";
//       scrollDiv.style.width = "100vw";
//       phoneNumberContainer.style.width = "100%";
//       mainPanel.style.top = "0px";
//       mainPanel.style.left = "0px";
//       mainPanel.style.borderRadius = "0px";
//     } else if (!mediaQueryWidth.matches && mediaQueryHeight.matches) {
//       // mainPanel.style.minWidth = "100vw";
//       mainPanel.style.minHeight = "100vh";
//       // scrollDiv.style.minWidth = "100vw";
//       scrollDiv.style.minHeight = "100vh";
//       // scrollDiv.style.width = "100vw";
//       // phoneNumberContainer.style.width = "100%";
//       mainPanel.style.top = "0px";
//       mainPanel.style.left = "0px";
//       mainPanel.style.borderRadius = "0px";
//     } else {
//       mainPanel.style.minWidth = "375px";
//       mainPanel.style.minHeight = "600px";
//       scrollDiv.style.minWidth = "375px";
//       scrollDiv.style.minHeight = "600px";
//       scrollDiv.style.width = "375px";
//       mainPanel.style.left = "10px";
//       mainPanel.style.removeProperty("top");
//       phoneNumberContainer.style.width = "281px";
//       mainPanel.style.borderRadius = "16px";
//     }
//   }

//   resizeCss();
//   function openMainScreen() {
//     toggleWidget();
//   }
//   function checkRewardPoints() {
//     const merchantId = accountID;
//     // const merchantId = "081418d4-1d30-4e25-bfc0-851fb6df5e13";
//     // const merchantId = "33107440-839a-41ea-a544-267d3be3d402";
//     // console.log(accountID);
//     const countryCodeValue = countryCode.value.replace(/\s/g, "");
//     const phoneNumberEndPoint = countryCodeValue + phoneNumber.value;
//     // console.log(phoneNumberEndPoint);
//     // const phoneNumberEndPoint = "+917777777777";
//     const url = `https://api.shopflo.co/banksy/api/v1/issuer/8d593cf0-99a5-4c0b-8988-0069fff0c197/merchant/${merchantId}/user-wallet/user-wallet-details?phone-number=${encodeURIComponent(
//       phoneNumberEndPoint
//     )}`;

//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data.success);
//         const coinName = data.data.coin_name;
//         const coinNamePlural = data.data.coin_name_plural.toLowerCase();
//         const totalBalance = data.data.total_balance;
//         const burnMultiplier = data.data.burn_multiplier;
//         const earnMultiplier = data.data.earn_multiplier;
//         const walletExists = data.data.wallet_exists;
//         const coinExpirationAmount = data.data.coin_expiry_details.amount;
//         const coinExpirationExpiry = data.data.coin_expiry_details.expiry;
//         const coinExpirationTimeUnit =
//           data.data.coin_expiry_details.time_unit.toLowerCase();

//         if (walletExists) {
//           mainScreenContainer.insertBefore(
//             transactionContainer,
//             earnRewardsContainer
//           );
//           if (totalBalance === "0") {
//             rewardBalanceText.textContent =
//               "No rewards found for " +
//               countryCode.value +
//               " " +
//               phoneNumber.value;
//             expirationElement.textContent = "Rewards expired";
//             amountElement.textContent = "₹" + totalBalance;
//           } else if (totalBalance === "1") {
//             rewardBalanceText.innerHTML =
//               coinName +
//               " balance for <span style='color:#4D4D4D;'>" +
//               countryCode.value +
//               " " +
//               phoneNumber.value +
//               "</span>";

//             amountElement.textContent = "₹" + totalBalance;
//             expirationElement.textContent = "Rewards expired";
//           } else {
//             rewardBalanceText.innerHTML =
//               coinNamePlural +
//               " balance for <span style='color:#4D4D4D;'>" +
//               countryCode.value +
//               " " +
//               phoneNumber.value +
//               "</span>";

//             amountElement.textContent = "₹" + totalBalance;
//             expirationElement.textContent =
//               "₹" +
//               coinExpirationAmount +
//               " expiring in " +
//               coinExpirationExpiry +
//               " " +
//               coinExpirationTimeUnit;
//           }
//           if (coinExpirationAmount > 0) {
//             walletBalanceContainer.appendChild(expirationElement);
//           }
//         } else {
//           rewardBalanceText.innerHTML =
//             "No rewards found for <span style='color:#4D4D4D;'>" +
//             countryCode.value +
//             " " +
//             phoneNumber.value +
//             "</span>";
//           amountElement.textContent = "₹0";
//           if (walletBalanceContainer.contains(expirationElement)) {
//             walletBalanceContainer.removeChild(expirationElement);
//           }
//         }

//         console.log(data.data.transactions[0]);
//         createTransactionTable(data.data.transactions);
//         // console.log("coin_name", coinName);
//         // console.log("coin_name_plural", coinNamePlural);
//         // console.log("total_balance", totalBalance);
//         // console.log("burn_multiplier", burnMultiplier);
//         // console.log("earn_multiplier", earnMultiplier);
//         // console.log("wallet_exists", walletExists);
//         // console.log(color);
//       })
//       .catch((error) => {
//         rewardBalanceText.innerHTML =
//           "No rewards found for <span style=' color:#4D4D4D;'>" +
//           countryCode.value +
//           " " +
//           phoneNumber.value +
//           "</span>";
//         amountElement.textContent = "₹0";
//         if (walletBalanceContainer.contains(expirationElement)) {
//           walletBalanceContainer.removeChild(expirationElement);
//         }
//         console.error("Fetch error:", error);
//       });

//     var inputValue = phoneNumber.value.trim();
//     console.log(countryCode.value);

//     if (
//       (inputValue.length === 10 && countryCode.value === "+ 91") ||
//       (countryCode.value !== "+ 91" && countryCode.value.length > 2)
//     ) {
//       if (mainScreenContainer.contains(errormessage)) {
//         mainScreenContainer.removeChild(errormessage);
//       }
//       headerContainer.prepend(backButton);
//       mainScreenContainer.removeChild(checkBalancebutton);
//       mainScreenContainer.replaceChild(
//         balanceContainer,
//         phoneNumberEntryContainer
//       );

//       return;
//     }

//     mainScreenContainer.insertBefore(errormessage, checkBalancebutton);
//     phoneNumber.style.border = "2px solid rgb(203, 39, 17)";
//     phoneNumber.style.boxShadow = "none";
//   }
//   function createTransactionTable(transactions) {
//     while (tbody.firstChild) {
//       tbody.removeChild(tbody.firstChild);
//     }
//     transactions.forEach((transactionData) => {
//       // Assuming created_on is the Unix timestamp you provided
//       var timestamp = transactionData.created_on;

//       // Create a new Date object using the timestamp
//       var date = new Date(timestamp);
//       var monthNames = [
//         "January",
//         "February",
//         "March",
//         "April",
//         "May",
//         "June",
//         "July",
//         "August",
//         "September",
//         "October",
//         "November",
//         "December",
//       ];
//       // Use the Date object methods to get the various components of the date
//       var year = date.getFullYear();
//       var month = date.getMonth(); // Months are zero-based
//       var day = date.getDate();
//       var hours = date.getHours();
//       var minutes = date.getMinutes();

//       var ampm = hours >= 12 ? "PM" : "AM";
//       hours = hours % 12;
//       hours = hours ? hours : 12; // 0 should be displayed as 12

//       // Format the date as you wish, for example: YYYY-MM-DD HH:mm:ss
//       var formattedDate = `${day} ${monthNames[month]} ${year} at ${hours}:${minutes} ${ampm}`;

//       const row = document.createElement("tr");
//       row.style.display = "table";
//       row.style.tableLayout = "fixed";
//       row.style.borderBottom = "1px solid #f0f0f0";
//       row.style.height = "52px";
//       row.style.width = "100%";
//       const idCell = document.createElement("td");
//       idCell.style.color = "#4d4d4d";
//       idCell.style.fontSize = "14px";
//       idCell.style.width = "35%";
//       idCell.style.height = "52px";
//       row.appendChild(idCell);

//       const amountCell = document.createElement("td");
//       amountCell.style.color = "#4d4d4d";
//       amountCell.style.fontSize = "14px";
//       amountCell.style.width = "65%";
//       amountCell.style.height = "52px";
//       row.appendChild(amountCell);

//       if (transactionData.transaction_type === "CREDIT") {
//         idCell.innerHTML =
//           '<span style="color: #2C874A; font-size: 18px; display: inline-flex; height: 52px; width: 30px; align-items: center; justify-content: center;">+</span>₹ ' +
//           transactionData.amount;
//         amountCell.innerHTML =
//           'Rewards credited <span style="font-weight: 400; font-size: 12px;line-height: 15px;display: block;color: #949494;">' +
//           formattedDate +
//           "</span>";
//         if (transactionData.reference === "ORDER") {
//           amountCell.innerHTML =
//             'Rewards on purchase <span style="font-weight: 400; font-size: 12px;line-height: 15px;display: block;color: #949494;">' +
//             formattedDate +
//             "</span>";
//         }
//       } else {
//         idCell.innerHTML =
//           '<span style="color: #CB2711; font-size: 18px; display: inline-flex; height: 52px; width: 30px; align-items: center; justify-content: center;">–</span>₹ ' +
//           transactionData.amount;
//         amountCell.innerHTML =
//           'Spent on purchase <span style="font-weight: 400; font-size: 12px;line-height: 15px;display: block;color: #949494;">' +
//           formattedDate +
//           "</span>";
//       }

//       idCell.style.border = "none";
//       idCell.style.padding = "0px 0px 0px 0px";

//       amountCell.style.border = "none";
//       amountCell.style.padding = "0px 0px 0px 8px";
//       tbody.appendChild(row);
//     });
//   }

//   function openEarnRewards() {
//     headerString.textContent = "Earn rewards";
//     const merchantId = accountID;

//     fetch(
//       `https://api.shopflo.co/banksy/api/v1/issuer/8d593cf0-99a5-4c0b-8988-0069fff0c197/merchant/${merchantId}/user-wallet/merchant-configuration`
//     )
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Data from the API:", data);
//         const pluralCoinName = data.data.configurations.coin_name_plural;
//         earnRewardsTextContainer.innerHTML =
//           "Unlock " +
//           pluralCoinName +
//           " on every purchase with " +
//           brandName +
//           "<br><br>Happy Shopping!";
//         // Process the data as needed
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });

//     headerContainer.prepend(backButton);
//     if (scrollDiv.contains(mainScreenContainer)) {
//       scrollDiv.removeChild(mainScreenContainer);
//     }

//     scrollDiv.appendChild(earnRewardsTextContainer);
//   }
//   //   function openFaq() {
//   //     headerString.textContent = "FAQ";
//   //     headerContainer.prepend(backButton);

//   //     scrollDiv.appendChild(faqContainerPoints);
//   //     if (scrollDiv.contains(mainScreenContainer)) {
//   //       scrollDiv.removeChild(mainScreenContainer);
//   //     }
//   //   }
//   function goBack() {
//     headerContainer.removeChild(backButton);
//     headerString.textContent = "My rewards";
//     if (scrollDiv.contains(earnRewardsTextContainer)) {
//       scrollDiv.removeChild(earnRewardsTextContainer);
//     }
//     // if (scrollDiv.contains(faqContainerPoints)) {
//     //   scrollDiv.removeChild(faqContainerPoints);
//     // }

//     if (
//       mainScreenContainer.contains(balanceContainer) &&
//       !mainScreenContainer.contains(transactionDetailsContainer)
//     ) {
//       mainScreenContainer.replaceChild(
//         phoneNumberEntryContainer,
//         balanceContainer
//       );
//       mainScreenContainer.insertBefore(
//         checkBalancebutton,
//         phoneNumberEntryContainer.nextSibling
//       );
//       if (mainScreenContainer.contains(transactionContainer)) {
//         mainScreenContainer.removeChild(transactionContainer);
//       }
//     } else if (mainScreenContainer.contains(transactionDetailsContainer)) {
//       headerContainer.prepend(backButton);
//       mainScreenContainer.appendChild(transactionContainer);
//       mainScreenContainer.appendChild(earnRewardsContainer);
//       //   mainScreenContainer.appendChild(faqContainer);
//       mainScreenContainer.removeChild(transactionDetailsContainer);
//     }

//     scrollDiv.insertBefore(mainScreenContainer, footerDiv);
//   }

//   function openTransaction() {
//     headerContainer.prepend(backButton);
//     mainScreenContainer.removeChild(transactionContainer);
//     mainScreenContainer.removeChild(earnRewardsContainer);
//     // mainScreenContainer.removeChild(faqContainer);
//     mainScreenContainer.appendChild(transactionDetailsContainer);
//   }

//   function toggleWidget() {
//     const WidgetChildContainer = document.getElementById(
//       "widget-childContainer"
//     );

//     // Toggle visibility and display properties
//     if (
//       WidgetChildContainer.style.visibility === "visible" &&
//       WidgetChildContainer.style.display === "block"
//     ) {
//       WidgetChildContainer.style.visibility = "hidden";
//       WidgetChildContainer.style.display = "none";
//       // document.body.style.overflow = "auto";
//     } else {
//       WidgetChildContainer.style.visibility = "visible";
//       WidgetChildContainer.style.display = "block";
//       // document.body.style.overflow = "hidden";
//     }
//     return;
//   }
//   window.addEventListener("resize", resizeCss);
// }

// function fatchShopDetails() {
//   const apiURL = "https://api.shopflo.co/public/api/v1/merchant-apps";
//   const shopURL = window.location.host;
//   let primaryColor;
//   let displayName;
//   let accounId;
//   // Construct the full URL with the query parameter
//   const fullURL = `${apiURL}?shop-url=${shopURL}`;

//   // Make the GET request using the fetch API
//   fetch(fullURL);
//   fetch(fullURL)
//     .then((response) => {
//       // Check if the request was successful (status code 200)
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       // console.log(response);
//       // Parse the JSON response
//       return response.json();
//     })
//     .then((data) => {
//       primaryColor = data.response.attributes.ui.color_pallet.primary_color;
//       displayName = data.response.attributes.shop_data.name;
//       accounId = data.response.account_id;
//       console.log(`Primary Color: ${primaryColor}`);
//       console.log(`Display Name: ${displayName}`);
//       // getRewardsWalletData(primaryColor, displayName, accounId);
//       createWidget(primaryColor, displayName, accounId);
//     })
//     .catch((error) => {
//       // Handle any errors that occurred during the fetch
//       console.error("Fetch error:", error);
//     });
// }

// var link = document.createElement("link");
// link.rel = "stylesheet";
// link.href = "https://fonts.googleapis.com/css2?family=Inter&display=swap";
// document.head.appendChild(link);

// document.addEventListener("DOMContentLoaded", fatchShopDetails);
