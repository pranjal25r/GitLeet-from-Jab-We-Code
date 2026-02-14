function checkSubmission() {
    const result = document.querySelector('.text-green-500');

    if (result && result.innerText.includes("Accepted")) {
        const problemTitle = document.querySelector('div[data-cy="question-title"]').innerText;
        const code = document.querySelector('.view-lines').innerText;

        chrome.runtime.sendMessage({
            type: "ACCEPTED",
            title: problemTitle,
            code: code
        });
    }
}

setInterval(checkSubmission, 5000);
