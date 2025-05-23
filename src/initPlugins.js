export function initAllPlugins() {
  // Tabs logic
  const tabs = document.querySelectorAll(".ant-tabs-tab");
  const tabBtns = document.querySelectorAll(".ant-tabs-tab-btn");
  const panels = document.querySelectorAll("[id^='rc-tabs-2-panel']");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("ant-tabs-tab-active"));
      tabBtns.forEach(btn => btn.setAttribute("aria-selected", "false"));
      panels.forEach(panel => panel.style.display = "none");

      tab.classList.add("ant-tabs-tab-active");
      tabBtns[index].setAttribute("aria-selected", "true");

      const panelId = tabBtns[index].getAttribute("aria-controls");
      const panelToShow = document.getElementById(panelId);
      if (panelToShow) {
        panelToShow.style.display = "block";
      }
    });
  });

  panels.forEach((panel, idx) => {
    panel.style.display = idx === 0 ? "block" : "none";
  });

  // openThis function
  window.openThis = function () {
    document.querySelectorAll('.ant-select-dropdown')
      .forEach(el => el.classList.toggle('ant-select-dropdown-hidden'));
  };

  // toggleSummary function
  window.toggleSummary = function () {
    const body = document.getElementById("summaryBody");
    if (body) body.classList.toggle('ant-collapse-content-hidden');
  };

  // Checkbox toggle for billing form
  const checkbox = document.getElementById('billToDiffCheckbox');
  if (checkbox) {
    checkbox.addEventListener('change', function () {
      const form = document.getElementById('billingForm');
      if (form) form.style.display = this.checked ? 'block' : 'none';
    });
  }

  // Specs/Reviews tabs logic
  const specTabs = document.querySelectorAll(".specsTabs ul li h2");
  const specsSection = document.querySelector(".specification_main_custom");
  const reviewsSection = document.querySelector(".tab-content-item");

  if (specTabs.length && specsSection && reviewsSection) {
    // Initial state
    specsSection.style.display = "block";
    reviewsSection.style.display = "none";
    specTabs[0].classList.add("border-bottom-black");

    specTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        specTabs.forEach(t => t.classList.remove("border-bottom-black"));
        tab.classList.add("border-bottom-black");

        if (tab.getAttribute("title") === "Specifications") {
          specsSection.style.display = "block";
          reviewsSection.style.display = "none";
        } else if (tab.getAttribute("title") === "Reviews") {
          specsSection.style.display = "none";
          reviewsSection.style.display = "block";
        }
      });
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initAllPlugins();
});

// export function initAllPlugins() {
//   const tabs = document.querySelectorAll(".ant-tabs-tab");
//   const tabBtns = document.querySelectorAll(".ant-tabs-tab-btn");
//   const panels = document.querySelectorAll("[id^='rc-tabs-2-panel']");

//   tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//       tabs.forEach(t => t.classList.remove("ant-tabs-tab-active"));
//       tabBtns.forEach(btn => btn.setAttribute("aria-selected", "false"));
//       panels.forEach(panel => panel.style.display = "none");

//       tab.classList.add("ant-tabs-tab-active");
//       tabBtns[index].setAttribute("aria-selected", "true");

//       const panelId = tabBtns[index].getAttribute("aria-controls");
//       const panelToShow = document.getElementById(panelId);
//       if (panelToShow) {
//         panelToShow.style.display = "block";
//       }
//     });
//   });

//   panels.forEach((panel, idx) => {
//     panel.style.display = idx === 0 ? "block" : "none";
//   });

//   window.openThis = function () {
//     document.querySelectorAll('.ant-select-dropdown')
//       .forEach(el => el.classList.toggle('ant-select-dropdown-hidden'));
//   };

//   window.toggleSummary = function () {
//     const body = document.getElementById("summaryBody");
//     if (body) body.classList.toggle('ant-collapse-content-hidden');
//   };

//   const checkbox = document.getElementById('billToDiffCheckbox');
//   if (checkbox) {
//     checkbox.addEventListener('change', function () {
//       const form = document.getElementById('billingForm');
//       if (form) form.style.display = this.checked ? 'block' : 'none';
//     });
//   }
// }
