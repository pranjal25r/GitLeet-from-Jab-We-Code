function observeAccepted() {
  const observer = new MutationObserver(() => {
    const result = document.querySelector('[data-e2e-locator="submission-result"]');
    if (result && result.innerText.includes("Accepted")) {
      const code = document.querySelector(".view-lines")?.innerText;
      const title = document.querySelector("h1")?.innerText || "Solution";

      if (code) {
        chrome.runtime.sendMessage({
          type: "ACCEPTED_SUBMISSION",
          payload: { code, title, language: "js" }
        });
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}

observeAccepted();
