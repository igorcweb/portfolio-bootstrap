(function() {
  var year = document.querySelector('#year');
  year.innerText = new Date().getFullYear();
  document.querySelector('button').addEventListener('mouseover', function() {
    this.classList.add('btn-outline-till');
  });
  document.querySelector('button').addEventListener('mouseout', function() {
    this.classList.remove('btn-outline-till');
  });
})();
