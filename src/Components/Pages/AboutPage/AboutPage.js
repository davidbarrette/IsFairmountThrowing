import React from 'react';

// import './AboutPage.css'

function AboutPage() {

      return(
        <>
            <p>We, two Macalester Computer Science majors created this website in the hopes of 
                increasing the accessability of this wonderful house to our student body.  No one 
                who wants to hang out with some kind-hearted people on the weekends should go without.
                We urge you to enjoy the house as well as the website.
            </p>
            <p>
                If any are interested in continuing the development of thiswebsite after we graduate, we 
                ask that you get in contact with a resident of Fairmount to contact the sites 
                developers.  We don't want to see this work disappear once we're gone so don't be shy, use 
                this as an opportunity to practice web development.  But, you should think about finding a 
                crucial secret hidden within the site before asking, we may ask about it (this is supposed to be fun,
                if you can't find it, ask and we can help you)
            </p>

            <p hidden>
                Well that was pretty easy, if you've had experience in webdev before. Finally,
                for the secret.  This website is created in React, and is therefore a website
                composed of components.  There are three components rendered on any given screen, 
                might want to take a hard look at the one in the middle.
            </p>
        </>
      )
}

export default AboutPage