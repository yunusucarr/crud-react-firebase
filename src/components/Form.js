import emailjs from "emailjs-com";
import React from 'react';

export default function Form() {

    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('gmaill', 'template_byje14h', e.target, 'L8iYZsoBvffhkq7MK')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return(
        <div>
            <div className="container">
            <form onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto mb-5">
                        <div className="col-8 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="İsim" name="name"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Adresiniz" name="email"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Konu" name="subject"/>
                        </div>
                        <div className="col-8 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Mesajınız" name="message"></textarea>
                        </div>
                        <div className="col-8 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Mesaj Gönder"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}