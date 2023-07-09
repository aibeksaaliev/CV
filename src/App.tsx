import React from 'react';
import './App.css';
import Skills from "./features/Skills";
import Education from "./features/Education";
import Experience from "./features/Experience";

function App() {
    const calculate = (array: number [], number: number) => {
        const result: number[] = [];
        const filteredArray = array.filter((num) => num <= number);

        filteredArray.forEach((num) => {
            if (num === number) {
                result.push(num);
            }

            filteredArray.forEach((num2, i2) => {
                let sum = 0;
                sum = sum + num + filteredArray[i2];
                console.log(sum);
                if ( sum === number) {
                    result.push(num, num2);
                }
            })
        });

        // const tab = result.filter((num, index) => {
        //     return result.indexOf(index) === index;
        // })

        return result;
    };

    console.log(calculate([1,2,6], 9));

    return (
        <div className="container">
            <header>
                <nav>

                </nav>
            </header>
            <main>
                <div className="profile-block">
                    <div className="profile-photo">
                        <img src="https://lmpixels.com/demo/leven-html-new/full-width-dark/img/main_photo.jpg" alt=""/>
                    </div>
                    <div className="profile-info">
                        <span>Frontend Developer</span>
                        <h1>Aibek Saaliev</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur, atque consequatur doloribus eos fugit labore laudantium minima nostrum pariatur quam quod rem, saepe. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex laborum nesciunt numquam quos similique, vero?</p>
                        <div className="profile-buttons">
                            <button className="button download-button">Download CV</button>
                            <button className="button contact-button">Contact</button>
                        </div>
                    </div>
                </div>
                <Skills/>
                <Education/>
                <Experience/>
            </main>
        </div>
    );
}

export default App;
