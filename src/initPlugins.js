export function initAllPlugins() {
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
}  
