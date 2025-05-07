"use client";

import { useEffect } from "react";


export default function Expo() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v22.0&appId=1788795771686379";
        script.async = true;
        script.defer = true;

        script.onload = () => {
            window.FB.init({
                appId: "1788795771686379",
                xfbml: true,
                version: "v22.0",
                crossorigin: "anonymous",
            });
        };
        document.body.appendChild(script);
    }, []);

    return (
        <div className="min-h-screen">
            <div className="flex flex-col items-center min-h-screen pt-10 gap-4 pb-10">
                <h1 className="md:text-6xl text-4xl">Expo</h1>
                <p className="text-lg md:w-1/2 w-5/6 text-justify">
                    The Expo is a showcase of our work and progress during the project. It includes a presentation of our game, Ynnos the Ekamer, and a demonstration of its features. It takes place on the 16th of May 2025 at KTH Kista campus, Kistagången 16, where we will be presenting our game to the public between 10:30-15:30. The Expo is an opportunity for us to share our work with others and receive feedback on our project. It is also a chance for you to test our game, meet the team and ask any questions you may have!
                    <br />
                    <br />
                    If you are unable to attend the Expo in person, we will be available on Zoom during the event! Join the meeting using on <a href="https://kth-se.zoom.us/j/68783306169" target="_blank" className="text-blue-500 hover:text-blue-700 dark:text-blue-300">Zoom here!</a>
                    <br />
                    <br />
                    We are proud to present our game and hope you enjoy it!
                </p>
                <p className="text-lg md:w-1/2 w-5/6">
                    If you want to know more or have any questions, do not hesitate to email us at <a className="text-blue-500 hover:text-blue-700 dark:text-blue-300" href="mailto:contact@decisiontree.se">contact@decisiontree.se</a>.
                </p>
                <div className="p-6 w-full md:w-1/2">
                    <div className="flex flex-col items-center justify-center mt-6 rounded-lg shadow-lg bg-white w-full overflow-hidden pb-4">
                        <h2 className="text-2xl m-4 text-black">Follow us on Facebook!</h2>
                        <p className="mb-4 text-black text-lg md:w-1/2 w-5/6 text-justify">We will be posting updates and information about the Expo on our <a className="text-blue-500 hover:text-blue-700" href="https://www.facebook.com/profile.php?id=61576173115948" target="_blank"   >Facebook page</a>. Make sure to follow us to stay updated!</p>
                        <h2 className="text-2xl m-4 mt-6 text-black">Check out our latest post!</h2>
                        <div className="fb-post" data-href="https://www.facebook.com/permalink.php?story_fbid=pfbid02TgxMJKea8P4npTDSweWKazZtNkDwyG2GhRauaQM3uArFMLYpegvAkyyA7mA2o12kl&amp;id=61576173115948" data-width="500" data-show-text="true"><blockquote cite="https://www.facebook.com/permalink.php?story_fbid=122095300394872437&amp;id=61576173115948" className="fb-xfbml-parse-ignore"><p>Don&#039;t miss our Expo on May 16th! We will be showing of our game, Ynnos The Ekamer!</p>Posted by <a href="https://www.facebook.com/people/Team-Decisiontree/61576173115948/">Team Decisiontree</a> on&nbsp;<a href="https://www.facebook.com/permalink.php?story_fbid=122095300394872437&amp;id=61576173115948">Wednesday, May 7, 2025</a></blockquote></div>
                    </div>
                </div>
            </div>
        </div >
    )
}
