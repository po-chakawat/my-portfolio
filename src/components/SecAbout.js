import React from 'react';

function SecAbout() {
  return (
    <section id="sec-about" className="about">
    <div className="container">
        <div className="row">
            <div className="flex-col">
    
                <img data-cursor="hover" className="about__img" src="./images/about-person.png" alt="Person" />
    
                <img className="about__gimmick" src="./images/about-gimmick.svg" alt="Gimmick" />
    
            </div>
            <div className="flex-col">
                <div className="heading">
                    <h2 className="heading__title">About Me</h2>
                </div>
                <div className="about__content">
                    <p className="about__content-desc">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi fugiat cum vel sint non
                        deleniti dolorem ea corporis ab, voluptatum illum assumenda suscipit voluptates, totam
                        cupiditate quae harum consectetur deserunt.
                    </p>
                    <div className="about__content-experience">
                        <span>99 +</span> <span>Year
                            experience</span>
                    </div>
                </div>
            </div>
        </div>
    
    
    </div>
    </section>
  );
}

export default SecAbout;
