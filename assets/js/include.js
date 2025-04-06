document.addEventListener("DOMContentLoaded", function () {
    const loadComponent = (id, file) => {
      fetch(file)
        .then(res => {
          if (!res.ok) throw new Error(`Failed to load ${file}`);
          return res.text();
        })
        .then(data => {
          document.getElementById(id).innerHTML = data;
        })
        .catch(err => console.error(err));
    };
  
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
  });
  