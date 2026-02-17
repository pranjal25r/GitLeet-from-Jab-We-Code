console.log("GitLeet content script loaded");

let alreadySent = false;

function detectLanguage() {
  let language = "txt";

  const langButton = document.querySelector('[data-cy="lang-select"]');

  if (langButton) {
    const langText = langButton.innerText.toLowerCase();

    if (langText.includes("c++")) language = "cpp";
    else if (langText.includes("java")) language = "java";
    else if (langText.includes("python")) language = "py";
    else if (langText.includes("javascript")) language = "js";
  }

  return language;
}

function getCodeFromMonaco() {

  const codeElement = document.querySelector(".monaco-editor .view-lines");

  if (codeElement) {
    return codeElement.innerText;
  }

  return "";
}


function tryPush() {

  if (alreadySent) return;

  if (!document.body.innerText.includes("Accepted")) return;

  console.log("Accepted detected");

  setTimeout(() => {

    const titleElement = document.querySelector('[data-cy="question-title"]');
    const title = titleElement
      ? titleElement.innerText.trim()
      : "Solution";

    const code = getCodeFromMonaco();

    if (!code) {
      console.log("Code not ready");
      return;
    }

    const language = detectLanguage();

    console.log("Sending to background...");

    chrome.runtime.sendMessage({
      type: "ACCEPTED_SUBMISSION",
      payload: { code, title, language }
    });

    alreadySent = true;

  }, 2000);
}

setInterval(tryPush, 1000);
