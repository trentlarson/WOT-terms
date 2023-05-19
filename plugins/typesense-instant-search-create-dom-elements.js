const typesenseInstantSearchCreateDomElements = () => {
  const domStringSearchBox = `<div id="searchbox"></div>`;
  const domStringSearchResult = `
<div class="results-section-modal-backdrop">
<div id="results-section" class="container padding--lg">
   <h1 class="sr-only">Search Results</h1>
   <div class="row">
      <div class="col col--2">
          <h2 class="text--center">Refine</h2>
          <nav class="">
            <div class="" id="filters-section">
               <div class="row">
                  <div class="">
                     <div class="" id="current-refinements"></div>
                  </div>
               </div>
               <div class="row">
                  <div class="margin-top--lg">
                     <h3 class="">Website</h3>
                     <div id="site-name-refinement-list"></div>
                  </div>
               </div>
               <div class="row">
                  <div class="margin-top--lg">
                     <h3 class="">Knowledge Level</h3>
                     <div id="knowledgelevel-refinement-list"></div>
                  </div>
               </div>
               <div class="row">
                  <div class="margin-top--lg">
                     <h3 class="">Type</h3>
                     <div id="type-refinement-list"></div>
                  </div>
               </div>
               <div class="row">
                  <div class="margin-top--lg">
                     <h3 class="">Subject</h3>
                     <div id="subject-refinement-list"></div>
                  </div>
               </div>
            </div>
         </nav>
      </div>
      <div class="col col--10">
        <h2 class="text--center">Results</h2>
         <div id="hits"></div>
         <div id="pagination"></div>
      </div>
   </div>
</div>
</div>
  `;

  // Add searchbar to dom
  // const searchbar = document.createElement('div');
  // searchbar.id = 'searchbar';
  // searchbar.innerHTML = domStringSearchBox;
  if (document.querySelector('#results-section') === null) {
    document
      .querySelector('body')
      .insertAdjacentHTML('afterbegin', domStringSearchResult);
  }
  if (document.querySelector('#searchbox') === null) {
    document
      .querySelector('body')
      .insertAdjacentHTML('afterbegin', domStringSearchBox);
    // .querySelector('.navbar__inner')
    // .insertAdjacentHTML('beforeend', domStringSearchBox);
  }
};

export function onRouteDidUpdate({ location, previousLocation }) {
  // Don't execute if we are still on the same page; the lifecycle may be fired
  // because the hash changes (e.g. when navigating between headings)
  if (location.pathname === previousLocation?.pathname) return;
  typesenseInstantSearchCreateDomElements();
}