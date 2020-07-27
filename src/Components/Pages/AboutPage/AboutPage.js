import React from 'react';

import './AboutPage.css'

function AboutPage() {

      return(
        <>
            <br/>
            <br/>
            <p className="AboutText"> Two Macalester Computer Science majors created this website in the hopes of 
                increasing the accessability of this wonderful house to our student body.
                We urge you to enjoy the house whenever the website says it is open.
            </p>
            <br/>
            <br/>
            <p className="AboutText">
                If you are interested in practicing your web development skills, please ask a Fairmount 
                resident in order to get a developer's contact information.  We don't want to see 
                this work disappear once we're gone so don't be shy, use this as an opportunity to practice before graduating.
            </p>
            <br/>
            <br/>
            <p className="AboutText">
                Finally, if you're bored, there is a secret on this website that few (at least, only a few should) know about 
                (with 3 accompanying hidden clues to help you) so feel free to try look around and see what you can find.  
                It's relatively easy, but if you're new to web development if may seem cool.  Start on this page.
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