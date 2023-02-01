import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

function NewMeetupForm() {
    return (
        <Card>
            <form className={classes.form}>
                <div className={classes.control}>
                    <label htmlFor="title">Meetup Title</label>
                    <input type="text" id="title" required></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required></input>
                </div>

                <div className={classes.control}>
                    <label htmlFor="description">Description</label>
                    <textarea id="description" required rows={5}></textarea>
                </div>

                <div className={classes.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    );
}
export default NewMeetupForm;