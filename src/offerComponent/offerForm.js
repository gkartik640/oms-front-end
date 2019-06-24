import React,{Component} from 'react';


class OfferCreate extends Component {
    /*const flat = ();
    const percentage = ();
    const coupon = ();
    control = {} => {
    if(this.refs.Offertype.value === coupon)
    Show = coupon;
    else if(this.refs.Offertype.value === flat)
    Show = flat;
    else
    Show = percentage;
    //create object and initialize it
    }*/

    handleSubmission = {} => {
        this.validateForm();

        var request = new Request (`url` , object);
        var response = fetch(request);
        
    }
    render() {
        return (
            <div id = "form">
                <form onSubmit = {this.handleSubmission}>
                    <fieldset>
                        <legend>Create Offer</legend>
                        Start date: <input refs = "date" type = "date"><br />
                        Duration: <input refs = "duration" type = "number" />
                        Use type<input refs = 'type' type = 'number' min = '1' /><br / >
                        Display type:<br />
                        <input type = 'radio' refs = 'showtype' >Image</input>
                        <input type = 'radio' refs = 'showtype'>Text</input>
                        Display Content:
                        <input type = 'text' />
                        Offer type:
                        <input type = 'radio' refs = 'Offertype' value = 'coupon' />Coupon
                        <input type = 'radio' refs = 'Offertype' value = 'flat' />Flat
                        <input type = 'radio' refs = 'Offertype' value = 'percentage' />Percentage
                        <button onClick = {this.control}>Next</button>
                    </fieldset>
                    <fieldset>
                      <Show />
                    </fieldset>
                </form>
            </div>
        )
    }

}



export default OfferCreate;