<!-- ============================================================================= -->
<!-- Ella Custom JS - Customize The Style For Layout -->
<!-- ============================================================================= -->

<!-- ============================================================================= -->
<!-- IMPORTANT DISCLAIMER -->
<!-- Please use only JS to style the layout. -->
<!-- ============================================================================= -->

  document.addEventListener('DOMContentLoaded', function() {
     var sizeChart = document.querySelector('.size-chart');


     sizeChart.addEventListener('click', function() {
         toggleChart(true);
         

     });
     var sizeChartCloser = document.querySelector('.size-chart-wrapper');
     sizeChartCloser.addEventListener('click', (e) => {
         e.stopImmediatePropagation();
         toggleChart(false)
     });

     var sizeChartContainer = document.querySelector('.size-chart-inner');
     sizeChartContainer.addEventListener('click', (e) => {

         e.stopPropagation();
     })

 });


 function toggleChart(a) {
     var sizeChartWrapper = document.querySelector('.size-chart-wrapper');
     if (a) {
         sizeChartWrapper.classList.add('activeChart');
         document.documentElement.style.overflow = 'hidden';
         document.body.style.overflow = 'hidden';
         toggleUnits(false)
     } else {
         sizeChartWrapper.classList.remove('activeChart');
         document.documentElement.style.overflow = 'visible';
         document.body.style.overflow = 'visible';
     }
 }


 const toggleElement = document.querySelector('.table-toggle');

 // Add click event listener to the .table-toggle element
 toggleElement.addEventListener('click', () => {
     // Get the current value of data-expanded attribute
     const isExpanded = toggleElement.getAttribute('data-expanded') === 'true';
     if (!isExpanded) {
         toggleUnits(true)
     } else {
         toggleUnits(false)
     }
     // Toggle the value of data-expanded attribute
     toggleElement.setAttribute('data-expanded', !isExpanded);
 });

 function convertToInches(cmValue) {
     const dashIndex = cmValue.indexOf('-');
     if (dashIndex === -1) {
         const cm = parseFloat(cmValue);
         const inch = cm / 2.54;
         return inch.toFixed(1) + ' in';
     } else {
         const [start, end] = cmValue.split('-').map((value) => parseFloat(value));
         const inchStart = start / 2.54;
         const inchEnd = end / 2.54;
         return inchStart.toFixed(1) + '-' + inchEnd.toFixed(1) + ' in';
     }
 }
 document.addEventListener('DOMContentLoaded', function() {
     const cmUnits = document.querySelectorAll('.cm-unit');

     cmUnits.forEach((cmUnit) => {
         const cmValue = cmUnit.textContent.trim();

         // If there's already a <span> element with 'inch' suffix, skip this cm-unit
         if (cmValue.endsWith(' inch')) return;

         const inchValue = convertToInches(cmValue);

         // Create a new <span> element with the inch suffix
         const inchSpan = document.createElement('div');
         inchSpan.classList.add('inch-units');
         inchSpan.setAttribute('hidden', '')
         inchSpan.textContent = ' ' + inchValue;

         // Append the new <span> with the inch suffix next to the .cm-unit element
         cmUnit.insertAdjacentElement('afterend', inchSpan);
     });
 });

 function toggleUnits(showCmUnits) {
     const cmUnits = document.querySelectorAll('.cm-unit');
     const inchUnits = document.querySelectorAll('.inch-units');

     if (showCmUnits) {
         cmUnits.forEach((cmUnit) => {
             cmUnit.removeAttribute('hidden');
         });
         inchUnits.forEach((inchUnit) => {
             inchUnit.setAttribute('hidden', true);
         });
     } else {
         cmUnits.forEach((cmUnit) => {
             cmUnit.setAttribute('hidden', true);
         });
         inchUnits.forEach((inchUnit) => {
             inchUnit.removeAttribute('hidden');
         });
     }
 }



    document.addEventListener("DOMContentLoaded", function() {
        const unitSelectors = document.querySelectorAll(".unit-selector");
        const p1Show = document.querySelector(".p1-show");
        const p2Show = document.querySelector(".p2-show");

        unitSelectors.forEach(function(selector, index) {
            selector.addEventListener("click", function() {
                if (index === 0) {
                    p1Show.style.display = "block";
                    p2Show.style.display = "none";
                } else {
                    p1Show.style.display = "none";
                    p2Show.style.display = "block";
                }
            });
        });
    });

const videoElements = document.querySelectorAll('#custom-product-video');
  const playPauseButtons = document.querySelectorAll('.play-pause-button');

  playPauseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      const video = videoElements[index];

      if (video.paused || video.ended) {
        video.play();
        button.classList.add('pause');
        button.classList.remove('play');
      } else {
        video.pause();
        button.classList.remove('pause');
        button.classList.add('play');
      }
    });
  });


document.addEventListener("DOMContentLoaded", function() {
        const autocompleteItems = document.querySelectorAll(".wizzy-autocomplete-label");

        autocompleteItems.forEach(function(item) {
            item.addEventListener("click", function() {
                document.body.classList.remove("open_search_desktop");
            });
        });
    });



document.addEventListener("DOMContentLoaded", function() {
        const cancelButton = document.querySelector("[data-cancel-quickshop-popup]");
        const haloPopup = document.querySelector(".halo-popup");

        cancelButton.addEventListener("click", function() {
            haloPopup.classList.remove("show");
        });
    });
