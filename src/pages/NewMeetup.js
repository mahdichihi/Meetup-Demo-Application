// React Hook useNavigate
import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData) {
        // fetch is a JS function to send HTTP requests
        fetch(
            "https://react-meetup-demo-application-default-rtdb.firebaseio.com/meetups.json",
            {
                method: "POST",
                body: JSON.stringify(meetupData),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            // This line is using the navigate function from the useNavigate hook provided by react-router-dom to navigate to a new route.
            // The first argument "/" is the target route the user will be redirected to.
            // The second argument { replace: true } is an options object with the replace property set to true..
            // This means that the current route will be replaced with the target route, instead of added to the history..
            // As a result, the user won't be able to navigate back to the previous route using the browser's back button.
            navigate("/", { replace: true });
        });
    }
    return (
        <section>
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </section>
    );
}

export default NewMeetupPage;
