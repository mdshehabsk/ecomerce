

export const getTemplate = ({token,username,url}: {token:string,username:string,url:string}) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Verification</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }

        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .header {
            background-color: #2c67e6;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }

        .header h1 {
            margin: 0;
            color: #ffffff;
            font-size: 24px;
        }

        .content {
            padding: 20px;
            text-align: center;
        }

        .content h2 {
            color: #333333;
            font-size: 20px;
            margin-bottom: 20px;
        }

        .content p {
            color: #666666;
            font-size: 16px;
            margin-bottom: 30px;
        }

        .verify-button {
            display: inline-block;
            padding: 12px 25px;
            font-size: 16px;
            color: #ffffff !important;
            background-color: #2c67e6;
            text-decoration: none;
            border-radius: 5px;
        }

        .verify-button:hover {
            background-color: #4b7eeb;
        }

        .footer {
            padding: 10px;
            text-align: center;
            color: #999999;
            font-size: 14px;
            border-top: 1px solid #dddddd;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="header">
            <h1>Verify Your Email</h1>
        </div>
        <div class="content">
            <h2>Hello, <%= ${username} %> </h2>
            <p>Thank you for registering with us. Please click the button below to verify your email address and activate your account.</p>
            <a href="${url}/verify-user?token=<%= ${token} %>" class="verify-button">Verify Email</a>
        </div>
        <div class="footer">
            <p>If you did not sign up for this account, please ignore this email.</p>
            <p>&copy; 2024 Pickaboo. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`
}