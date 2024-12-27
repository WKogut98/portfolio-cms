import { SENDGRID_API_KEY } from "$env/static/private";
import sgMail from "@sendgrid/mail";
import { json } from "@sveltejs/kit";

sgMail.setApiKey(SENDGRID_API_KEY);

export async function POST({request})
{
    const {contactName, contactMail, contactMessage} = await request.json();

    if(!contactMail || !contactName || !contactMessage)
    {
        json({message: "Could not send email. missing data"}, {status: 400});
    }

    const message = {
        to: 'wojciech.kogut7@gmail.com',
        from: 'wojciech.kogut7@gmail.com',
        subject: 'New message from portfolio site!',
        html: `You have new message from your contact form. <br/>
                <p>Name: ${contactName}</p>
                <p>Email: ${contactMail}</p>
                <p>Message:<br/> ${contactMessage}</p>`
    };

    try
    {
        await sgMail.send(message);
        return json({emailSentsucessfully: true});
    }
    catch(err)
    {
        return json({err}, {status: 500});
    }
}