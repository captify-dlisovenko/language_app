import React from 'react';
import {Button, Form} from "react-bootstrap";
import LanguageContext from "../context/LanguageContext";
import translations from "./translation";

// function ReviewForm(props) {
//
//     return (
//         <>
//             <Form.Group controlId="exampleForm.ControlTextarea1">
//                 <Form.Label>
//                     <LanguageContext.Consumer>
//                         {(value) => translations.titleText[value]}
//                     </LanguageContext.Consumer>
//                 </Form.Label>
//                 <Form.Control as="textarea" rows="3"/>
//             </Form.Group>
//             <Button>
//                 <LanguageContext.Consumer>
//                     {(value)=> translations.buttonText[value]}
//                 </LanguageContext.Consumer>
//
//             </Button>
//         </>
//     )
// }
//
// export default ReviewForm;


class ReviewForm extends React.Component {

    static contextType = LanguageContext;

    render() {

        console.log(this.context)
        return (
            <>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>{translations.titleText[this.context]}</Form.Label>
                    <Form.Control as="textarea" rows="3"/>
                </Form.Group>
                <Button>{translations.buttonText[this.context]}</Button>
            </>

        )
    }
}

export default ReviewForm;