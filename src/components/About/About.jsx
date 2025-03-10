import "../About/About.css"

export default function About() {
    return (
    <section id="about">
        <div className="about-page-cover">
		
			<div className="container">
				<div className="about-content-container">
				
						<h1>Welcome To <span>Live Dinner Restaurant</span></h1>
						<h4>Little Story</h4>
                        <div className="paragraphs">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque auctor suscipit feugiat. Ut at pellentesque ante, sed convallis arcu. Nullam facilisis, eros in eleifend luctus, odio ante sodales augue, eget lacinia lectus erat et sem. </p>
						<p>Sed semper orci sit amet porta placerat. Etiam quis finibus eros. Sed aliquam metus lorem, a pellentesque tellus pretium a. Nulla placerat elit in justo vestibulum, et maximus sem pulvinar.</p>
                        </div>

						<a className="button" href="#">Reservation</a>
					
				</div>
				<div className="about-image-container">
					<img src="images/about-img.jpg" alt="" className="img-fluid"/>
				</div>
            </div>
	    </div>
        <div className="about-page-comment">
            <p>" If you're not the one cooking, stay out of the <br/> way and compliment the chef. "</p>
            <p>Michael Strahan</p>
        </div>
    </section>
    )
}