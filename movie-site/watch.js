const params = new URLSearchParams(window.location.search);

const id = params.get("id");

document.getElementById("player").innerHTML = `
<iframe
width="100%"
height="700"
src="https://vidsrc.to/embed/movie/${id}"
frameborder="0"
allowfullscreen>
</iframe>
`;