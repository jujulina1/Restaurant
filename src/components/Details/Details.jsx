import "../Details/Details.css"

export default function Details() {
    return (


        <section id="details">
            <div className="item">

                <div className="item-image-container">
                    <img src="/images/blog-img-04.jpg" alt="example1" />
                </div>
                <h3 className="name-product">Sandwich with avocado</h3>
                <p className="grams">1 Portion: 300gr</p>
                <p className="calories">Calories: 235</p>
                <h3 className="heading">Ingredients:</h3>
                <p>2 bunches spinach, rinsed and torn into bite-size pieces, 4 cups sliced strawberries,
                   ½ cup vegetable oil,
                   ½ cup white sugar,
                   ¼ cup white wine vinegar,
                   2 tablespoons sesame seeds,
                   1 tablespoon poppy seeds,
                   ¼ teaspoon paprika</p>
                   <h3 className="heading">Directions:</h3>
                   <p>Whisk oil, sugar, vinegar, sesame seeds, poppy seeds, and paprika together in a medium bowl; pour over spinach and strawberries, and toss to coat.
                   </p>
                    <div id="action-buttons" className="button-container">
                        <a href="" id="edit-btn" className="button">Edit</a>
                        <a href="" id="delete-btn" className="button">Delete</a>
                    </div>
           </div>
      
        </section>
        
    )
}