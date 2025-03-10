import styles from "../Home/Home.module.css"

export default function Home() {
    return (
        <section id={styles.home}>
          
            	<h1 className={styles.welcome}><strong>Welcome To <br/> Live Dinner Restaurant</strong></h1>
				<p className={styles.content}>See how your users experience your website in realtime or view  <br/> 
				trends to see any changes in performance over time.</p>
                <div>
                    <a href="#" className="button">About Us</a>
                </div>
     </section>
    )
}