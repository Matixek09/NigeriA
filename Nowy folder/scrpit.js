document.addEventListener('DOMContentLoaded', Function() {
	const homeLink = document.getElementById('home');
    const aboutLink = document.getElementById('about');
    const content = document.getElementById('content');
	
	 function showHomePage() {
        content.innerHTML = 
            <h1>Welcome my NI.. nice friend</h1>
            <p>Kontent o pokazywaniu smiesznych cza... czadowych ludzi</p>
        ;
    }
   
    function showAboutPage(){
		content.innerHTML =
		    <h1> O niasz cza... czadowych ludziach</h1>
			<p> ta strone istnieje.</p>
		;
	
	}
	
	homeLink.addEventListener('click', function(e) {
		 e.preventDefault();
        showHomePage();
    });

    aboutLink.addEventListener('click', function(e) {
        e.preventDefault();
        showAboutPage();
    });

    showHomePage();
});
	