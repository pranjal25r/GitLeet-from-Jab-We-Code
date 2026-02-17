console.log("GitLeet content script loaded");

let alreadySent = false;

function detectLanguage() {
  let language = "txt";

  // Find button that contains known language text
  const buttons = document.querySelectorAll("button");

  for (let btn of buttons) {
    const text = btn.innerText.trim().toLowerCase();

    if (text.includes("c++")) {
      language = "cpp";
      break;
    }
    if (text.includes("java")) {
      language = "java";
      break;
    }
    if (text.includes("python")) {
      language = "py";
      break;
    }
    if (text.includes("javascript")) {
      language = "js";
      break;
    }
  }

  console.log("Detected language:", language);
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
