import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const formData = await req.formData();
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        console.log(name,email,message);
        if (!name || !email || !message) {
            return new Response(JSON.stringify({ message: "All fields are required" }), {
                status: 400,
                headers: { "Content-Type": "application/json" }
            });
        }
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL, 
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New message from ${name}`,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
            status: 200,
            headers: { "Content-Type": "application/json" }
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ message: "Internal Server Error" }), {
            status: 500,
            headers: { "Content-Type": "application/json" }
        });
    }
}
