document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn30").addEventListener("click", () => filterJobs(1800));
    document.getElementById("btn60").addEventListener("click", () => filterJobs(3600));
    document.getElementById("btn360").addEventListener("click", () => filterJobs(21600));
  });
  
  function filterJobs(seconds) {
    console.log("Button clicked. Seconds:", seconds);
  
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs.length === 0) {
        console.log("No active tabs found.");
        return;
      }
  
      const tab = tabs[0];
      console.log("Current tab URL:", tab.url);
  
      if (!tab.url.includes("linkedin.com/jobs")) {
        alert("Please open a LinkedIn Jobs search page.");
        return;
      }
  
      try {
        const url = new URL(tab.url);
        console.log("Parsed URL:", url.toString());
  
        // Set or update f_TPR parameter
        url.searchParams.set("f_TPR", `r${seconds}`);
        const newUrl = url.toString();
  
        console.log("Updated URL:", newUrl);
  
        // Redirect the current tab to the new URL
        chrome.tabs.update(tab.id, { url: newUrl });
      } catch (err) {
        console.error("Error updating URL:", err);
      }
    });
  }
  