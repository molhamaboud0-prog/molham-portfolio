(function () {
  const deviceWrap = document.getElementById("deviceWrap");
  const app = document.getElementById("appRoot");
  const navButtons = document.querySelectorAll(".screen-nav button");
  const viewButtons = document.querySelectorAll(".vt-btn");

  const TAB_SCREENS = new Set(["home", "appointments", "records", "profile"]);

  let viewMode = "mobile";
  let currentScreen = "welcome";

  function resolveScreenId(id) {
    if (viewMode === "desktop" && (id === "home" || id === "welcome")) {
      return "desktop-home";
    }
    if (viewMode === "mobile" && id === "desktop-home") {
      return "home";
    }
    return id;
  }

  function updateTabBar(screenId) {
    const tabId = screenId === "desktop-home" ? "home" : screenId;
    app.querySelectorAll(".tab-bar").forEach((bar) => {
      bar.querySelectorAll(".tab").forEach((tab) => {
        tab.classList.toggle("on", tab.dataset.go === tabId);
      });
    });
  }

  function showScreen(id) {
    id = resolveScreenId(id);
    currentScreen = id;

    app.querySelectorAll(".screen").forEach((el) => {
      el.classList.toggle("active", el.dataset.id === id);
    });

    if (TAB_SCREENS.has(id) || id === "desktop-home") {
      updateTabBar(id);
    }

    navButtons.forEach((btn) => {
      const screen = btn.dataset.screen;
      const active =
        screen === id ||
        (screen === "home" && id === "desktop-home") ||
        (screen === "welcome" && id === "welcome");
      btn.classList.toggle("active", active);
    });
  }

  function setView(mode) {
    viewMode = mode;
    deviceWrap.classList.toggle("mobile", mode === "mobile");
    deviceWrap.classList.toggle("desktop", mode === "desktop");
    viewButtons.forEach((b) =>
      b.classList.toggle("active", b.dataset.view === mode)
    );
    showScreen(currentScreen === "desktop-home" ? "home" : currentScreen);
  }

  document.addEventListener("click", (e) => {
    const clickedButton = e.target.closest("button");
    if (clickedButton && !clickedButton.dataset.go) {
      const card = e.target.closest(".doctor-card[data-go], .hero-card[data-go]");
      if (!card) return;
    }
    const go =
      e.target.closest("button[data-go]") ||
      e.target.closest("article[data-go], .hero-card[data-go], .search-field[data-go]");
    if (go?.dataset.go) {
      e.preventDefault();
      showScreen(go.dataset.go);
    }
  });

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => showScreen(btn.dataset.screen));
  });

  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => setView(btn.dataset.view));
  });

  document.getElementById("slotGrid")?.addEventListener("click", (e) => {
    const slot = e.target.closest(".slot:not(.disabled)");
    if (!slot) return;
    const grid = slot.closest(".slots-grid");
    grid?.querySelectorAll(".slot").forEach((s) => s.classList.remove("selected"));
    slot.classList.add("selected");
  });

  showScreen("welcome");
})();